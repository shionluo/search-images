// Import
import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import - Selectors
import { selectImagesToggle } from 'redux/images/images.selectors';

// Import - Components
import SearchBar from 'components/search-bar/search-bar.component';
import ErrorBoundary from 'components/error-boundary/error-boundary.component';
import Spinner from 'components/spinner/spinner.component';

// Import - Styles
import { HomeContainer } from './home.styles';

// ----------------------------------------------------------------------------------------- //

// Lazy loading
const ImageList = lazy(() =>
  import('components/images-list/images-list.component'),
);

const Home = ({ imagesToggle }) => (
  <HomeContainer>
    <SearchBar />

    {imagesToggle === 'on' ? (
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <ImageList />
        </Suspense>
      </ErrorBoundary>
    ) : null}
  </HomeContainer>
);

const mapStateToProps = createStructuredSelector({
  imagesToggle: selectImagesToggle,
});

export default connect(mapStateToProps)(Home);
