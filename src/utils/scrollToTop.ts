import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Компонент `ScrollToTop` предназначен для автоматической прокрутки страницы
 * в верхнюю часть при изменении маршрута (pathname) в приложении React.
 * 
 * Использует хук `useLocation` из библиотеки `react-router-dom` для отслеживания
 * текущего маршрута. При изменении маршрута выполняется прокрутка страницы в верхнюю часть.
 *
 * @returns {null} - Возвращает `null`, так как компонент не имеет отображаемого содержимого.
 */
const ScrollToTop = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop