/**
 * Функция определяет, включена ли у пользователя темная цветовая схема
 * в операционной системе или предпочтениях браузера.
 *
 * @returns {boolean} - Возвращает `true`, если обнаружен темный режим,
 * и `false` в противном случае.
 */
export const detectDarkMode = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true
    }
  return false
}