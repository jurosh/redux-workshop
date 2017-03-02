import React from 'react';
import HumanContainer from './HumanContainer';

function HumansListing ({ humansIds, editable, showActionButtons, onSetSameSizeClick, onAddNewClick }) {
  return (<div>
    {showActionButtons ? (<div>
          <button className="HumanListing-button" onClick={onSetSameSizeClick}>
            Reset all to same size
          </button>
          <button className="HumanListing-button" onClick={onAddNewClick}>
            Add new human
          </button>
        </div>)
      : ''
    }
    <br />
    {humansIds.length === 0 && 'No humans to display.'}
    {humansIds.map(humanId => <HumanContainer key={humanId} id={humanId} editable={editable} />)}
  </div>);
}

export default HumansListing;
