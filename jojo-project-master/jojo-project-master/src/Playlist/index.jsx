import React, { useState } from 'react'
import { useParams } from "react-router-dom"

import Layout from '../components/Layout/'
import Menu from '../components/Menu/'

import { MainContainer, BottomContainer, BackButton, AuthorContainer, ButtonsContainer, TracksContainer, TrackContainer, } from "./styled"
import TopContainer from "../components/TopContainer"
import { WhiteButton, BlackButton } from "../components/Buttons/styled"

import { H2, P, Subtitle } from "../components/Text/styled"

import ArrowLeft from "../assets/icons/ArrowLeft"
import Play from "../assets/icons/Play"
import Shuffle from "../assets/icons/Shuffle"
import Heart from "../assets/icons/Heart"
import Share from "../assets/icons/Share"
import PlaySmall from "../assets/icons/PlaySmall"
import Trash from "../assets/icons/Trash"

const playTrack = (track, artist, name, image) => {
	global.playerControls.setTrack(track)
	global.playerControls.setInfo({artist: artist, name: name, image: image})
	const interval = setInterval(() => {
		if (global.playerReady) {
			global.player.current.play()
			clearInterval(interval)
		}
	}, 500)
}

const Track = (props) => {
	const [hover, setHover] = useState(false)
	const [like, setLike] = useState(false)

	return (
		<TrackContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			<td style={{minWidth: "42px"}}>{hover ? <PlaySmall onClick={() => playTrack(props.url, props.artist, props.name, props.image)} /> : <Subtitle color='rgba(255, 255, 255, 0.5)'>{props.number}</Subtitle>}</td>
			<td><Subtitle onClick={() => playTrack(props.url, props.artist, props.name, props.image)}>{props.name}</Subtitle></td>
			<td><Subtitle>{props.artist}</Subtitle></td>
			<td><Trash style={hover ? {opacity: "1"} : {opacity: "0"}} /></td>
			<td>{like ? <Heart onClick={() => {setLike(false)}} /> : <Heart opacity={0.5}  onClick={() => {setLike(true)}} />}</td>
			<td><Subtitle color='rgba(255, 255, 255, 0.5)'>{props.duration}</Subtitle></td>
		</TrackContainer>
	)
}

const Playlist = () => {
	const { id } = useParams();

	const playlists = [
		{
			name: "Музыка для пробежки",
			tracks: [
				{
					number: 1,
					artist: "CMH",
					name: "оверсайз",
					duration: "2:25",
					url: "http://jojo.hostfl.ru/music/5.mp3",
					image: "https://avatars.yandex.net/get-music-content/6447985/69c0dde8.a.21973029-1/200x200",
				},
				{
					number: 2,
					artist: "Король и Шут",
					name: "Кукла колдуна",
					duration: "3:23",
					url: "http://jojo.hostfl.ru/music/4.mp3",
					image: "https://avatars.yandex.net/get-music-content/163479/b3e3efc4.a.7019257-3/200x200"
				},
			]
		},
		{
			name: "Музыка для сна",
			tracks: [
				{
					number: 1,
					artist: "Lida",
					name: "Холода",
					duration: "2:18",
					url: "http://jojo.hostfl.ru/music/6.mp3",
					image: "https://avatars.yandex.net/get-music-content/5413909/dd5e8828.a.19297693-1/200x200",
				},
				{
					number: 2,
					artist: "Oliver Tree",
					name: "Cash machine",
					duration: "3:23",
					url: "http://jojo.hostfl.ru/music/8.mp3",
					image: "https://avatars.yandex.net/get-music-content/4446014/85166a3c.a.15867904-1/200x200",
				},
			]
		},
		{
			name: "Музыка для зарядки телефона",
			tracks: [
				{
					number: 1,
					artist: "Lida",
					name: "Влюблино",
					duration: "3:01",
					url: "http://jojo.hostfl.ru/music/7.mp3",
					image: "https://avatars.yandex.net/get-music-content/6214856/9e100909.a.23539250-1/200x200",
				},
				{
					number: 2,
					artist: "Smash mouth",
					name: "All Star",
					duration: "3:23",
					url: "http://jojo.hostfl.ru/music/9.mp3",
					image: "https://avatars.yandex.net/get-music-content/32236/ba45fd9f.a.1189-1/200x200",
				},
			]
		}
	]

	return (
		<Layout>
			<Menu />
			<MainContainer>
				<TopContainer />
				<BottomContainer>
					<BackButton to={"/user/playlists"}>
						<ArrowLeft />
						<Subtitle color='rgba(20, 20, 20, 0.75)'>Назад</Subtitle>
					</BackButton>
					<AuthorContainer>
						<Subtitle color='rgba(255, 255, 255, 0.85)'>Автор:</Subtitle>
						<Subtitle>ivan_ivanov</Subtitle>
					</AuthorContainer>
					<H2>{playlists[id].name}</H2>
					<ButtonsContainer>
						<WhiteButton><Play /><P color='black'>Слушать</P></WhiteButton>
						<WhiteButton><Shuffle /></WhiteButton>
						<BlackButton><Heart /><P>Нравится</P></BlackButton>
						<BlackButton><Share /></BlackButton>
					</ButtonsContainer>
					<TracksContainer>
						<thead>
							<tr>
								<td><Subtitle color='rgba(255, 255, 255, 0.5)'>№</Subtitle></td>
								<td><Subtitle color='rgba(255, 255, 255, 0.5)'>Название</Subtitle></td>
								<td><Subtitle color='rgba(255, 255, 255, 0.5)'>Исполнитель</Subtitle></td>
								<td></td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{playlists[id].tracks.map(track => <Track number={track.number} artist={track.artist} name={track.name} duration={track.duration} key={track.number} url={track.url} image={track.image} />)}
						</tbody>
					</TracksContainer>
				</BottomContainer>
			</MainContainer>
		</Layout>
	)
}

export default Playlist