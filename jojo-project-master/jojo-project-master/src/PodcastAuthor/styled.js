import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
	width: 100%;
	padding: 0 60px;
`

export const BottomContainer = styled.div`
	position: relative;
	width: 80%;
	padding-bottom: 160px;
`

export const BackButton = styled(Link)`
	position: absolute;
	display: flex;
	align-items: center;
	column-gap: 4px;
	width: fit-content;
	padding: 4px 12px;
	background: rgba(255, 255, 255, 0.85);
	border-radius: 45px;
	text-decoration: none;
`

export const InfoContainer = styled.div`
	display: flex;
	column-gap: 40px;
	padding: 60px 40px;
	background: #222222;
	border-radius: 20px;
`

export const InfoLeftContainer = styled.div`
	width: 13vw;
	height: 13vw;
	margin-top: 50px;
	aspect-ratio: 1/ 1;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 100%;
`

export const InfoRightContainer = styled.div`

`

export const InfoRightTopContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	margin-bottom: 76px;
`

export const InfoRightBottomContainer = styled.div`
	display: flex;
	column-gap: 16px;
`

export const TracksContainer = styled.div`
	margin-top: 30px;
	padding: 32px 40px;
	background-color: #222222;
	border-radius: 20px;
`

export const Tracks = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing:0;
	margin-top: 20px;

	td {
		padding: 12px 0;

		&:first-child {
			padding: 12px 10px;
		}
	}
`

export const TrackContainer = styled.tr`
	cursor: pointer;

	&:hover td {
		border-top: 1px solid rgba(255, 255, 255, 0.5);
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		
		&:first-child {
			border-left: 1px solid rgba(255, 255, 255, 0.5);
			border-top-left-radius: 8px;
			border-bottom-left-radius: 8px;
		}

		&:last-child {
			border-right: 1px solid rgba(255, 255, 255, 0.5);
			border-top-right-radius: 8px;
			border-bottom-right-radius: 8px;
		}
	}

	td {
		border-top: 1px solid rgba(255, 255, 255, 0);
		border-bottom: 1px solid rgba(255, 255, 255, 0);
		
		&:first-child {
			border-left: 1px solid rgba(255, 255, 255, 0);
		}

		&:last-child {
			border-right: 1px solid rgba(255, 255, 255, 0);
		}
	}
`

export const TrackImg = styled.div`
	aspect-ratio: 1/ 1;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
`

export const AdditionalContainer = styled.div`
	margin-top: 30px;
	padding: 32px 40px;
	background-color: #222222;
	border-radius: 20px;
`