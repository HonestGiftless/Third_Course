import React, { useEffect, useState } from "react";

import { PlayerContainer, LeftContainer, TrackImg, InfoContainer, CenterContainer, ControlsTop, ControlsBottom, TimeWrapper, Time, TimePoint, RightContainer, VolumeWrapper, VolumeLine, VolumePoint } from "./styled"

import { H6, Subtitle } from "../Text/styled";

import PlayBig from "../../assets/icons/PlayBig"
import PauseBig from "../../assets/icons/PauseBig";
import SkipBack from "../../assets/icons/SkipBack"
import SkipForward from "../../assets/icons/SkipForward"
import Volume from "../../assets/icons/Volume"

// компонент плеера (визуальная часть)

const PlayerUI = () => {
	// создаем состояние и сеттеры для плеера
	const [time, setTime] = useState(0) // для времени
	const [info, setInfo] = useState(null) // для информации
	const [duration, setDuration] = useState(null) // для длительности
	const [status, setStatus] = useState(false) // для статуса (играет или нет)
	const [volume, setVolume] = useState(1) // для громкости

	const [timeHover, setTimeHover] = useState(false) // состояние наведения мышкой на полоску времени
	const [volumeHover, setVolumeHover] = useState(false) // состояние наведения мышкой на полоску громкости

	const convertTime = (time) => { // переводим секунды в минуты и секунды для отображения
		if (time >= 3600) {
			const hours = Math.floor(time / 3600)
			const minutes = Math.floor((time % 3600) / 60)
			const seconds = Math.floor(time % 60)
			if ((minutes < 10) && (seconds < 10)) return `${hours}:0${minutes}:0${seconds}`
			if ((minutes < 10)) return `${hours}:0${minutes}:${seconds}`
			if ((seconds < 10)) return `${hours}:${minutes}:0${seconds}`
			return `${hours}:${minutes}:${seconds}`
		}
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time - minutes * 60)
		if (seconds < 10) return `${minutes}:0${seconds}`
		return `${minutes}:${seconds}`
	}

	setInterval(() => { // так как мы не можем подтянуть состояние из другого компонента и из глобальной зоны, мы обновляем локальное состояние, постоянно получая актуальное
		if (global.playerControls.time) { // получаем время, если не существует (например, плеер еще не инициалировался), ставим стандартное значение, аналогично для остальных
			setTime(global.playerControls.time)
		} else {
			setTime(0)
		}

		if (global.playerControls.info) { // получаем информацию
			setInfo(global.playerControls.info)
		} else {
			setInfo(null)
		}

		if (global.playerControls.duration) { // получаем длительность
			setDuration(global.playerControls.duration)
		} else {
			setDuration(0)
		}

		setVolume(global.player.current.volume) // получаем громкость

		if (global.player.current.duration > 0 && !global.player.current.paused) { // получаем состояние
			setStatus(true)
		} else {
			setStatus(false)
		}
	}, 100)

	const timeClick = (e) => { // при нажатии на полоску времени
		const target = e.currentTarget // получаем элемент
		const rect = target.getBoundingClientRect() // получаем его границы на экране
		const x = e.clientX - rect.left // находим относительную точку, куда нажал пользователь
		const width = rect.width
		const progress = x / width // считаем, какая это часть полоски, относительно 100%
		global.player.current.currentTime = Math.round(duration * progress) // устанавливаем время воспроизведения согласно нажатию пользователя
	}

	const volumeClick = (e) => { // при нажатии на полоску громкости
		const target = e.currentTarget // получаем элемент
		const rect = target.getBoundingClientRect() // получаем его границы на экране
		const x = e.clientX - rect.left // находим относительную точку, куда нажал пользователь
		const width = rect.width
		const progress = x / width // считаем, какая это часть полоски, относительно 100%
		global.player.current.volume = progress // устанавливаем громкость согласно нажатию пользователя
	}

	return (
		<PlayerContainer> {/* контейнер плеера */}
			<LeftContainer>
				<TrackImg style={info ? {} : {visibility: "hidden"}} src={info ? info.image : ""} /> {/* обложка трека, если ничего не играет, не показываем */}
				<InfoContainer>
					<Subtitle>{info ? info.name : ""}</Subtitle> {/* название трека, если ничего не играет, пишем пустую строку */}
					<Subtitle color={"rgba(255, 255, 255, 0.5)"}>{info ? info.artist : ""}</Subtitle> {/* автор трека, аналогично названию */}
				</InfoContainer>
			</LeftContainer>
			<CenterContainer>
				<ControlsTop style={{cursor: "pointer"}}>
					<SkipBack /> {/* иконка назад */}
					{/* в зависимости от состояния плеера, отображаем либо иконку "играть", либо иконку "паузы" */}
					{/* на них стоят события, при нажатии которых мы ставим на паузу, или продолжаем */}
					{status ? <PauseBig onClick={() => {global.player.current.pause()}} /> : <PlayBig onClick={() => {global.player.current.play()}} />}
					<SkipForward /> {/* иконка вперед */}
				</ControlsTop>
				<ControlsBottom>
					<H6>{time ? convertTime(time) : "0:00"}</H6> {/* текущее время воспроизведения */}
					{/* полоска времени. если человек наводится на нее мышкой, мы меняем статус. также стоит собитие при нажатии на перемотку трека */}
					<TimeWrapper onMouseEnter={() => setTimeHover(true)} onMouseLeave={() => setTimeHover(false)} onClick={(e) => {timeClick(e)}}>
						<Time style={{width: (time / duration * 100 + "%")}} />
						{/* точка, которая отображается при наведении */}
						{timeHover ? <TimePoint style={{left: `max(calc(${(time / duration * 100)}% - 8px), 0px)`}} /> : <></>}
					</TimeWrapper>
					<H6>{duration ? convertTime(duration) : "0:00"}</H6> {/* длительность трека */}
				</ControlsBottom>
			</CenterContainer>
			<RightContainer>
				<Volume /> {/* иконка громкости */}
				{/* полоска громкости. если человек наводится на нее мышкой, мы меняем статус. также стоит собитие при нажатии на изменение громкости */}
				<VolumeWrapper onMouseEnter={() => setVolumeHover(true)} onMouseLeave={() => setVolumeHover(false)} onClick={(e) => {volumeClick(e)}}>
					<VolumeLine style={{width: (volume * 100 + "%")}} />
					{volumeHover ? <VolumePoint style={{left: `max(calc(${(volume * 100)}% - 8px), 0px)`}} /> : <></>} {/* точка, которая отображается при наведении */}
				</VolumeWrapper>
			</RightContainer>
		</PlayerContainer>
	)
}

export default PlayerUI