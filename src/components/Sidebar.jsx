import React from "react";
import styles from "../styles/SideBar.module.css";

const Sidebar = ({ setSelectedGroup, onAddGroup}) => {
  const [groups, setGroups] = React.useState(["Java", "Python", "C++"]);
  const [activeGroup, setActiveGroup] = React.useState(null);

  const handleNoteClick = (group) => {
    setSelectedGroup(group);
    setActiveGroup(group);
  };

  const handleAddGroup = () => {
    const newGroup = prompt("Enter new group name:");
    if (newGroup && !groups.includes(newGroup)) {
      setGroups([...groups, newGroup]);
      onAddGroup(newGroup);
    } else {
      alert("Group name is either empty or already exists.");
    }
  };

  const handleAddNote = (note) => {
    setGroups ([...groups, note]);
    const newGroup = prompt("Enter new group name:");
    if (newGroup && !groups.includes(newGroup)) {
      setGroups([...groups, newGroup]);
      onAddGroup(newGroup);
    } else {
      alert("Group name is either empty or already exists.");
    }
  }

  return (
    <aside style={{ width: "20%", padding: "0 20px",  }}>
      <div id={styles.header} style={{padding: '40px 10px'}}>
          <h2>Pocket Notes</h2>
      </div>

      {groups.map((group, index) => {
        const isActive = group === activeGroup;
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              marginTop: '10px',
              background: isActive ? 'lightblue' : 'transparent',
              borderRadius: '5px',
              padding: '5px',
              cursor: 'pointer',
            }}
            key={index}
            onClick={() => handleNoteClick(group)} // Handle note click
          >
            <div className={styles.circle}>
              <h3>G</h3>
              </div>
            <h1>{group}</h1>
          </div>
        );
      })}

      <button id={styles.addNote} onClick={()=> handleAddNote('hello')}>+</button>
    </aside>
  );
};

export default Sidebar;
