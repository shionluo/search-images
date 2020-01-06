// Import
import React, { useState, useEffect, useRef } from 'react';

// Import - Styles
import { ImageContainer } from './image.styles';

// ----------------------------------------------------------------------------------------- //

const Image = ({ imageDetail: { urls, description } }) => {
  const imageRef = useRef();
  const [imageSpans, setImageSpans] = useState(0);

  useEffect(() => {
    const setSpans = () => {
      const { height } = imageRef.current;
      const spans = Math.ceil(height / 1) + 9;

      setImageSpans(spans);
    };

    imageRef.current.addEventListener('load', setSpans);
  }, [imageRef]);

  return (
    <ImageContainer style={{ gridRowEnd: `span ${imageSpans}` }}>
      <img ref={imageRef} src={urls.regular} alt={description} />
    </ImageContainer>
  );
};

export default React.memo(Image);
