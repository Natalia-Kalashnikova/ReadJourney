import desktopImg from '../../images/desctop-iPhone-Black@1x.png';
import desktopImg2x from '../../images/desctop-iPhone-Black@2x.png';
import mobileImg from '../../images/mobil-iPhone-Black@1x.png';
import mobileImg2x from '../../images/mobil-iPhone-Black@2x.png';
import css from './AuthImage.module.css';

export default function AuthorizationImage() {
  return (
    <div className={css.imgWrapper}>
      <picture>
        <source
          srcSet={`${mobileImg} 1x, ${mobileImg2x} 2x`}
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${desktopImg} 1x, ${desktopImg2x} 2x`}
          media="(min-width: 1440px)"
        />
        <img className={css.authImage} src={desktopImg} alt="register img" />
      </picture>
    </div>
  );
}