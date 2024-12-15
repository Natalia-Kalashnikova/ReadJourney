import css from '../Button/Button.module.css';

const Button = ({ className, label, onClick, prop }) => {
    const buttonClass = `${css.button} ${prop === 'true' ? css.buttonLarge : ''} ${css.buttonHover} ${className || ''}`;
    return (
        <button className={buttonClass}
            onClick={onClick}
            type="submit">
            {label}
        </button>
    );
}

export default Button;