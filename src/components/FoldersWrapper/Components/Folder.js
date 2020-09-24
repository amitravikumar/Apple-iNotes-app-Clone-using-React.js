import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NotesContext from '../../../utils/context';
import styles from '../FoldersWrapper.module.scss';

const Folder = ({
    folder,
    selectedFolderFn
}) =>(
    <NotesContext.Consumer>
        {
            context => (
                <Link
                className={Folder.url === context.current.folder? styles.folderLabelActive: styles.folderLabel}
                key={folder.url}
                to={`notes-app/${folder.url}`}
                onClick={() => selectedFolderFn(folder.url)}
                >
                    {folder.name}
                </Link>
            )
        }
    </NotesContext.Consumer>
)

Folder.propTypes = {
    folder: propTypes.object.isRequired,
    selectedFolderFn: propTypes.func.isRequired
}

export default folder
