import React from 'react'
import PropTypes from 'prop-types'

import NoteThumbnail from './components/NoteThumbnail'

import styles from './NotesWrapper.module.scss'

const NotesWrapper = React.forwardRef((props, ref) => {
  const { current, notes, searchPhrase, selectNoteFn } = props

  let notesToRender = current.folder === 'notes' ? notes : notes.filter((note) => note.folder === current.folder)
  notesToRender = notesToRender.filter((note) => note.content.includes(searchPhrase))

  return (
    <div ref={ref} className={styles.wrapper}>
      {
        notesToRender.map(note => (
          <NoteThumbnail
            key={note.id}
            note={note}
            selectNoteFn={selectNoteFn}
          />
        ))
      }
    </div>
  )
})

NotesWrapper.propTypes = {
  current: PropTypes.object,
  notes: PropTypes.array.isRequired,
  searchPhrase: PropTypes.string,
  selectNoteFn: PropTypes.func.isRequired
}

export default NotesWrapper