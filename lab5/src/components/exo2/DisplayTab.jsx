// DisplayTab.jsx
import React, { useState } from 'react';

const DisplayTab = ({ tab }) => {
  const [displayedTab, setDisplayedTab] = useState(tab);
  const [newElement, setNewElement] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleRemove = (index) => {
    const newTab = [...displayedTab];
    newTab.splice(index, 1);
    setDisplayedTab(newTab);
  };

  const handleAdd = () => {
    if (newElement.trim() !== '') {
      setDisplayedTab([...displayedTab, newElement]);
      setNewElement('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewElement(displayedTab[index]);
  };

  const handleUpdate = () => {
    if (newElement.trim() !== '') {
      const newTab = [...displayedTab];
      newTab[editIndex] = newElement;
      setDisplayedTab(newTab);
      setEditIndex(null);
      setNewElement('');
    }
  };

  return (
    <div>
      <ul>
        {displayedTab.map((element, index) => (
          <li key={index}>
            {`Element ${index + 1} is: ${element}`}
            <button onClick={() => handleRemove(index)}>Remove</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newElement}
          onChange={(e) => setNewElement(e.target.value)}
        />
        {editIndex !== null ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>
    </div>
  );
};

export default DisplayTab;
