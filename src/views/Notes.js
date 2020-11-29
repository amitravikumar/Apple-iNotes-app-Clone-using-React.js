import React from 'react'

import styles from './Notes.module.scss'

import FoldersWrapper from '../components/FoldersWrapper/FoldersWrapper'
import NotesWrapper from '../components/NotesWrapper/NotesWrapper'
import Preview from '../components/Preview/Preview'
import TopBar from '../components/TopBar/TopBar'

import NotesContext from '../utils/context'
import { initialNotes, initialFolders } from '../utils/initialState'

class Notes extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      notes: [...initialNotes],
      searchPhrase: '',
      folders: [...initialFolders],
      current: {
        folder: 'notes',
        note: null
      }
    }

    this.notesWrapperRef = React.createRef()
  }

  addFolder = folder => {
    this.setState(prevState => ({
      folders: [...prevState.folders, folder]
    }))
  }

  addNote = note => {
    this.resetSearchFilter()
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
      current: {
        ...prevState.current,
        note: note.id
      }
    }), () => this.scrollNotesWrapperToBottom())
  }

  deleteNote = () => {
    const notes = [...this.state.notes]
    const noteToDelete = notes.findIndex((note) => note.id === this.state.current.note)

    if (noteToDelete !== -1) {
      notes.splice(noteToDelete, 1)
      this.setState(prevState => ({
        notes: notes,
        current: {
          ...prevState.current,
          note: null
        }
      }))
    }
  }

  editNote = e => {
    const notesCopy = [...this.state.notes]

    const notesToEdit = notesCopy.findIndex((note) => note.id === this.state.current.note)
    notesCopy[notesToEdit].content = e.target.value
    notesCopy[notesToEdit].editDate = new Date()

    this.setState({
      notes: [...notesCopy]
    })
  }

  scrollNotesWrapperToBottom = () => {
    const notesWrapper = this.notesWrapperRef.current
    notesWrapper.scrollTo({
      top: notesWrapper.scrollHeight,
      behavior: 'smooth'
    })
  }

  selectFolder = (folder) => {
    const firstNoteFromFolder = folder === 'notes' ? this.state.notes[0] : this.state.notes.find(note => note.folder === folder)

    this.setState({
      current: {
        folder: folder,
        note: firstNoteFromFolder ? firstNoteFromFolder.id : null
      }
    })
    this.resetSearchFilter()
  }

  selectNote = note => {
    this.setState(prevState => ({
      current: {
        ...prevState.current,
        note: note
      }
    }))
  }

  searchNotes = phrase => {
    this.setState({
      searchPhrase: phrase,
      current: {
        folder: 'notes',
        note: null
      }
    })
  }

  resetSearchFilter = () => {
    this.setState({
      searchPhrase: ''
    })
  }

  render () {
    const { current, folders, notes, searchPhrase } = this.state
    const contextValues = {
      current: current,
      searchPhrase: searchPhrase
    }

    return (
      <NotesContext.Provider value={contextValues}>
        <div className={styles.desktop}>
          <div className={styles.appWrapper}>
            <TopBar
              addNoteFn={this.addNote}
              deleteNoteFn={this.deleteNote}
              searchNotesFn={this.searchNotes}
            />
            <div className={styles.viewWrapper}>
              <FoldersWrapper
                folders={folders}
                selectFolderFn={this.selectFolder}
                addFolderFn={this.addFolder}
              />
              <NotesWrapper
                addNoteFn={this.addNote}
                current={current}
                searchPhrase={searchPhrase}
                notes={notes}
                selectNoteFn={this.selectNote}
                ref={this.notesWrapperRef}
              />
              <Preview
                note={(notes).find((note) => note.id === current.note)}
                editFn={this.editNote}
              />
            </div>
          </div>
        </div>
      </NotesContext.Provider>
    )
  }
}

export default Notes
