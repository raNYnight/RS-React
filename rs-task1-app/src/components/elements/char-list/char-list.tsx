import Spinner from '../../spinner/spinner';
import { Component, ReactNode } from 'react';
import CharacterService, { Character } from '../../../services/characters';
import ErrorMessage from '../erorr/error';
import CharModal from '../char-modal/char-modal';
import './char-list.css';

interface CharListState {
  charList: Character[];
  loading: boolean;
  error: boolean;
  isModalOpen: boolean;
  selectedChar: Character | null;
}
interface CharListProps {
  searchValue: string;
}

class CharList extends Component<CharListProps, CharListState> {
  constructor(props: CharListProps) {
    super(props);
    this.state = {
      charList: [],
      loading: true,
      error: false,
      isModalOpen: false,
      selectedChar: null,
    };
  }

  characterService = new CharacterService();

  componentDidMount(): void {
    this.characterService
      .searchCharacters(this.props.searchValue)
      .then(this.onCharsLoaded)
      .catch(this.onError);
  }

  componentDidUpdate(prevProps: CharListProps): void {
    if (this.props.searchValue !== prevProps.searchValue) {
      this.setState({
        error: false,
        loading: true,
      });
      this.characterService
        .searchCharacters(this.props.searchValue)
        .then(this.onCharsLoaded)
        .catch(this.onError);
    }
  }

  onCharsLoaded = (chars: Character[]) => {
    this.setState({
      charList: chars,
      loading: false,
    });
    window.localStorage.setItem('searched-chars', JSON.stringify(chars));
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
    window.localStorage.setItem('searched-chars', '');
  };

  handleCharClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    console.log('select');
    const charId = parseInt(event.currentTarget.getAttribute('data-id') || '0');
    const selectedChar = this.state.charList.find((char) => char.id === charId);
    this.setState({
      isModalOpen: true,
      selectedChar: selectedChar!,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
      selectedChar: null,
    });
  };

  render(): ReactNode {
    const { charList, loading, error } = this.state;

    const characters = charList.map((item) => {
      return (
        <li
          className="char-item"
          key={item.id}
          onClick={this.handleCharClick}
          data-id={item.id}
        >
          <div className="char-name">{item.name}</div>
          <img
            src={item.image}
            alt={item.name}
            className="char-img"
          />
        </li>
      );
    });
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? characters : null;

    return (
      <div className="char-list">
        {errorMessage}
        {spinner}
        {content}
        {this.state.selectedChar && (
          <CharModal
            character={this.state.selectedChar}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default CharList;
