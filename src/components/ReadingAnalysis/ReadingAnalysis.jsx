import { useSelector } from 'react-redux';
import { selectInfoCurrentBook } from '../../redux/books/booksSelectors.js';
import {
  AnalysisContainer,
  AnalysisText,
  CircleContainer,
  CirclePercentage,
  PagesRead,
  Percentage,
  ProgressData,
  ProgressInfo,
  StyledCircle,
} from './ReadingAnalysis.styled.js';

const ReadingAnalysis=({ totalReadPages })=> {
  const InfoAboutBook = useSelector(selectInfoCurrentBook);

  const roundToTwoDecimalPlaces = () => {
    const percentage = Math.min(
      (Math.round(totalReadPages * 100) / InfoAboutBook.totalPages).toFixed(2),
      100
    );
    return percentage;
  };

  return (
    <>
      <AnalysisText>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </AnalysisText>
      <AnalysisContainer>
        <CircleContainer>
          <StyledCircle
            percent={roundToTwoDecimalPlaces() || 0}
            strokeWidth={9}
            strokeColor={'#30B94D'}
            trailWidth={9}
            trailColor={'#1F1F1F'}
          />
          <CirclePercentage>100 %</CirclePercentage>
        </CircleContainer>
        <ProgressInfo>
          <ProgressData />
          <div>
            <Percentage>{roundToTwoDecimalPlaces() || 0} %</Percentage>
            <PagesRead>{totalReadPages} pages read</PagesRead>
          </div>
        </ProgressInfo>
      </AnalysisContainer>
    </>
  );
}

export default ReadingAnalysis;
