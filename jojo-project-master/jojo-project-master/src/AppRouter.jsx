import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {routes} from "./routes/routes";

// роутер, отвечает за переход между страницами

export const AppRouter = () => {
	return (
		<Routes> {/* тут мы передаем все наши маршруты */}
			{
				// получаем роуты из файла "routes.js" и добавляем их
				routes.map(route => <Route path={route.path} key={route.path} element={<route.element/>}/>)
			}
			<Route path={"*"} element={<Navigate to={"/"}/>} /> {/* маршрут на случай, если будет неизветсный url */}
		</Routes>
	)
}