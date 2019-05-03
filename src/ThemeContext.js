import React from 'react';


const ThemeContext = React.createContext({
  theme: "",
  themeName: "",
  isLight: "",
  handleTheme() {}
});

export const Provider = ThemeContext.Provider
export const Consumer  = ThemeContext.Consumer