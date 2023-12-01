import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <div className={styles.email}>
        <label>
          From: <input type="text" value="reynal@mail.ru" />
        </label>
        <div>
          <button>Copy</button>
          <button>Paste</button>
        </div>
      </div>

      <div className={styles.line} />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input type="text" placeholder="Тема письма" />
        <div className={styles.countSymbol}>80</div>
      </div>

      <div className={styles.line} />
    </div>
  )
}

export default Header
