import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import css from './StartWorkout.module.css';

const StartWorkout=()=> {
  return (
      <div className={css.container}>
          <p className={css.startWorkoutTitle}>Start your workout</p>
          <div className={css.argumentsBlock}>
              <div className={css.stepContainer}>
                  <div className={css.stepNumber}>1</div>
                  <p className={css.stepDescription}>
            Create a personal library:{' '}
                      <span className={css.descriptionSpan}>
              add the books you intend to read to it.
            </span>
          </p>
        </div>
              <div className={css.stepContainer}>
                  <div className={css.stepNumber}>2</div>
                  <p className={css.textTwo}>
            Create your first workout:{' '}
                      <span className={css.descriptionSpan}>
              define a goal, choose a period, start training.
            </span>
          </p>
        </div>
      </div>
      <NavLink className={css.linkTo} to="/library">
              <p className={css.libraryText}>My library </p>
              <svg className={css.arrowSvg}>
          <use href={`${sprite}#icon-arrow-right`} />
        </svg>
      </NavLink>
    </div>
  );
}

export default StartWorkout;