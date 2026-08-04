import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-md hover:opacity-90 transition bg-white/5 dark:bg-black/10 border border-gray-200 dark:border-[#263244] flex items-center justify-center">
      <span className="text-sm" style={{ lineHeight: 1 }}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  )
}

export default ThemeToggle
