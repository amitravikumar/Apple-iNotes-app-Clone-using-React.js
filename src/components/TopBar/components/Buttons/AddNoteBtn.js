import React from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'

import NotesContext from '../../../../utils/context'

import styles from './Button.module.scss'

const AddNoteBtn = ({ addNoteFn }) => (
  <NotesContext.Consumer>
    {
      context => (
        <button
          className={styles.btn}
          onClick={() => addNoteFn({
            content: 'New note',
            folder: context.current.folder,
            id: uniqid(),
            editDate: new Date()
          })}
        >
          <i className='fa fa-edit' />
        </button>
      )
    }
  </NotesContext.Consumer>
)

AddNoteBtn.propTypes = {
  addNoteFn: PropTypes.func.isRequired
}

export default AddNoteBtn