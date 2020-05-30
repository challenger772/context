import React from 'react';

export const themes = {
    light: {
        foreground: '#003322',
        background: '#345522'   
    },
    dark: {
        foreground: '#353253',
        background: '#455430'
    },
};

export const ThemeContext = React.createContext(
    themes.dark
);