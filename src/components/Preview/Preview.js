import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './Preview.module.scss'

const Preview = ({
  editFn,
  note
}) => (
  <div className={styles.preview}>
    {
      note &&
        <>
          <p className={styles.date}>
            {moment(note.editDate).format('DD MMMM YYYY HH:mm')}
          </p>
          <textarea
            className={styles.content}
            value={note.content}
            onChange={editFn}
          />
        </>
    }
  </div>
)

Preview.propTypes = {
  editFn: PropTypes.func,
  note: PropTypes.object
}

export default Preview