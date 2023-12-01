import React, { useState, useRef, useEffect } from 'react'
import styles from './Main.module.css'
import Editor from '../Editor/Editor'
import { useEditor } from '../../hooks/useEditor'

const Main = () => {
  const {
    contextMenuPosition,
    contextMenuVisible,
    closeContextMenu,
    selectedText,
    setSelectedText,
  } = useEditor()

  return (
    <div style={{ height: 400 }}>
      <textarea
        className={styles.text}
        onMouseUp={() => {
          const text = window.getSelection().toString()
          setSelectedText(text)
        }}
      ></textarea>

      {contextMenuVisible && (
        <Editor
          x={contextMenuPosition.x}
          y={contextMenuPosition.y}
          visible={contextMenuVisible}
          onClose={closeContextMenu}
          selectedText={selectedText}
          setSelectedText={setSelectedText}
        />
      )}
    </div>
  )
}

export default Main
