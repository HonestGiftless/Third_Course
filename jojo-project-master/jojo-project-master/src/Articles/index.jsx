import React from 'react';

import { MainContainer, BottomContainer, ArticlesContainer, ArticleContainer, ArticleImage, ArticleBigContainer, ArticleBigImage } from "./styled"

import Layout from '../components/Layout/'
import Menu from '../components/Menu/'

import TopContainer from "../components/TopContainer"

import { H2, H5, H6 } from "../components/Text/styled"

import image1 from "../assets/Articles/image1.jpg"
import image2 from "../assets/Articles/image2.jpg"
import image3 from "../assets/Articles/image3.jpg"

const Articles = () => {
	const articles = [
		{
			name: "Какой музыкальный инструмент выбрать для обучения",
			time: 2,
			big: true,
			image: image3
		},
		{
			name: "Какой музыкальный инструмент выбрать для обучения",
			time: 2,
			big: false,
			image: image1
		},
		{
			name: "Какой музыкальный инструмент выбрать для обучения",
			time: 2,
			big: false,
			image: image2
		}
	]

	return (
		<Layout>
			<Menu />
			<MainContainer>
				<TopContainer />
				<BottomContainer>
					<H2>Статьи</H2>
					<ArticlesContainer>
						{articles.map(article => {
							if (article.big) {
								return (
									<ArticleBigContainer>
										<ArticleBigImage image={article.image} />
										<H6 color={"rgba(255, 255, 255, 0.5)"}>{article.time} мин</H6>
										<H5>{article.name}</H5>
									</ArticleBigContainer>
								)
							} else {
								return (
									<ArticleContainer>
										<ArticleImage image={article.image} />
										<H6 color={"rgba(255, 255, 255, 0.5)"}>{article.time} мин</H6>
										<H5>{article.name}</H5>
									</ArticleContainer>
								)
							}
						})}
					</ArticlesContainer>
				</BottomContainer>
			</MainContainer>
		</Layout>
	)
}

export default Articles