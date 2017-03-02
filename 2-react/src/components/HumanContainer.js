import { connect } from 'react-redux'
import Human from './Human';
import {setPurpleBorder} from '../actions/human';

const mapStateToProps = (state, ownProps) => {
  
  // TODO: get human from state
  const human = {};

  return {
    photo: human.photo,
    borderColor: 'gray',
    size: 20
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onImageClick () {
    dispatch(setPurpleBorder(ownProps.id));
  },
  onPlusClick () {
    // TODO: bigger action
  },
  onMinusClick () {
    // TODO: smaller action
  }
});

const HumanContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Human)

export default HumanContainer