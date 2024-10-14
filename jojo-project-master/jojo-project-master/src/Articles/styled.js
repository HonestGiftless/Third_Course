import styled from "styled-components";

export const MainContainer = styled.div`
	width: 100%;
	padding: 0 60px;
`

export const BottomContainer = styled.div`
	width: 80%;
	margin-bottom: 160px;
	padding: 80px 40px;
	background: #222222;
	border-radius: 20px;
`

export const ArticlesContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 24px;
	row-gap: 100px;
	margin-top: 80px;
`

export const ArticleContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	cursor: pointer;
`

export const ArticleImage = styled.div`
	aspect-ratio: 7/ 4;
	margin-bottom: 12px;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 8px;
`

export const ArticleBigContainer = styled.div`
	grid-column: span 2;
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	cursor: pointer;
`

export const ArticleBigImage = styled.div`
	aspect-ratio: 7/ 2;
	margin-bottom: 12px;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 8px;
`