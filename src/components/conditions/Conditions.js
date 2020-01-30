import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Condition from '../condition/Condition'
import LoadingIndicator from '../loading-indicator/LoadingIndicator'
import './Conditions.scss'

export function Conditions({ isLoaded, listing }) {
  return (
    <div className="Conditions">
      <h1>Conditions</h1>
      <div className="listing">
        {!isLoaded && (
          <LoadingIndicator />
        )}
        {!!isLoaded && listing.map((condition, index) => (
          <Condition key={`condition-${index}`} condition={condition}/>
        ))}
      </div>
    </div>
  )
}

Conditions.defaultProps = {
  isLoaded: false,
  listing: [],
};

Conditions.propTypes = {
  isLoaded: PropTypes.bool,
  listing: PropTypes.arrayOf(PropTypes.shape()),
};

function mapStateToProps(state) {
  return {
    isLoaded: state.conditions.loaded,
    listing: state.conditions.listing,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conditions)
