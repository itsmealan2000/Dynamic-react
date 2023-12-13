// Modal.jsx
import React, { useState } from 'react';

const Modal = ({ showModal, onClose, onSave }) => {
  const [name, setName] = useState('');

  const handleSaveChanges = () => {
    onSave(name);
  };

  return (
    <>
      {showModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Hey There!!!</h1>
                <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <label htmlFor="nameInput" className="form-label">Your Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
