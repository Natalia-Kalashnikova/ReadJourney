import { FallingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader=()=> {
  return (
    <LoaderContainer>
      <FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
    </LoaderContainer>
  );
}

export default Loader;
