import styled from "styled-components";
import { Link } from "react-router-dom"

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

export const PodcastsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 37px;
	margin-top: 100px;
`

export const PodcastContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 4px;
	cursor: pointer;
	text-decoration: none;
`

export const PodcastImgContainer = styled.div`
	position: relative;
`

export const PodcastProgressWrapper = styled.div`
	position: absolute;
	margin: 0 8px;
	bottom: 20px;
	width: calc(100% - 16px);
	height: 12px;
	background: rgba(255, 255, 255, 0.5);
	border: 1px solid rgba(20, 20, 20, 0.5);
	border-radius: 8px;
`

export const PodcastProgress = styled.div`
	height: 12px;
	background: #FFFFFF;
	border-radius: 8px;
`

export const PodcastImg = styled.div`
	aspect-ratio: 1/ 1;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 8px;
	margin-bottom: 12px;
`

export const CollectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 32px;
	margin-top: 100px;
`

export const AuthorsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 37px;
`

export const AuthorContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	row-gap: 4px;
	cursor: pointer;
	text-decoration: none;
`