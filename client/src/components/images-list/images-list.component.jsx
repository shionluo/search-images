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
              Authorization:
                'Client-ID a2ee7b87e675b3fe46fe4e74a986a95d3be01046ef71fdc892a258ac706b050d',
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
