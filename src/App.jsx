import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState([{
    id: 1,
    title: 'Note 1',
    content: ['This is the content of note 1', 'this is the second note', 'this is the third note']
  }]);

  return (
    <>
      <div style={{ display: "flex", width: '100%' }}>
        <Sidebar setSelectedNote={setSelectedNote}  />
        <MainContent selectedNote={selectedNote} notes={notes} setNotes={setNotes}/>
      </div>
    </>
  );
}

export default App;
