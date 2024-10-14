import React, { useEffect } from 'react'

import Layout from '../components/Layout/'
import Menu from '../components/Menu/'

import { MainContainer, BottomContainer, PodcastsContainer, PodcastContainer, PodcastImgContainer, PodcastImg, PodcastProgressWrapper, PodcastProgress, CollectionContainer, AuthorsContainer, AuthorContainer } from "./styled"
import TopContainer from "../components/TopContainer"

import { H2, H4, P, Subtitle } from "../components/Text/styled"

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

const Podcasts = () => {
	const podcasts = [
		{
			id: 0,
			name: "Что с музыкой?",
			author: "Артистология",
			image: "https://avatars.yandex.net/get-music-content/6202531/6ab65ae1.a.22920918-1/300x300",
			url: "http://jojo.hostfl.ru/music/p1.mp3"
		},
		{
			id: 1,
			name: "Музыка, как психотерапия",
			author: "Александра Яковлева",
			image: "https://avatars.yandex.net/get-music-content/7852894/95c11dc9.a.9091989-4/300x300",
			url: "http://jojo.hostfl.ru/music/p2.mp3"
		},
		{
			id: 2,
			name: "Музыка, которая не вернётся",
			author: "Всё вернётся?",
			image: "https://avatars.yandex.net/get-music-content/5496390/298d9575.a.23018266-2/300x300",
			url: "http://jojo.hostfl.ru/music/p3.mp3"
		},
		{
			id: 3,
			name: "Как звучит Самара?",
			author: "Музыка регионов",
			image: "https://avatars.yandex.net/get-music-content/6296749/8450124b.a.23649346-1/300x300",
			url: "http://jojo.hostfl.ru/music/p4.mp3"
		},
	]

	const authors = [
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

	return (
		<Layout>
			<Menu />
			<MainContainer>
				<TopContainer />
				<BottomContainer>
					<H2>Подкасты</H2>
					<PodcastsContainer>
						{podcasts.map(podcast => 
							<PodcastContainer key={podcast.id} onClick={() => {playTrack(podcast.url, podcast.author, podcast.name, podcast.image)}}>
								<PodcastImgContainer>
									<PodcastImg image={podcast.image} />
									<PodcastProgressWrapper>
										<PodcastProgress style={{width: "20%"}} />
									</PodcastProgressWrapper>
								</PodcastImgContainer>
								<Subtitle color={"rgba(255, 255, 255, 0.5)"}>20 минут осталось</Subtitle>
								<P>{podcast.name}</P>
								<Subtitle color={"#DD1F7A"}>{podcast.author}</Subtitle>
							</PodcastContainer>
						)}
					</PodcastsContainer>
					<CollectionContainer>
						<H4>Погромче о музыке</H4>
						<AuthorsContainer>
							{authors.map(author => 
								<AuthorContainer to={`/podcasts/${author.id}`} key={author.id}>
									<PodcastImgContainer>
										<PodcastImg image={author.image} />
									</PodcastImgContainer>
									<P>{author.name}</P>
								</AuthorContainer>
							)}
						</AuthorsContainer>
					</CollectionContainer>
				</BottomContainer>
			</MainContainer>
		</Layout>
	)
}

export default Podcasts