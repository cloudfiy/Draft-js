import { useState, useEffect } from 'react'

export const useEditor = () => {
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })
  const [contextMenuVisible, setContextMenuVisible] = useState(false)
  const [selectedText, setSelectedText] = useState('')

  const handleContextMenu = (e) => {
    if (e.target.tagName === 'TEXTAREA') {
      e.preventDefault()
      setContextMenuPosition({ x: e.clientX, y: e.clientY })
      setContextMenuVisible(true)
    }
  }

  const closeContextMenu = () => {
    setContextMenuVisible(false)
  }

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu)
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  return {
    contextMenuPosition,
    contextMenuVisible,
    closeContextMenu,
    selectedText,
    setSelectedText,
  }
}
