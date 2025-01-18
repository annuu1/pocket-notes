import React, { useState } from "react";
import styles from "../styles/SideBar.module.css";
import GroupModal from "./GroupModal";

const Sidebar = ({ setSelectedGroup, setSelectedGroupColor, onAddGroup }) => {

  const [groups, setGroups] = useState([
    { name: "Java", color: "#FF5733" }, // Example color
    { name: "Python", color: "#33FF57" }, // Example color
    { name: "C++", color: "#3357FF" }, // Example color
  ]);

  const [activeGroup, setActiveGroup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleAddGroup = () => {
    setIsModalOpen(true);
  };

  const handleNoteClick = (group) => {
    setSelectedGroup(group.name);
    setActiveGroup(group.name);
    setSelectedGroupColor(group.color);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setGroupName("");
    setSelectedColor("");
  };

  const handleAddNote = (newGroup) => {
    if (newGroup && !groups.includes(newGroup)) {
      setGroups([...groups, newGroup]);
      onAddGroup(newGroup);
    } else {
      alert("Group name is either empty or already exists.");
    }
  };

  // Utility function to get the initials
  const getInitials = (group) => {
    const words = group.name.split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase(); // Only one word
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
        const isActive = group.name === activeGroup;
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
            <div className={styles.circle} style={{ backgroundColor: group.color }}>
              <h3 style={{ color: 'white' }}>{getInitials(group)}</h3> {/* Use the utility function here */}
            </div>
            <h1>{group.name}</h1>
          </div>
        );
      })}

      <button id={styles.addNote} onClick={handleAddGroup}>+</button>

      {isModalOpen && (
        <GroupModal 
        handleAddNote={handleAddNote}
          groupName={groupName} 
          setGroupName={setGroupName} 
          selectedColor={selectedColor} 
          setSelectedColor={setSelectedColor} 
          onClose={closeModal} 
          onAddGroup={(name, color) => {
            if(!name || groups.some((group) => group.name === name)) {
              alert('Invalid group name or group already exists');
              return;
            }
            setGroups([...groups, { name, color }]);
            onAddGroup(name);
            closeModal();
          }} 
        />
      )}
    </aside>
  );
};

export default Sidebar;