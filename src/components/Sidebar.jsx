import React from "react";
import styles from "../styles/SideBar.module.css";

const Sidebar = ({ setSelectedNote }) => {
  const [groups, setGroups] = React.useState(["Java", "Python", "C++"]);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  return (
    <aside style={{ width: "20%", padding: "20px" }}>
      <h2 id={styles.header}>Pocket Notes</h2>

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

      <button id={styles.addNote}>+</button>
    </aside>
  );
};

export default Sidebar;
