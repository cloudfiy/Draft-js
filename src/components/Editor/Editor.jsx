import React, { useRef, useState } from 'react'
import styles from './Editor.module.css'
import { useClickOutside } from '../../hooks/useClickOutside'
import Select from '../UI/Select/Select'
import Button from '../UI/Button/Button'

const Editor = ({ x, y, visible, onClose, selectedText, setSelectedText }) => {
  const editorRef = useRef()

  const handleClickOutside = () => {
    onClose()
  }

  useClickOutside(editorRef, handleClickOutside)

  const editTextBtn = [
    {
      title: 'B',
      value: 'bold',
    },
    {
      title: 'I',
      value: 'italic',
    },
    {
      title: 'U',
      value: 'underline',
    },
    {
      title: 'T',
      value: 'through',
    },
  ]

  return (
    <div
      ref={editorRef}
      className={styles.editor}
      style={{ position: 'absolute', top: y, left: x, display: visible ? 'block' : 'none' }}
    >
      <Select
        option={[
          {
            value: 1,
            title: 'Text',
          },
          {
            value: 2,
            title: 'Number',
          },
          {
            value: 3,
            title: 'Last',
          },
        ]}
      />
      {editTextBtn.map((btn) => (
        <Button>{btn.title}</Button>
      ))}
    </div>
  )
}

export default Editor
