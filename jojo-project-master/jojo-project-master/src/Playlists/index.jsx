import React, { useEffect } from 'react'

import Layout from '../components/Layout/'
import Menu from '../components/Menu/'

import { MainContainer, BottomContainer, PlaylistsContainer, NewPlaylist, PlaylistContainer, PlaylistImg } from "./styled"
import TopContainer from "../components/TopContainer"

import { H2, H4, P, Subtitle } from "../components/Text/styled"

const Playlists = () => {
	const playlists = [
		{
			id: 0,
			name: "Музыка для пробежки",
			image: "https://www.smclinic-spb.ru/images/Articles/Info/probezhka.webp"
		},
		{
			id: 1,
			name: "Музыка для сна",
			image: "https://www.belveb.by/upload/webp/b4/b4aea52395d5de8bd0cadc99894f1287.webp"
		},
		{
			id: 2,
			name: "Музыка для зарядки телефона",
			image: "https://aif-s3.aif.ru/images/016/053/95b7070fa605b998b9920f0ac43b2c08.jpg"
		}
	]

	return (
		<Layout>
			<Menu />
			<MainContainer>
				<TopContainer />
				<BottomContainer>
					<H2>Плейлисты</H2>
					<PlaylistsContainer>
						<NewPlaylist><Subtitle color='rgba(20, 20, 20, 0.4)'>Создать плейлист</Subtitle></NewPlaylist>
						{playlists.map(playlist => 
							<PlaylistContainer to={`/user/playlists/${playlist.id}`}>
								<PlaylistImg image={playlist.image} />
								<Subtitle>{playlist.name}</Subtitle>
							</PlaylistContainer>
						)}
					</PlaylistsContainer>
				</BottomContainer>
			</MainContainer>
		</Layout>
	)
}

export default Playlists