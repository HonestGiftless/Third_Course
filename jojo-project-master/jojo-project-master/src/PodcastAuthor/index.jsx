import React, { useState } from 'react'
import { useParams } from "react-router-dom"

import Layout from '../components/Layout'
import Menu from '../components/Menu'

import { MainContainer, BottomContainer, InfoContainer, InfoLeftContainer, InfoRightContainer, InfoRightTopContainer, InfoRightBottomContainer, TracksContainer, Tracks, TrackContainer, BackButton, AdditionalContainer } from "./styled"
import TopContainer from "../components/TopContainer"
import { WhiteButton, BlackButton } from "../components/Buttons/styled"

import Play from "../assets/icons/Play"
import Heart from "../assets/icons/Heart"
import Share from "../assets/icons/Share"
import PlaySmall from "../assets/icons/PlaySmall"
import ArrowLeft from "../assets/icons/ArrowLeft"

import { H2, H5, H6, P, Subtitle } from "../components/Text/styled"

const playTrack = (track, artist, name, image) => { // функци проигрывания трека
	global.playerControls.setTrack(track) // передаем трек плееру
	global.playerControls.setInfo({artist: artist, name: name, image: image}) // передаем информацию плееру
	const interval = setInterval(() => { // проверяем готовность (ждем когда трек загрузится)
		if (global.playerReady) {
			global.player.current.play() // включаем трек по готовности
			clearInterval(interval)
		}
	}, 500)
}

const Podcast = (props) => {
	const [hover, setHover] = useState(false)
	const [like, setLike] = useState(false)

	return (
		<TrackContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> {/* компонент трека */}
			<td style={{minWidth: "42px"}}>{hover ? <PlaySmall onClick={() => playTrack(props.url, props.artist, props.name, props.image)} /> : <Subtitle color='rgba(255, 255, 255, 0.5)'>{props.number}</Subtitle>}</td> {/* номер трека/кнопка играть, при наведении на трек показываем иконку "играть" */}
			<td><Subtitle onClick={() => playTrack(props.url, props.artist, props.name, props.image)}>{props.name}</Subtitle></td> {/* название трека, по нажатию воспроизводит трек */}
			<td></td>
			<td>{like ? <Heart onClick={() => {setLike(false)}} /> : <Heart opacity={0.5}  onClick={() => {setLike(true)}} />}</td>
			<td><Subtitle color='rgba(255, 255, 255, 0.5)'>{props.duration}</Subtitle></td>
		</TrackContainer>
	)
}

const AddTrack = (props) => {
	const [hover, setHover] = useState(false)

	return (
		<TrackContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> {/* компонент трека */}
			<td style={{minWidth: "42px"}}>{hover ? <PlaySmall onClick={() => playTrack(props.url, props.artist, props.name, props.image)} /> : <Subtitle color='rgba(255, 255, 255, 0.5)'>{props.number}</Subtitle>}</td> {/* номер трека/кнопка играть, при наведении на трек показываем иконку "играть" */}
			<td><Subtitle onClick={() => playTrack(props.url, props.artist, props.name, props.image)}>{props.name}</Subtitle></td> {/* название трека, по нажатию воспроизводит трек */}
			<td></td>
			<td></td>
			<td><Subtitle color='rgba(255, 255, 255, 0.5)'>{props.duration}</Subtitle></td>
		</TrackContainer>
	)
}

const PodcastAuthor = () => {
	const { id } = useParams()

	const artists = [
		{
			id: 0,
			name: "Аудиоблог AndyL",
			image: "https://avatars.yandex.net/get-music-content/6296749/292de5f9.a.19396186-2/300x300"
		},
		{
			id: 1,
			name: "История Песни",
			image: "https://avatars.yandex.net/get-music-content/2480468/774d9071.a.12522038-1/300x300"
		},
		{
			id: 2,
			name: "Эквалайзер",
			image: "https://avatars.yandex.net/get-music-content/8871869/440b5def.a.14045980-16/300x300"
		},
		{
			id: 3,
			name: "Шум и яркость",
			image: "https://avatars.yandex.net/get-music-content/3927581/9aa25799.a.7253293-7/300x300"
		},
	]

	const tracks = [
		[
			{
				number: 1,
				artist: "Аудиоблог AndyL",
				name: "История одной песни. Бриллианты навсегда",
				duration: "6:33",
				url: "http://jojo.hostfl.ru/music/p5.mp3",
			},
			{
				number: 2,
				artist: "Аудиоблог AndyL",
				name: "Древняя музыка",
				duration: "11:44",
				url: "http://jojo.hostfl.ru/music/p6.mp3",
			},
			{
				number: 3,
				artist: "Аудиоблог AndyL",
				name: "Это Slade",
				duration: "13:20",
				url: "http://jojo.hostfl.ru/music/p7.mp3",
			}
		],
		[
			{
				number: 1,
				artist: "История Песни",
				name: "История песни «Ласковый май - Белые розы»",
				duration: "6:17",
				url: "http://jojo.hostfl.ru/music/p8.mp3",
			},
			{
				number: 2,
				artist: "История Песни",
				name: "История песни «Три дня дождя - Демоны»",
				duration: "9:18",
				url: "http://jojo.hostfl.ru/music/p9.mp3",
			},
			{
				number: 3,
				artist: "История Песни",
				name: "История песни «Дискотека Авария - Небо»",
				duration: "9:47",
				url: "http://jojo.hostfl.ru/music/p10.mp3",
			}
		],
		[
			{
				number: 1,
				artist: "Эквалайзер",
				name: "АЛМО: сингл «Покажи», Бангкок, ПАНЧ",
				duration: "6:02",
				url: "http://jojo.hostfl.ru/music/p11.mp3",
			},
			{
				number: 2,
				artist: "Эквалайзер",
				name: "Лилая о сингле «Слеза»",
				duration: "14:40",
				url: "http://jojo.hostfl.ru/music/p12.mp3",
			},
			{
				number: 3,
				artist: "Эквалайзер",
				name: "Настежь о сингле «Красота»",
				duration: "21:08",
				url: "http://jojo.hostfl.ru/music/p13.mp3",
			}
		],
		[
			{
				number: 1,
				artist: "Шум и яркость",
				name: "Как Radiohead повлияли на кино",
				duration: "1:00:29",
				url: "http://jojo.hostfl.ru/music/p14.mp3",
			},
			{
				number: 2,
				artist: "Шум и яркость",
				name: "Как Гай Ричи использует музыку",
				duration: "31:31",
				url: "http://jojo.hostfl.ru/music/p15.mp3",
			},
			{
				number: 3,
				artist: "Шум и яркость",
				name: "В чем магия саундтреков Эмира Кустурицы",
				duration: "31:23",
				url: "http://jojo.hostfl.ru/music/p16.mp3",
			}
		],
	]

	const addTracks = [
		{
			number: 1,
			artist: "Аудиоблог AndyL",
			name: "Пример наложения автотюна",
			duration: "3:22",
			url: "http://jojo.hostfl.ru/music/11.mp3",
			image: "https://avatars.yandex.net/get-music-content/6296749/292de5f9.a.19396186-2/300x300",
		},
	]

	return (
		<Layout>
			<Menu />
			<MainContainer>
				<TopContainer />
				<BottomContainer>
					<InfoContainer>
						<BackButton to={"/podcasts"}>
							<ArrowLeft />
							<Subtitle color='rgba(20, 20, 20, 0.75)'>Назад</Subtitle>
						</BackButton>
						<InfoLeftContainer image={artists[id].image}/>
						<InfoRightContainer>
							<InfoRightTopContainer>
								<H6 color={"rgba(255, 255, 255, 0.5)"}>исполнитель</H6>
								<H2>{artists[id].name}</H2>
								<P>200 000 слушателей за месяц</P>
							</InfoRightTopContainer>
							<InfoRightBottomContainer>
								<WhiteButton><Play /><Subtitle color='#141414'>Слушать</Subtitle></WhiteButton>
								<BlackButton><Heart /><Subtitle>12 000</Subtitle></BlackButton>
								<BlackButton><Share /></BlackButton>
							</InfoRightBottomContainer>
						</InfoRightContainer>
					</InfoContainer>
					<TracksContainer>
						<H5>Треки</H5>
						<Tracks>
							<thead>
								<tr>
									<td><Subtitle color='rgba(255, 255, 255, 0.5)'>№</Subtitle></td>
									<td><Subtitle color='rgba(255, 255, 255, 0.5)'>Название</Subtitle></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</thead>
							<tbody>
								{tracks[id].map(track => <Podcast key={track.number} url={track.url} image={artists[id].image} number={track.number} artist={track.artist} name={track.name} duration={track.duration} />)}
							</tbody>
						</Tracks>
					</TracksContainer>
					{id === "0" ? <AdditionalContainer>
						<H5>Приложение</H5>
						<Tracks>
						<thead>
								<tr>
									<td><Subtitle color='rgba(255, 255, 255, 0.5)'>№</Subtitle></td>
									<td><Subtitle color='rgba(255, 255, 255, 0.5)'>Название</Subtitle></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</thead>
							<tbody>
								{addTracks.map(track => <AddTrack key={track.number} url={track.url} image={artists[id].image} number={track.number} artist={track.artist} name={track.name} duration={track.duration} />)}
							</tbody>
						</Tracks>
					</AdditionalContainer> : <></>}
				</BottomContainer>
			</MainContainer>
		</Layout>
	)
}

export default PodcastAuthor