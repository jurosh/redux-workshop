import { connect } from 'react-redux'
import HumansListing from './HumansListing';

const mapStateToProps = (state) => {
  return {
    humansIds: state.sorted,
    showActionButtons: false
  }
}

const mapDispatchToProps = (dispatch) => ({
  // No actions needed
});


const HumansListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HumansListing)

export default HumansListingContainer