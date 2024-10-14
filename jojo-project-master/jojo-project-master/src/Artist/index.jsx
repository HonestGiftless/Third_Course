import React, { useState } from 'react'
import { useParams } from "react-router-dom"

import Layout from '../components/Layout/'
import Menu from '../components/Menu/'

import { MainContainer, BottomContainer, InfoContainer, InfoLeftContainer, InfoRightContainer, InfoRightTopContainer, InfoRightBottomContainer, TracksContainer, Tracks, TrackContainer, BackButton } from "./styled"
import TopContainer from "../components/TopContainer"
import { WhiteButton, BlackButton } from "../components/Buttons/styled"

import Play from "../assets/icons/Play"
import Heart from "../assets/icons/Heart"
import Share from "../assets/icons/Share"
import PlaySmall from "../assets/icons/PlaySmall"
import Trash from "../assets/icons/Trash"
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

const Track = (props) => {
	const [hover, setHover] = useState(false)
	const [like, setLike] = useState(false)

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

const Artist = () => {
	const { id } = useParams()

	const artists = [
		{
			id: 0,
			name: "Lida",
			genre: "Русская поп-музыка",
			image: "https://i.scdn.co/image/ab6761610000e5ebc7f81cb578b63b58c0840bdb",
		},
		{
			id: 1,
			name: "twenty one pilots",
			genre: "Русская поп-музыка",
			image: "https://i.scdn.co/image/ab6761610000e5eb196972172c37d934d9ca8093",
		},
		{
			id: 2,
			name: "CMH",
			genre: "Русская поп-музыка",
			image: "https://3.assets.klops.ru/media/W1siZiIsIjIwMjFcLzAxXC8xNVwvOWR0NGo2Y2Y5X2ZpbGUuanBlZyJdLFsicCIsInRodW1iIiwiMTM1MHgxNjg4KzArMCJdLFsicCIsInRodW1iIiwiODYweCJdLFsicCIsImVuY29kZSIsImpwZyIsIi1xdWFsaXR5IDg1IC1zdHJpcCAtaW50ZXJsYWNlIFBsYW5lIl1d?sha=26e9f82079243521",
		},
		{
			id: 3,
			name: "Король и Шут",
			genre: "Русская поп-музыка",
			image: "https://img.championat.com/s/735x490/news/big/r/r/korol-i-shut-svernul-ne-tuda_1678965277719345173.jpg",
		}
	]

	const tracks = [
		[
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
				artist: "Lida",
				name: "Влюблино",
				duration: "3:01",
				url: "http://jojo.hostfl.ru/music/7.mp3",
				image: "https://avatars.yandex.net/get-music-content/6214856/9e100909.a.23539250-1/200x200",
			},
			{
				number: 3,
				artist: "Lida",
				name: "Евробит",
				duration: "2:45",
				url: "http://jojo.hostfl.ru/music/10.mp3",
				image: "https://avatars.yandex.net/get-music-content/4406810/f49ed042.a.13554338-1/200x200",
			}
		],
		[
			{
				number: 1,
				artist: "twenty one pilots",
				name: "Stressed Out",
				duration: "3:22",
				url: "http://jojo.hostfl.ru/music/11.mp3",
				image: "https://avatars.yandex.net/get-music-content/32236/0719cba3.a.2747498-1/200x200",
			},
			{
				number: 2,
				artist: "twenty one pilots",
				name: "Heathens",
				duration: "3:12",
				url: "http://jojo.hostfl.ru/music/12.mp3",
				image: "https://avatars.yandex.net/get-music-content/113160/9755f9a0.a.5933975-1/200x200",
			},
			{
				number: 3,
				artist: "twenty one pilots",
				name: "Chlorine",
				duration: "5:24",
				url: "http://jojo.hostfl.ru/music/13.mp3",
				image: "https://avatars.yandex.net/get-music-content/176019/68569b6f.a.5838243-1/200x200",
			}
		],
		[
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
				artist: "CMH",
				name: "СТИКЕР",
				duration: "2:12",
				url: "http://jojo.hostfl.ru/music/1.mp3",
				image: "https://avatars.yandex.net/get-music-content/4304260/a0d85126.a.13463394-1/200x200"
			},
			{
				number: 3,
				artist: "CMH",
				name: "Прицел",
				duration: "2:30",
				url: "http://jojo.hostfl.ru/music/2.mp3",
				image: "https://avatars.yandex.net/get-music-content/8096180/f6a1a383.a.24922639-1/200x200"
			},
			{
				number: 4,
				artist: "CMH",
				name: "паранойя",
				duration: "3:22",
				url: "http://jojo.hostfl.ru/music/3.mp3",
				image: "https://avatars.yandex.net/get-music-content/6447985/69c0dde8.a.21973029-1/200x200"
			},
		],
		[
			{
				number: 1,
				artist: "Король и Шут",
				name: "Кукла колдуна",
				duration: "3:23",
				url: "http://jojo.hostfl.ru/music/4.mp3",
				image: "https://avatars.yandex.net/get-music-content/163479/b3e3efc4.a.7019257-3/200x200"
			},
			{
				number: 2,
				artist: "Король и Шут",
				name: "Лесник",
				duration: "3:11",
				url: "http://jojo.hostfl.ru/music/14.mp3",
				image: "https://avatars.yandex.net/get-music-content/7548376/a8ed253b.a.7018993-3/200x200"
			},
			{
				number: 3,
				artist: "Король и Шут",
				name: "Дурак и молния",
				duration: "1:54",
				url: "http://jojo.hostfl.ru/music/15.mp3",
				image: "https://avatars.yandex.net/get-music-content/7548376/934e66e2.a.10101-6/200x200"
			},
		]
	]

	return (
		<Layout>
			<Menu />
			<MainContainer>
				<TopContainer />
				<BottomContainer>
					<InfoContainer>
						<BackButton to={"/user/artists"}>
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
									<td><Subtitle color='rgba(255, 255, 255, 0.5)'>Исполнитель</Subtitle></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</thead>
							<tbody>
								{tracks[id].map(track => <Track key={track.number} url={track.url} image={track.image} number={track.number} artist={track.artist} name={track.name} duration={track.duration} />)}
							</tbody>
						</Tracks>
					</TracksContainer>
				</BottomContainer>
			</MainContainer>
		</Layout>
	)
}

export default Artist