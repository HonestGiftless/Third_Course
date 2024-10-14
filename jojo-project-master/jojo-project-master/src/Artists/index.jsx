import React, { useEffect } from 'react'

import Layout from '../components/Layout/'
import Menu from '../components/Menu/'

import { MainContainer, BottomContainer, ArtistsContainer, ArtistContainer, ArtistImg } from "./styled"
import TopContainer from "../components/TopContainer"

import { H2, H4, P, Subtitle } from "../components/Text/styled"

const Artists = () => {
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

	return (
		<Layout>
			<Menu />
			<MainContainer>
				<TopContainer />
				<BottomContainer>
					<H2>Исполнители</H2>
					<ArtistsContainer>
						{artists.map(artist => <ArtistContainer id={artist.id} to={`/user/artists/${artist.id}`}>
							<ArtistImg image={artist.image} />
							<P>{artist.name}</P>
							<Subtitle color={"rgba(255, 255, 255, 0.5)"}>{artist.genre}</Subtitle>
						</ArtistContainer>)}
					</ArtistsContainer>
				</BottomContainer>
			</MainContainer>
		</Layout>
	)
}

export default Artists