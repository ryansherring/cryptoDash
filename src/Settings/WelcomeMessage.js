import React from 'react'
import {AppContext} from '../App/AppProvider';

export default function Welcome ({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) =>
        firstVisit ? <div>
          Welcome to CryptoDash, please select your settings to begin
        </div> : null
      }
    </AppContext.Consumer>
  );
};