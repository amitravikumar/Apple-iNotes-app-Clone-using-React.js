import React from 'react'
import PropTypes from 'prop-types'

import AddNoteBtn from './components/Buttons/AddNoteBtn'
import DeleteNoteBtn from './components/Buttons/DeleteNoteBtn'
import Dots from './components/Dots/Dots'
import Search from './components/Search/Search'

import styles from './TopBar.module.scss'

const TopBar = ({
  addNoteFn,
  deleteNoteFn,
  searchNotesFn
}) => (
  <div className={styles.topbar}>
    <div className={styles.dotsContainer}>
      <Dots />
    </div>
    <div className={styles.buttonsContainer}>
      <AddNoteBtn
        addNoteFn={addNoteFn}
      />
      <DeleteNoteBtn
        deleteNoteFn={deleteNoteFn}
      />
    </div>
    <div className={styles.searchContainer}>
      <Search
        searchNotesFn={searchNotesFn}
      />
    </div>
  </div>
)

TopBar.propTypes = {
  addNoteFn: PropTypes.func.isRequired,
  deleteNoteFn: PropTypes.func.isRequired,
  searchNotesFn: PropTypes.func.isRequired,
}

export default TopBar