import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from "./globalStyles";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// основной файл
// получать элемент "root" и туда рендерим нашу страницу
// BrowserRouter отвечает за навигагию по приложению
// App это наш основной компонент
/// GlobalStyles это глобальные стили, импортируем их из файла

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			<GlobalStyles/>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
