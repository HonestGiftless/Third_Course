import styled from "styled-components";
import {Link} from "react-router-dom";

export const MainContainer = styled.div`
	width: 100%;
	padding: 0 60px;
`

export const BottomContainer = styled.div`
	padding: 60px 0 160px 0;
`

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 120px;
	margin-top: 80px;
`

export const ArticlesContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 32px;
`

export const ArticleContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	row-gap: 4px;
	text-decoration: none;
`

export const ArticleImage = styled.div`
	width: auto;
	height: 400px;
	margin-bottom: 16px;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
`