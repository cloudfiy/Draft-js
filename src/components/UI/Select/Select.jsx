import React from 'react'
import styles from './Select.module.css'

const Select = ({ option }) => {
  return (
    <select className={styles.select}>
      {option.map((opt) => (
        <option className={styles.option} key={opt.value}>
          {opt.title}
        </option>
      ))}
    </select>
  )
}

export default Select
