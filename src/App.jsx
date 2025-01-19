import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedGroupColor, setSelectedGroupColor] = useState(null);
  const [notes, setNotes] = useState({
    Java: [{dateTime: "19 Jan 2025 * 02:33 AM", content: 'This is the content of note 1'}],
    Python: [{dateTime: "19 Jan 2025 * 01:42 AM", content: 'This is the content of note 2'}],
    'C++': [{dateTime: "19 Jan 2025 * 12:51 AM", content: 'This is the content of note 3'}],
  }
);

const [isSidebarVisible, setIsSidebarVisible] = useState(true);

const toggleSidebar = () => {
  setIsSidebarVisible(!isSidebarVisible);
}
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
        <Sidebar setSelectedGroup={setSelectedGroup} setSelectedGroupColor={setSelectedGroupColor} onAddGroup={handleAddGroup} isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}  />
        <MainContent selectedGroup={selectedGroup} selectedGroupColor={selectedGroupColor} notes={notes} onAddNote={handleAddNote} isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>
      </div>
    </>
  );
}

export default App;
