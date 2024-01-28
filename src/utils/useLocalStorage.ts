import { useEffect, useState } from "react";

/**
 * Функция `getStorageValue` используется для получения значения из локального
 * хранилища браузера по указанному ключу. Если значение не найдено, возвращается
 * указанное значение по умолчанию.
 *
 * @param {string} key - Ключ, по которому происходит поиск значения в локальном хранилище.
 * @param {boolean} defaultValue - Значение по умолчанию, возвращаемое, если ключ не найден.
 * @returns {boolean} - Возвращает значение из локального хранилища или значение по умолчанию.
 */
const getStorageValue = (key: string, defaultValue: boolean) => {
  const saved = localStorage.getItem(key);
  
  return saved ? JSON.parse(saved) : defaultValue;
}

/**
 * Хук `useLocalStorage` предоставляет удобный способ работы с локальным хранилищем
 * браузера в функциональных компонентах React. Он автоматически сохраняет и восстанавливает
 * значения по указанному ключу, обновляя состояние компонента.
 *
 * @param {string} key - Ключ, по которому происходит сохранение и получение значения в локальном хранилище.
 * @param {boolean} defaultValue - Значение по умолчанию, используемое при первом обращении или если ключ отсутствует.
 * @returns {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} - Возвращает массив, содержащий текущее
 * значение из локального хранилища и функцию для его обновления.
 */
export const useLocalStorage = (key: string, defaultValue: boolean) => {

  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}