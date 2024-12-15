import notFoundImgMobile2x from '../../images/mobil-default-image@2x.jpg';
import notFoundImgMobile from '../../images/mobil-default-image.jpg';
import notFoundImg2x from '../../images/desctop-default-image@2x.jpg';
import notFoundImg from '../../images/desctop-default-image.jpg';

const FallbackImage =({ children })=> {
  return (
    <picture>
      <source
        srcSet={`${notFoundImgMobile} 1x, ${notFoundImgMobile2x} 2x`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`${notFoundImg} 1x, ${notFoundImg2x} 2x`}
        media="(min-width: 768px)"
      />
      {children}
    </picture>
  );
}

export default FallbackImage;