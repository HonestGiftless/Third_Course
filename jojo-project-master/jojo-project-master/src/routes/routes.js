import Main from "../Main"
import Playlists from "../Playlists"
import Playlist from "../Playlist"
import Tracks from "../Tracks"
import Artists from "../Artists"
import Artist from "../Artist"
import Podcasts from "../Podcasts"
import Articles from "../Articles"
import PodcastAuthor from "../PodcastAuthor"

// импортируем наши компоненты и делаем массив с ссылками и компонентами


export const routes = [
	{
		path: "/",
		element: Main,
	},
	{
		path: "/user/playlists",
		element: Playlists,
	},
	{
		path: "/user/playlists/:id",
		element: Playlist,
	},
	{
		path: "/user/tracks",
		element: Tracks,
	},
	{
		path: "/user/artists",
		element: Artists,
	},
	{
		path: "/user/artists/:id",
		element: Artist,
	},
	{
		path: "/podcasts",
		element: Podcasts,
	},
	{
		path: "/podcasts/:id",
		element: PodcastAuthor,
	},
	{
		path: "/articles",
		element: Articles,
	}
]