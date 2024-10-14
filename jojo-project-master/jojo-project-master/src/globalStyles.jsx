import {createGlobalStyle} from "styled-components";

// глобальные стили
// тут убираем стандартные отступы, включаем сглаживание шрифтов (по возможности), сохраняем градиенты

const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		-webkit-font-smoothing: antialiased;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	body {
		--background: #141414;
		--blue-gradient: conic-gradient(from 172.66deg at 49.9% 49.9%, #2A4FAD 0deg, #2C38A2 79.57deg, #2A4FAD 176.25deg, #2C38A2 261.29deg, #2A4FAD 360deg);
		--red-gradient: conic-gradient(from -4.02deg at 50% 50%, #E62121 0deg, #AD2AA0 79.57deg, #BB3535 176.25deg, #E32AAF 261.29deg, #E62121 360deg);
		--green-gradient: conic-gradient(from -1.09deg at 47.92% 51.74%, #90E524 0deg, #279A32 86.25deg, #90E624 181.87deg, #279A32 266.25deg, #90E524 360deg);
		--yellow-gradient: conic-gradient(from 27.95deg at 53.82% 53.82%, #FFB800 -31.88deg, #FAFF00 50.51deg, #FFB800 151.87deg, #FAFF00 232.76deg, #FFB800 328.12deg, #FAFF00 410.51deg);
	
		background-color: var(--background);
	}
	
	#root {
		height: 100%;
	}
`

export default GlobalStyles;