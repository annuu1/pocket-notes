import React, { useState } from "react";
import styles from "../styles/SideBar.module.css";
import GroupModal from "./GroupModal"; // Import the new modal component

const Sidebar = ({ setSelectedGroup, onAddGroup }) => {
  const [groups, setGroups] = useState(["Java", "Python", "C++"]);
  const [activeGroup, setActiveGroup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [groupName, setGroupName] = useState(""); // State for group name
  const [selectedColor, setSelectedColor] = useState(""); // State for selected color

  const handleAddGroup = () => {
    setIsModalOpen(true);
  };

  const handleNoteClick = (group) => {
    setSelectedGroup(group);
    setActiveGroup(group);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setGroupName("");
    setSelectedColor("");
  };

  const handleAddNote = (note) => {
    const newGroup = prompt("Enter new group name:");
    if (newGroup && !groups.includes(newGroup)) {
      setGroups([...groups, newGroup]);
      onAddGroup(newGroup);
    } else {
      alert("Group name is either empty or already exists.");
    }
  };

  // Utility function to get the initials
  const getInitials = (group) => {
    const words = group.split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase(); // First letter of the single word
    } else {
      return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase(); // First letters of the first two words
    }
  };

  return (
    <aside style={{ width: "20%", padding: "0 20px" }}>
      <div id={styles.header} style={{ padding: '40px 10px' }}>
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
            onClick={() => handleNoteClick(group)}
          >
            <div className={styles.circle}>
              <h3>{getInitials(group)}</h3> {/* Use the utility function here */}
            </div>
            <h1>{group}</h1>
          </div>
        );
      })}

      <button id={styles.addNote} onClick={handleAddGroup}>+</button>

      {isModalOpen && (
        <GroupModal 
          groupName={groupName} 
          setGroupName={setGroupName} 
          selectedColor={selectedColor} 
          setSelectedColor={setSelectedColor} 
          onClose={closeModal} 
          onAddGroup={(name, color) => {
            setGroups([...groups, name]);
            closeModal();
          }} 
        />
      )}
    </aside>
  );
};

export default Sidebar;