import React from 'react';
import './confirmation.css';

interface ConfirmationProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-modal">
      <div className="confirmation-modal-content">
        <p className="confirmation-modal-message">{message}</p>
        <div className="confirmation-modal-buttons">
          <button
            className="confirmation-modal-button confirmation-modal-button-yes"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="confirmation-modal-button confirmation-modal-button-no"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
