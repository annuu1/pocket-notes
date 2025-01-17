import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <>
      <div style={{ display: "flex", width: '100%' }}>
        <Sidebar setSelectedNote={setSelectedNote} />
        <MainContent selectedNote={selectedNote} />
      </div>
    </>
  );
}

export default App;
