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

export const ArtistsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	row-gap: 40px;
	margin-top: 80px;
`

export const ArtistContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	padding: 20px;
	row-gap: 4px;
	cursor: pointer;
	text-decoration: none;
`

export const ArtistImg = styled.div`
	aspect-ratio: 1/ 1;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 100%;
	margin-bottom: 8px;
`