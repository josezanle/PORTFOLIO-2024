"use client"

import React, { useState } from 'react';
import { lightTheme, darkTheme } from '@/theme';
import { ThemeContext } from '../themeContext';

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        if (theme === lightTheme) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>

}
