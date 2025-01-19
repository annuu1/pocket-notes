import React, { useState } from "react";
import style from "../styles/MainContent.module.css";
import addNote from "../assets/addNote.svg";

const MainContent = ({ selectedGroup, selectedGroupColor, notes, onAddNote, isSidebarVisible, setIsSidebarVisible }) => {
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim()) {
      const now = new Date();
      const dateTime = `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()} * ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`;
            onAddNote({ content: newNote, dateTime });
      setNewNote("");
    }
  };

   // Utility function to get the initials
   const getInitials = (group) => {
    const words = group.split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase(); // Only one word
    } else {
      return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase(); // First letters of the first two words
    }
  };
  
  return (
    <main className={isSidebarVisible ? style.hidden : style.visible}>
      {selectedGroup ? (
        <>
          <div className={style["group-header"]}>
            <div style={{ backgroundColor: selectedGroupColor }}>
              <h3 style={{ color: "white" }}>{getInitials(selectedGroup)}</h3>
              </div>
            <h1>{selectedGroup}</h1>
          </div>
          <div className={style.notesContainer}>
            {notes[selectedGroup].map((note, index) => (
              <div className={style.noteContainer} key={index}>
                <p className={style.note}>{note['content']}</p>
                <p className={style.dateTime}>{note['dateTime']}</p>
              </div>
            ))}
          </div>
          <div className={style["input-container"]}>
            <input
              type="text"
              id="messageInput"
              placeholder="Type your message..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <button id="sendButton" onClick={handleAddNote}>
              <img style={{color: 'green'}} src={addNote} alt="add note" />
            </button>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={[style.bankPageContent]}
            style={{  }}
          >
            <h2>Pocket Notes</h2>
            <img
              src="https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfQR3vqqO9Hwzxtx-MkI44tAhDebMQVPitweha1WjhgTLw764IXurUsVqjR2Ql3b6VSNghWTTgaPWgeG-M1-5v88wekaD32W9DCgEUVtpfTzeppQaznJEvCcD~4wtLIokhn78EI5~uCZ1~FwMBf-aDLN0iqqJIEjxr67HJKZWwsaq~LrJTWqOA0b9wW2doyn1GSS4r1PVQjRCtIyfgIxJ-mttE3gQFC07G6YxuDshDopRLlhytwZ-NxKrlz2whNQ~lAywYBO3w6y6Yk8GVKQCVASndqxARBbOFnabJck81tx~WNzuuoCYVVdNecZtHx49Nn9eQD82JPvyVgemYvvWQ__"
              alt="img not found"
            />
            <p>
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default MainContent;
