import React from "react";
import styles from "../styles/SideBar.module.css";

const Sidebar = ({ setSelectedGroup }) => {
  const [groups, setGroups] = React.useState(["Java", "Python", "C++"]);

  const handleNoteClick = (note) => {
    setSelectedGroup(note);
  };

  const handleAddNote = (note) => {
    setGroups ([...groups, note]);
  }

  return (
    <aside style={{ width: "20%", padding: "0 20px",  }}>
      <div id={styles.header} style={{padding: '40px 10px'}}>
          <h2>Pocket Notes</h2>
      </div>

      {groups.map((group, index) => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}
            key={index}
            onClick={() => handleNoteClick(group)} // Handle note click
          >
            <div style={{ padding: '10px', borderRadius: '50%', background: 'red' }}>G</div>
            <h1>{group}</h1>
          </div>
        );
      })}

      <button id={styles.addNote} onClick={()=> handleAddNote('hello')}>+</button>
    </aside>
  );
};

export default Sidebar;
