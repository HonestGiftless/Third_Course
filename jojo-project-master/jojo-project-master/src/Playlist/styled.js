import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const BackButton = styled(Link)`
	display: flex;
	align-items: center;
	column-gap: 4px;
	width: fit-content;
	padding: 4px 12px;
	background: rgba(255, 255, 255, 0.85);
	border-radius: 45px;
	text-decoration: none;
`

export const AuthorContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 8px;
	margin-top: 24px;
	margin-bottom: 24px;
`

export const ButtonsContainer = styled.div`
	display: flex;
	column-gap: 16px;
	margin-top: 24px;
	margin-bottom: 40px;
`

export const TracksContainer = styled.table`
	width: 100%;

	thead {
		td {
			padding: 12px 0;
		}
	}
`

export const TrackContainer = styled.tr`
	cursor: pointer;

	td {
		padding: 12px 0;
	}
`