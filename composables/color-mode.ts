export const useDarkMode = () => {
  const colorMode = useColorMode()
  const toggleDarkMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  }
  return {
    colorMode: readonly(colorMode),
    toggleDarkMode
  }
}