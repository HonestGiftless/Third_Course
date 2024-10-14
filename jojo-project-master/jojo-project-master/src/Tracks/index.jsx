import React, { useState } from 'react'

import Layout from '../components/Layout'
import Menu from '../components/Menu'

import { MainContainer, BottomContainer, TracksContainer, TrackContainer, ButtonsContainer, Button } from "./styled"
import TopContainer from "../components/TopContainer"

import { H2, P, Subtitle } from "../components/Text/styled"

import Play from "../assets/icons/Play"
import Shuffle from "../assets/icons/Shuffle"
import Heart from '../assets/icons/Heart'
import PlaySmall from "../assets/icons/PlaySmall"
import Trash from "../assets/icons/Trash"

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

const Track = (props) => {
	const [hover, setHover] = useState(false)
	const [like, setLike] = useState(true)

	return (
		<TrackContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> {/* компонент трека */}
			<td style={{minWidth: "42px"}}>{hover ? <PlaySmall onClick={() => playTrack(props.url, props.artist, props.name, props.image)} /> : <Subtitle color='rgba(255, 255, 255, 0.5)'>{props.number}</Subtitle>}</td> {/* номер трека/кнопка играть, при наведении на трек показываем иконку "играть" */}
			<td><Subtitle onClick={() => playTrack(props.url, props.artist, props.name, props.image)}>{props.name}</Subtitle></td> {/* название трека, по нажатию воспроизводит трек */}
			<td><Subtitle>{props.artist}</Subtitle></td>
			<td><Trash style={hover ? {opacity: "1"} : {opacity: "0"}} /></td>
			<td>{like ? <Heart onClick={() => {setLike(false)}} /> : <Heart opacity={0.5}  onClick={() => {setLike(true)}} />}</td>
			<td><Subtitle color='rgba(255, 255, 255, 0.5)'>{props.duration}</Subtitle></td>
		</TrackContainer>
	)
}

const Tracks = () => {
	const tracks = [
		{
			number: 1,
			artist: "CMH",
			name: "СТИКЕР",
			duration: "2:12",
			url: "http://jojo.hostfl.ru/music/1.mp3",
			image: "https://avatars.yandex.net/get-music-content/4304260/a0d85126.a.13463394-1/200x200"
		},
		{
			number: 2,
			artist: "CMH",
			name: "Прицел",
			duration: "2:30",
			url: "http://jojo.hostfl.ru/music/2.mp3",
			image: "https://avatars.yandex.net/get-music-content/8096180/f6a1a383.a.24922639-1/200x200"
		},
		{
			number: 3,
			artist: "CMH",
			name: "паранойя",
			duration: "3:22",
			url: "http://jojo.hostfl.ru/music/3.mp3",
			image: "https://avatars.yandex.net/get-music-content/6447985/69c0dde8.a.21973029-1/200x200"
		},
		{
			number: 4,
			artist: "Король и Шут",
			name: "Кукла колдуна",
			duration: "3:23",
			url: "http://jojo.hostfl.ru/music/4.mp3",
			image: "https://avatars.yandex.net/get-music-content/163479/b3e3efc4.a.7019257-3/200x200"
		},
	]

	return (
		<Layout>
			<Menu />
			<MainContainer>
				<TopContainer />
				<BottomContainer>
					<H2>Все треки</H2>
					<ButtonsContainer>
						<Button><P color='black'>Слушать</P><Play /></Button>
						<Button><Shuffle /></Button>
					</ButtonsContainer>
					<TracksContainer>
						<thead>
							<tr>
								<td><Subtitle color='rgba(255, 255, 255, 0.5)'>№</Subtitle></td>
								<td><Subtitle color='rgba(255, 255, 255, 0.5)'>Название</Subtitle></td>
								<td><Subtitle color='rgba(255, 255, 255, 0.5)'>Исполнитель</Subtitle></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{tracks.map(track => <Track key={track.number} url={track.url} image={track.image} number={track.number} artist={track.artist} name={track.name} duration={track.duration} />)}
						</tbody>
					</TracksContainer>
				</BottomContainer>
			</MainContainer>
		</Layout>
	)
}

export default Tracks