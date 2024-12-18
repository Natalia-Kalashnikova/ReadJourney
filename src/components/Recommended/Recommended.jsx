import BookCard from '../BookCard/BookCard.jsx';
import Container from '../Container/Container.jsx';
import MainWrapper from '../MainWrapper/MainWrapper.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import BookDetails from '../BookDetails/BookDetails.jsx';

const Recommended = () => {
    return (
        <Container>
        <MainWrapper>
                <div>
                    <h1>Recommended</h1>
                    <Pagination />
                </div>
                <ul>
                    <BookCard />
                </ul>
        </MainWrapper>

        <PortalModal>
                <BookDetails />
            </PortalModal>
        </Container> 
    );
}

export default Recommended;
    