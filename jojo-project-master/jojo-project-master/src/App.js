import React, { useEffect } from 'react';
import { AppRouter } from './AppRouter';
import Player from "./components/Player"
import PlayerUI from "./components/PlayerUI"

// основной компонент

const App = () => {
	// после инициализации компонента добавляем слушатель для документа на "пробел", чтобы управлять воспроизведением
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.code === 'Space' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { // проверка на клавишу "пробел"
				e.preventDefault() // блокируем стандартное действие на пробел (прокрутку вниз)
				if (global.player.current.duration > 0 && !global.player.current.paused) { // если плеер играет
					global.player.current.pause() // ставим на паузу
				} else {
					global.player.current.play() // включаем трек
				}
		  	}
		}
		document.addEventListener('keydown', handleKeyDown) // вешаем слушатель
		return () => {
		  	document.removeEventListener('keydown', handleKeyDown)
		};
	}, [])

	return (
		<>
			<Player/> {/* компонент плеера, добавляем его на самый верх страницы */}
			<AppRouter/> {/* наш роутер, он уже будет решать, что показывать */}
			<PlayerUI /> {/* интерфейс плеера, добавляем его после роутера, чтобы он всегда был наместе и в одном экземпляре */}
		</>
	);
}

export default App;