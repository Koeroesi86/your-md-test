import React, { useState, Fragment } from 'react'
import './ConditionImage.scss'

function ConditionImage({ src, label }) {
  const [failedLoad, setFailedLoad] = useState(true);
  return (
    <Fragment>
      {typeof src === 'string' && (
        <img
          className={`image ${failedLoad ? 'hide' : 'show'}`}
          src={src}
          alt={label || ''}
          onError={() => setFailedLoad(true)}
          onLoad={() => setFailedLoad(false)}
        />
      )}
      {failedLoad && (
        <svg
          className={`image show`}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 228 220"
        >
          <defs>
            <path id="a" d="M0 0h228v220H0V0z"/>
            <clipPath id="b">
              <use xlinkHref="#a"/>
            </clipPath>
          </defs>
          <use fill="#D8D8D8" xlinkHref="#a"/>
          <g clipPath="url(#b)">
            <use fill="none" stroke="#979797" strokeWidth="2" xlinkHref="#a"/>
          </g>
        </svg>
      )}
    </Fragment>
  );
}

export default ConditionImage
