import Container from '../Container/Container.jsx';
import Books from '../Books/Books.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';

const MyLibrary = () => {
  return (
    <Container>
      <Dashboard />
      <Books />
    </Container>
  );
};

export default MyLibrary;
