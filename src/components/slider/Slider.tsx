import { useCallback, useEffect, useState } from 'react';
import { IProjectImage } from '../../interfaces/Iproject';
import './style.css';

interface SliderProps {
  sliderList: IProjectImage[];
}

const Slider: React.FC<SliderProps> = ({sliderList}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isPageMany: boolean = sliderList.length > 1;
  let dots: JSX.Element[] = [];

  const switchSlider = useCallback((action: boolean) => {
    setCurrentIndex(prevIndex => (
      action
        ? (prevIndex + 1 === sliderList.length ? 0 : prevIndex + 1)
        : (prevIndex === 0 ? sliderList.length - 1 : prevIndex - 1)
    ));
  }, [sliderList]);
  
  useEffect(() => {
    if (isPageMany) {
      const clickhandler = (event: KeyboardEvent) => {
        event.key === 'ArrowLeft' && switchSlider(false)
        event.key === 'ArrowRight' && switchSlider(true);
      }

      window.addEventListener('keyup', clickhandler);
      return () => window.removeEventListener('keyup', clickhandler);
    }
  }, [switchSlider, isPageMany])

  if (isPageMany) {
    dots = sliderList.map((_, i) => {
      return (
        <span
          key={i}
          className={i === currentIndex ? 'dot active' : 'dot'}
          onClick={() => setCurrentIndex(i)}
        />
      )
    })
  }

  return ( 
    <div className="slider">
      <div className="gallerey-library">
        {isPageMany &&
          <button onClick={() => switchSlider(false)} className="gallerey-library_btn btn-prev">
          &lt;
        </button>}
        <div className="gallerey-library-photos">
          <img
            className={['gallerey-library-photos_item', isPageMany ? 'interactive-item' : ''].join(' ')}
            loading="lazy"
            src={sliderList[currentIndex].img}
            alt="example of the work"
            onClick={() => switchSlider(true)}
          />
        </div>
        {isPageMany &&
          <button onClick={() => switchSlider(true)} className="gallerey-library_btn btn-next">
          &gt;
        </button>}
      </div>
      {sliderList[currentIndex].disc && <p className='gallerey-library_disc'>{sliderList[currentIndex].disc}</p>}
      {isPageMany &&
        <div className="dot-container">
          {dots}
      </div>}
    </div>
  )
}
 
export default Slider;