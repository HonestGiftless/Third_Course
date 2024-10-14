import React from 'react'

import Layout from '../components/Layout/'
import Menu from '../components/Menu/'

import { MainContainer, BottomContainer, ContentContainer, ArticlesContainer, ArticleContainer, ArticleImage } from "./styled"
import TopContainer from "../components/TopContainer"

import { H2, H4, H6, P, Subtitle } from "../components/Text/styled"

import articleImage1 from "../assets/Main/article1.jpg"
import articleImage2 from "../assets/Main/article2.jpg"

const Main = () => {
	return (
		<Layout> {/* Layout отвечает за расположение меню и главного контейнера */}
			<Menu />
			<MainContainer>
				<TopContainer />
				<BottomContainer>
					<H2>Главное нa&nbsp;сегодня</H2>
					<ContentContainer>
						<ArticlesContainer>
							<ArticleContainer>
								<ArticleImage image={articleImage1} />
								<H6 color={"rgba(255, 255, 255, 0.5)"}>сингл</H6>
								<P>Мрачное сочетание фонка, гэриджа и хауса</P>
								<Subtitle color={"rgba(255, 255, 255, 0.5)"}>в новом релизе DVRST</Subtitle>
							</ArticleContainer>
							<ArticleContainer>
								<ArticleImage image={articleImage2} />
								<H6 color={"rgba(255, 255, 255, 0.5)"}>плейлист</H6>
								<P>Открываем весенний сезон вместе с JoJo</P>
							</ArticleContainer>
						</ArticlesContainer>
					</ContentContainer>
				</BottomContainer>
			</MainContainer>
		</Layout>
	)
}

export default Main