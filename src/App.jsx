import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedGroupColor, setSelectedGroupColor] = useState(null);
  const [notes, setNotes] = useState({
    Java: [{dateTime: "19 Jan 2025 * 02:33 AM", content: 'This is the content of note 1'}],
    Python: [{dateTime: "19 Jan 2025 * 02:33 AM", content: 'This is the content of note 2'}],
    'C++': [{dateTime: "19 Jan 2025 * 02:33 AM", content: 'This is the content of note 3'}],
  }
);

const handleAddGroup = (group) => {
  setNotes((prevNotes) => ({
    ...prevNotes,
    [group]: [], 
  }));
};

const handleAddNote = (note) => {
  setNotes((prevNotes) => ({
      ...prevNotes,
      [selectedGroup]: [...prevNotes[selectedGroup], note],
  }));
};

  return (
    <>
      <div style={{ display: "flex", width: '100%' }}>
        <Sidebar setSelectedGroup={setSelectedGroup} setSelectedGroupColor={setSelectedGroupColor} onAddGroup={handleAddGroup} />
        <MainContent selectedGroup={selectedGroup} selectedGroupColor={selectedGroupColor} notes={notes} onAddNote={handleAddNote}/>
      </div>
    </>
  );
}

export default App;
