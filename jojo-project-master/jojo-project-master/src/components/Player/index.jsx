import React, {useRef, useState, useEffect} from "react"

// компонент плеера (функциональная часть)

const Player = () => {
	const player = useRef() // создаем ссылку на будущий плеер
	const [track, setTrack] = useState(null) // состояние и сеттер для трера
	const [info, setInfo] = useState(null) // состояние и сеттер для информации 
	const [time, setTime] = useState(null) // состояние и сеттер для времени
	const [duration, setDuration] = useState(null) // состояние и сеттер для длительности
	const [ready, setReady] = useState(false) // состояние и сеттер для готовности плеера к воспроизведению

	const setVolume = (volume) => {
		player.current.volume = volume  // установка громкости
	}
	
	useEffect(() => { // после инициализации компонента делаем некоторые действия
		const playerControls = { // добавляем состояния и сеттеры в словарь
			setTrack: setTrack,
			setInfo: setInfo,
			info: info,
			time: time,
			duration: duration,
		}

		player.current.addEventListener("loadeddata", () => { // делаем слушатель состояния плеера на готовность
			setReady(player.current.readyState === 4)
		});

		global.player = player // выгружаем плеер в глобальную зону
		global.playerControls = playerControls // выгружаем доп вещи для плеера в глобальную зону
		global.playerReady = ready // выгружаем состояние готовности плеера в глобальную зону

		player.current.addEventListener("timeupdate", () => { // ставим слушатель на обновление времени воспоизведения
			setTime(player.current.currentTime) // обновляем состояние
			setDuration(player.current.duration)
		});
	})

	return (
		<audio autoPlay ref={player} src={track}></audio> // добавляем плеер, привязываем ссылку и url трека из состояния
	)
}

export default Player
