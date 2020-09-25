import React from 'react'
import PropTypes from 'prop-types'
import NotesContext from '../../../../utils/context'

import styles from './Search.module.scss'

class Search extends React.Component {
  handleChange = e => {
    this.props.searchNotesFn(e.target.value)
  }

  handleClearInput = () => {
    this.props.searchNotesFn('')
  }

  render () {
    return (
      <NotesContext.Consumer>
        {
          context => (
            <div className={styles.search}>
              <div className={styles.icon}>
                <i className='fa fa-search' />
              </div>
              <input
                className={styles.input}
                type='text'
                placeholder='Search'
                onChange={this.handleChange}
                value={context.searchPhrase}
              />
              {
                context.searchPhrase !== '' &&
                  <i
                    onClick={this.handleClearInput}
                    className={`${styles.inputReset} fas fa-times-circle`}
                  />
              }
            </div>
          )
        }
      </NotesContext.Consumer>
    )
  }
}

Search.propTypes = {
  searchNotesFn: PropTypes.func.isRequired
}

export default Search