import React from 'react';
import style from '../styles/MainContent.module.css';


const MainContent = ({ selectedNote }) => {
    return (
        <main style={{ width: '80%', flex: 1, background: '#DAE5F5' }}>
            <div className={style.bankPageContent} style={{ width: '50%', textAlign: 'center' }}>
                <img src="https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfQR3vqqO9Hwzxtx-MkI44tAhDebMQVPitweha1WjhgTLw764IXurUsVqjR2Ql3b6VSNghWTTgaPWgeG-M1-5v88wekaD32W9DCgEUVtpfTzeppQaznJEvCcD~4wtLIokhn78EI5~uCZ1~FwMBf-aDLN0iqqJIEjxr67HJKZWwsaq~LrJTWqOA0b9wW2doyn1GSS4r1PVQjRCtIyfgIxJ-mttE3gQFC07G6YxuDshDopRLlhytwZ-NxKrlz2whNQ~lAywYBO3w6y6Yk8GVKQCVASndqxARBbOFnabJck81tx~WNzuuoCYVVdNecZtHx49Nn9eQD82JPvyVgemYvvWQ__" alt="img not found" />
                <h2>Pocket Notes</h2>
                {selectedNote ? (
                    <p>You selected: {selectedNote}</p>
                ) : (
                    <p>Send and receive messages without keeping your phone online.<br />
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                )}
            </div>
        </main>
    );
};

export default MainContent;
