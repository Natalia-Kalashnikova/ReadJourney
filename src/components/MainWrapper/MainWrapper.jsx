import css from './MainWrapper.module.css';

const MainWrapper = ({children }) => {
    return (
        <div className={css.mainWrapper}>{children}</div>
    );
};

export default MainWrapper;