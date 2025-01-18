import React from "react";
import styles from "../styles/GroupModal.module.css"; // Create a CSS file for modal styles

const GroupModal = ({groupName, setGroupName, selectedColor, setSelectedColor, onClose, onAddGroup }) => {
  const colors = ["#CCCCCC", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGroup(groupName, selectedColor);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Create New Group</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="groupName">Group Name</label>
            <input 
              type="text" 
              value={groupName} 
              onChange={(e) => setGroupName(e.target.value)} 
              placeholder="Enter group name" 
              required 
            />
          </div>
          <div className={styles.inputGroup}>
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
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default GroupModal;