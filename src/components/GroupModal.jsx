import React from "react";
import styles from "../styles/GroupModal.module.css"; // Create a CSS file for modal styles

const GroupModal = ({groupName, setGroupName, selectedColor, setSelectedColor, onClose, onAddGroup }) => {
  const colors = ["#CCCCCC", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGroup(groupName, selectedColor);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Create New Group</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="groupName">Group Name</label>
          <input 
            type="text" 
            value={groupName} 
            onChange={(e) => setGroupName(e.target.value)} 
            placeholder="Enter group name" 
            required 
          />
          <label htmlFor="selectedColor">Choose Color</label>
          <div className={styles.colorOptions}>
            {colors.map((color) => (
              <div 
                key={color} 
                className={styles.colorCircle} 
                style={{ backgroundColor: color }} 
                onClick={() => setSelectedColor(color)} 
              />
            ))}
          </div>
          <button type="submit">Add Group</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default GroupModal;
