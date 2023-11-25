
// 1.Créer un composant avec un bouton et un paragraphe :
// j ai commenter la premiere etape pour faire la deuxieme:




// import React, { useState } from 'react';

// const ClickButton = () => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>ClickMe</button>
//       <p>{clicked ? 'Clicked' : ''}</p>
//     </div>
//   );
// };

// export default ClickButton;






// 2.Convertir le bouton en bouton bascule :
// Modifiez le fichier ClickButton.js pour mettre à jour le comportement du bouton comme suit:
// ... (commenter le code précédent)!!!!!!!!!

// ClickButton.js
import React, { useState } from 'react';

const ClickButton = ({ onClick }) => {
  // État local pour suivre le nombre de clics
  const [clickCount, setClickCount] = useState(0);
  // État local pour la couleur du bouton
  const [buttonColor, setButtonColor] = useState('lightblue');

  // Fonction appelée lorsqu'on clique sur le bouton
  const handleClick = () => {
    // Incrémente le compteur de clics
    setClickCount(clickCount + 1);
    // Change la couleur du bouton à chaque clic
    setButtonColor(clickCount % 2 === 0 ? 'lightblue' : 'lightgreen');
    // Appelle la fonction fournie en prop (si elle existe)
    onClick && onClick();
  };

  // Fonction pour réinitialiser le compteur de clics et la couleur du bouton
  const handleReset = () => {
    setClickCount(0);
    setButtonColor('lightblue');
  };

  // Style dynamique du bouton en fonction de la couleur actuelle
  const buttonStyle = {
    backgroundColor: buttonColor,
  };

  return (
    <div>
      {/* Bouton avec gestion des clics et style dynamique */}
      <button onClick={handleClick} style={buttonStyle}>
        {clickCount % 2 === 0 ? 'Cliqué' : 'Non cliqué'}
      </button>
      {/* Affichage du nombre de clics */}
      <p>Nombre de clics : {clickCount}</p>
      {/* Bouton de réinitialisation */}
      <button onClick={handleReset}>Réinitialiser</button>
    </div>
  );
};

export default ClickButton;
