// import { connect } from 'react-redux';
// import { connect } from 'seedux';
import { connect } from './../../../seedux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

// returns obj with keys representing propNames and values representing parts of state to be passed
// state's highest-level keys correspond with key names of reducers object passed into combineReducers function

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

// returns obj with keys representing propNames and values that are actionCreators wrapped with dispatch

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
