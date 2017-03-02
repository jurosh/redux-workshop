import { connect } from 'react-redux'
import HumansListing from './HumansListing';

const mapStateToProps = (state) => {
  return {
    humansIds: state.listing,
    showActionButtons: true
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetSameSizeClick () {
    // TODO: fire "reset to same size" action
  },
  onAddNewClick () {
    const newHuman = {
      id: new Date().getTime(),
      border: 'silver',
      photo: './images/human4.png',
      size: 20
    };
    // TODO: fire new human action
    console.log(newHuman);
  }
});

const HumansListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HumansListing)

export default HumansListingContainer