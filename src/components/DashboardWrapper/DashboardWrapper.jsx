import css from '../DashboardWrapper/DashboardWrapper.module.css';

const DashboardWrapper = ({ children }) => {
    return <div className={css.dbWrap}>{children}</div>;
};

export default DashboardWrapper;