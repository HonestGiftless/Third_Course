import styled from "styled-components";
import {Link} from "react-router-dom";

export const MainContainer = styled.div`
	width: 100%;
	padding: 0 60px;
`

export const BottomContainer = styled.div`
	width: 80%;
	margin-bottom: 160px;
	padding: 60px 40px;
	background: #222222;
	border-radius: 20px;
`

export const PlaylistsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 37px;
	margin-top: 48px;
`

export const NewPlaylist = styled.div`
	display: flex;
	justify-content: center;
	aspect-ratio: 1/ 1;
	padding-top: 75%;
	background-color: #FFFFFF;
	border-radius: 8px;
	background-image: url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3793 0H38.6207V70H31.3793V0Z' fill='%23D9D9D9'/%3E%3Cpath d='M0 38.6207V31.3793H70V38.6207H0Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A");
	background-position: center center;
	background-repeat: no-repeat;
`

export const PlaylistContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	row-gap: 16px;
	cursor: pointer;
	text-decoration: none;
`

export const PlaylistImg = styled.div`
	aspect-ratio: 1/ 1;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 8px;
`