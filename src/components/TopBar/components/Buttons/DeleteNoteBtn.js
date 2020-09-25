import React from 'react'
import PropTypes from 'prop-types'
import NotesContext from '../../../../utils/context'

import styles from './Button.module.scss'

const DeleteNoteBtn = ({ deleteNoteFn }) => {
  return (
    <NotesContext.Consumer>
      {
        context => (
          <button
            className={`${context.current.note !== null ? styles.btn : styles.btnDisabled}`}
            onClick={deleteNoteFn}
            disabled={context.current.note === null}
          >
            <i className='fa fa-trash-o' />
          </button>
        )
      }
    </NotesContext.Consumer>
  )
}

DeleteNoteBtn.propTypes = {
  deleteNoteFn: PropTypes.func.isRequired
}

export default DeleteNoteBtn