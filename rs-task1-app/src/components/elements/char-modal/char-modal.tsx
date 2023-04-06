import { FC } from 'react';
import { Character } from '../../../services/characters';
import './char-modal.css';

interface CharModalProps {
  character: Character;
  onClose: () => void;
}

const CharModal: FC<CharModalProps> = ({ character, onClose }) => {
  return (
    <div
      className="char-modal-overlay"
      onClick={onClose}
    >
      <div
        className="char-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="char-modal-header">
          <h3>{character.name}</h3>
          <button
            className="char-modal-close"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="char-modal-body">
          <img
            src={character.image}
            alt={character.name}
          />
          <div className="char-modal-details">
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Type: {character.type}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
            <p>Episodes: {character.episode.length}</p>
            <p>Created: {character.created}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharModal;
