import React from 'react'
import PropTypes from 'prop-types'

import Folder from './components/Folder'
import NewFolderInput from './components/NewFolderInput'

import styles from './FoldersWrapper.module.scss'

class FoldersWrapper extends React.Component {
  state = {
    newFolderIsCreated: false
  }

  handleNewFolderClick = () => {
    this.setState({
      newFolderIsCreated: !this.state.newFolderIsCreated
    })
  }

  render () {
    const { folders, selectFolderFn, addFolderFn } = this.props
    return (
      <div className={styles.wrapper}>
        {
          folders.map(folder => (
            <Folder
              key={folder.url}
              folder={folder}
              selectFolderFn={selectFolderFn}
            />
          ))
        }
        {
          this.state.newFolderIsCreated &&
            <NewFolderInput
              toggleFolderCreationFn={this.handleNewFolderClick}
              addFolderFn={addFolderFn}
            />
        }
        <button
          className={styles.addBtn}
          onClick={this.handleNewFolderClick}
        >
          <div className={styles.addBtnIcon}>
            +
          </div>
          <div className={styles.addBtnCaption}>New folder</div>
        </button>
      </div>
    )
  }
}

FoldersWrapper.propTypes = {
  addFolderFn: PropTypes.func.isRequired,
  folders: PropTypes.array.isRequired,
  selectFolderFn: PropTypes.func.isRequired
}

export default FoldersWrapper
