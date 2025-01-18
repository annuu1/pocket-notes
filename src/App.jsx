import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState({
    Java: ['This is the content of note 1', 'this is the second note', 'this is the third note'],
    Python: ['This is the content of note 2', 'this is the second note', 'this is the third note'],
    'C++': ['This is the content of note 3', 'this is the second note', 'this is the third note'],
  }
);

const handleAddNote = (note) => {
  setNotes((prevNotes) => ({
      ...prevNotes,
      [selectedGroup]: [...prevNotes[selectedGroup], note],
  }));
};

  return (
    <>
      <div style={{ display: "flex", width: '100%' }}>
        <Sidebar setSelectedGroup={setSelectedGroup}  />
        <MainContent selectedGroup={selectedGroup} notes={notes} onAddNote={handleAddNote}/>
      </div>
    </>
  );
}

export default App;
