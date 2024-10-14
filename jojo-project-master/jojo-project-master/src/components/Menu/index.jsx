import React from 'react'

import { MenuContainer, MainContainer, UserContainer } from "./styled"
import MenuItem from "../MenuItem"

import Logo from "../../assets/Logo"
import Home from "../../assets/icons/Home"
import Broadcast from "../../assets/icons/Broadcast"
import Book from "../../assets/icons/Book"
import Music from "../../assets/icons/Music"
import Playlist from "../../assets/icons/Playlist"
import Speak from "../../assets/icons/Speak"
import Album from "../../assets/icons/Album"

const Menu = (props) => {
	return (
		<MenuContainer>
			<Logo />
			<MainContainer>
				<MenuItem to={"/"} icon={<Home />} text={"Главное"} />
				<MenuItem to={"/podcasts"} icon={<Broadcast />} text={"Подкасты"} />
				<MenuItem to={"/articles"} icon={<Book />} text={"Статьи"} />
			</MainContainer>
			<UserContainer>
				<MenuItem to={"/user/tracks"} icon={<Music />} text={"Все треки"} />
				<MenuItem to={"/user/playlists"} icon={<Playlist />} text={"Плейлисты"} />
				<MenuItem to={"/user/artists"} icon={<Speak />} text={"Исполнители"} />
				<MenuItem to={"/user/albums"} icon={<Album />} text={"Альбомы"} />
			</UserContainer>
		</MenuContainer>
	)
}

export default Menu