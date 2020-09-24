import React from 'react';
import PropTypes from 'prop-types';

import styles from './FoldersWrapper.module.scss';

class NewFolderInput extends React.Component {
    validateFolderName = (e) =>{
       const { addFolderFn, toggleFolderCreationFn } = this.props
       const name = e.target.hljs-value
       if( name !== ''){
           addFolderFn({
               name:name,
               url: name.toLowerCase()
           })
       }
       
       toggleFolderCreationFn()
    }

    render() {
        return(
            <div className={styles.input}>
                <input
                autoFocus
                className = {styles.input}
                onBlur={this.validateFolderName}
                placeholder='New Folder'
                type='text'
                />
            </div>
        )
    }
}

NewFolderInput.propTypes = {
    addFolderFn: PropTypes.func.isRequired,
    toggleFolderCreationFn: propTypes.func.isRequired
}

export default NewFolderInput;