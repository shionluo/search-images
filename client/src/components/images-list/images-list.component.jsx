// Import
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import - Selectors
import {
  selectImagesList,
  selectImagesStatus,
} from 'redux/images/images.selectors';

// Import - Components
import Image from 'components/image/image.component';
import Spinner from 'components/spinner/spinner.component';

// Import - Styles
import { ImagesListContainer, ImagesNotFound } from './images-list.styles';

// ----------------------------------------------------------------------------------------- //

const ImageList = ({ images, responseStatus }) => {
  return images.length ? (
    <ImagesListContainer>
      {images.map(image => (
        <Image key={image.id} imageDetail={image} />
      ))}
    </ImagesListContainer>
  ) : responseStatus === true ? (
    <ImagesNotFound>Data Not Found</ImagesNotFound>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = createStructuredSelector({
  images: selectImagesList,
  responseStatus: selectImagesStatus,
});

export default connect(mapStateToProps, null)(ImageList);
