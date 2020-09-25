import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'

import NotesContext from '../../../utils/context'

import styles from '../NotesWrapper.module.scss'

const NoteThumbnail = ({
  note,
  selectNoteFn
}) => (
  <NotesContext.Consumer>
    {
      context => (
        <Link
          className={note.id === context.current.note ? styles.thumbnailActive : styles.thumbnail}
          to={`/notes-app/${note.folder}/${note.id}`}
          onClick={() => selectNoteFn(note.id)}
        >
          <>
            {note.content ? (
              <p className={styles.thumbnailHeader}>
                {note.content.length > 25 ? note.content.slice(0, 25) + '...' : note.content}
              </p>
            ) : (
              <p className={styles.thumbnailHeaderEmpty}>Empty note</p>
            )}
            <p className={styles.thumbnailDate}>
              {moment(note.editDate).format('DD.MM.YYYY')}
            </p>
            {
              context.current.folder === 'notes' &&
                <div className={styles.thumbnailFolder}>
                  <i className='fa fa-folder-o' />
                  <span>{note.folder}</span>
                </div>
            }
          </>
        </Link>
      )
    }
  </NotesContext.Consumer>
)

NoteThumbnail.propTypes = {
  note: PropTypes.object.isRequired,
  selectNoteFn: PropTypes.func.isRequired
}

export default NoteThumbnail