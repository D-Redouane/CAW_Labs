// DivForm.jsx
import React, { useState } from 'react';

const DivForm = () => {
  const [divList, setDivList] = useState([]);
  const [divStyle, setDivStyle] = useState({
    height: '100px',
    width: '100px',
    backgroundColor: 'lightblue',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const height = e.target.elements.height.value || '100px';
    const width = e.target.elements.width.value || '100px';
    const backgroundColor = e.target.elements.backgroundColor.value || 'lightblue';

    // Ajouter une nouvelle div à la liste avec le style spécifié
    setDivList((prevDivList) => [
      ...prevDivList,
      {
        id: new Date().getTime(),
        style: {
          height,
          width,
          backgroundColor,
        },
      },
    ]);

    // Réinitialiser le style du formulaire après soumission
    setDivStyle({
      height: '100px',
      width: '100px',
      backgroundColor: 'lightblue',
    });

    // Effacer les champs du formulaire
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Height:
          <input type="text" name="height" value={divStyle.height} onChange={(e) => setDivStyle({ ...divStyle, height: e.target.value })} />
        </label>
        <br></br>
        <label>
          Width:
          <input type="text" name="width" value={divStyle.width} onChange={(e) => setDivStyle({ ...divStyle, width: e.target.value })} />
        </label>
        <br></br>
        <label>
          Background Color:
          <input type="text" name="backgroundColor" value={divStyle.backgroundColor} onChange={(e) => setDivStyle({ ...divStyle, backgroundColor: e.target.value })} />
        </label>
        <br></br>
        <button type="submit">Add Div</button>
      </form>

      {/* Divs affichées avec les styles spécifiés */}
      {divList.map((div) => (
        <div key={div.id} style={div.style}></div>
      ))}
    </div>
  );
};

export default DivForm;
