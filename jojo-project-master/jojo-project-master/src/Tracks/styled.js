import styled from "styled-components";

export const MainContainer = styled.div`
	width: 100%;
	padding: 0 60px;
`

export const BottomContainer = styled.div`
	width: 80%;
	padding: 60px 40px;
	margin-bottom: 160px;
	background: #222222;
	border-radius: 20px;
`

export const TracksContainer = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing:0;

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

export const ButtonsContainer = styled.div`
	display: flex;
	column-gap: 16px;
	margin-top: 24px;
	margin-bottom: 42px;
`

export const Button = styled.div`
	height: 44px;
	display: flex;
	column-gap: 8px;
	align-items: center;
	padding: 0 10px;
	background: #FFFFFF;
	border-radius: 47px;
	cursor: pointer;
`