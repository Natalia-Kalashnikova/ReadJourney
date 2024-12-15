import Container from '../Container/Container.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Books from '../Books/Books.jsx';

const MyLibrary = () => {
    return (
        <Container>
            <Dashboard />
            <Books />
        </Container>
    );
};

export default MyLibrary;