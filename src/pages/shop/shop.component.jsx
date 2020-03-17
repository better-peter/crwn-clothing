import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from '../../redux/shop/shop.actions';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscripeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    // OPTION 1: Firebase REST and native fetch
    // but this a way too deep nested to use in here
    // better location might be some other database...
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/c-shop-db/databases/(default)/documents/collections'
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));

    // OPTION 2: Using this promise pattern we get data only when component
    // mounting, no refresh that is offered with firestore snaphot below
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    // OPTION 3: This one is original that uses firebase functionality...
    // this.unsubscripeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   //console.log(snapshot);
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   // console.log('(collectionsMap)');
    //   // console.log(collectionsMap);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
