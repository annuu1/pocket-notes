import React from "react";
import styles from "../styles/GroupModal.module.css"; // Create a CSS file for modal styles

const GroupModal = ({groupName, setGroupName, selectedColor, setSelectedColor, onClose, onAddGroup }) => {
  const colors = ["#CCCCCC", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGroup(groupName, selectedColor); // Call the function to add the group
    // handleAddNote("anu");
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Add New Group</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={groupName} 
            onChange={(e) => setGroupName(e.target.value)} 
            placeholder="Enter group name" 
            required 
          />
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
