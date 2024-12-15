import { useEffect, useRef } from 'react';
import sprite from '../../images/sprite.svg';
import css from './DropdownMenu.module.css';

const options = ['Unread', 'In progress', 'Done', 'All books'];

const DropdownMenu=({
  selectedBooks,
  handleSelectedBooks,
  isOpen,
  setIsOpen,
})=> {
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={css.dropdownContainer} onClick={toggleDropdown} ref={selectRef}>
      <svg className={css.chevronIcon} width={16} height={16}>
        <use href={`${sprite}#icon-chevron-${isOpen ? 'upp' : 'down'}`} />
      </svg>
      <button className={css.toggleButton}>{selectedBooks || 'All books'}</button>
      <ul className={`${css.optionList} ${isOpen ? css.open : ''}`}>
        {options.map(book => (
          <li
            key={book}
            className={css.optionItem}
            onClick={() => handleSelectedBooks(book)}
          >
            {book}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
