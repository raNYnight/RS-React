import Spinner from '../../spinner/spinner';
import { Component, ReactNode } from 'react';
import CharacterService, { Character } from '../../../services/characters';
import ErrorMessage from '../erorr/error';

import './char-list.css';

interface CharListState {
  charList: Character[];
  loading: boolean;
  error: boolean;
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

  render(): ReactNode {
    const { charList, loading, error } = this.state;

    const characters = charList.map((item) => {
      return (
        <li
          className="char-item"
          key={item.id}
          //   onClick={() => this.props.onCharSelected(item.id)}
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
      </div>
    );
  }
}

export default CharList;
