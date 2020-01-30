import React from 'react'
import PropTypes from 'prop-types'
import ConditionImage from '../condition-image/ConditionImage'
import './Condition.scss'

function Condition ({ condition: { image, label, snippet } }) {
  const excerpt = (snippet || '').slice(0, 40);
  return (
    <div className="Condition">
      <ConditionImage src={image} label={label} />
      <div className="title">{label}</div>
      <div className="excerpt">
        {snippet && <span className="text">{excerpt}{excerpt.length < (snippet || '').length && '…'}</span>}
        <span className="more"><span className="hl">find out more</span>.</span>
      </div>
    </div>
  )
}

Condition.propTypes = {
  condition: PropTypes.shape({
    image: PropTypes.string,
    label: PropTypes.string,
  })
};

export default Condition
