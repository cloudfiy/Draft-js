import React from 'react'
import styles from './Mail.module.css'
import Header from '../Header/Header'
import { FaRegWindowMinimize } from 'react-icons/fa'
import { BsArrowsAngleExpand, BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineClose, AiOutlinePaperClip, AiOutlineCalendar } from 'react-icons/ai'
import Main from '../Main/Main'

import { GoTrash, GoSmiley } from 'react-icons/go'
import { RiFileListLine } from 'react-icons/ri'
import CustomInlineToolbarEditor from '../TextEditor/TextEditor'

//https://reqres.in/api/users

const Mail = () => {
  return (
    <form className={styles.wrap}>
      <ul className={styles.control}>
        <li>
          <FaRegWindowMinimize />
        </li>
        <li>
          <BsArrowsAngleExpand />
        </li>
        <li>
          <AiOutlineClose />
        </li>
      </ul>
      <Header />
      <CustomInlineToolbarEditor />
      {/* <Main /> */}
      <div className={styles.bottomControl}>
        <div style={{ alignItems: 'center', display: 'flex', gap: 20 }}>
          <GoTrash /> <BsThreeDotsVertical />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', gap: 20 }}>
          <RiFileListLine />
          <GoSmiley />
          <AiOutlinePaperClip />
          <button style={{ padding: 10, backgroundColor: 'black', borderRadius: 10 }}>
            Send now
            <AiOutlineCalendar style={{ borderLeft: '1px solid white' }} />
          </button>
        </div>
      </div>
    </form>
  )
}

export default Mail
