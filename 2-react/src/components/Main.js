import React from 'react';
import HumanListingContainer from './HumansListingContainer';
import HumansSortedContainer from './HumansSortedContainer';

function Main () {
  return (<div>
    <h1>Editable listing</h1>
    <HumanListingContainer />

    <h1>Sorted listing (BONUS)</h1>
    <HumansSortedContainer />
  </div>);
}

export default Main;
