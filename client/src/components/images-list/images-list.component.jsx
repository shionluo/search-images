// Import
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';

// Import - Selectors
import { selectSearchInput } from 'redux/search/search.selectors';
import {
  selectImagesList,
  selectImagesStatus,
} from 'redux/images/images.selectors';

// Import - Actions
import {
  setImagesList,
  setImagesListStatus,
} from 'redux/images/images.actions';

// Import - Components
import Image from 'components/image/image.component';
import Spinner from 'components/spinner/spinner.component';

// Import - Styles
import { ImagesListContainer, ImagesNotFound } from './images-list.styles';

// ----------------------------------------------------------------------------------------- //

const ImageList = ({
  searchInput,
  images,
  status,
  setImagesList,
  setImagesListStatus,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/search/photos',
          {
            params: { query: searchInput },
            headers: {
              Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API}`,
            },
          },
        );
        setImagesList(response.data.results);
        setImagesListStatus(true);
      } catch {
        // eslint-disable-next-line no-console
        console.log('Error when fetching data !');
      }
    };

    fetchData();
  }, [searchInput, setImagesList, setImagesListStatus]);

  return images.length ? (
    <ImagesListContainer>
      {images.map(image => (
        <Image key={image.id} imageDetail={image} />
      ))}
    </ImagesListContainer>
  ) : status === true ? (
    <ImagesNotFound>Data Not Found</ImagesNotFound>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = createStructuredSelector({
  searchInput: selectSearchInput,
  images: selectImagesList,
  status: selectImagesStatus,
});

const mapDispatchToProps = dispatch => ({
  setImagesList: images => dispatch(setImagesList(images)),
  setImagesListStatus: status => dispatch(setImagesListStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
