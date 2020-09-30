import React, {Component} from 'react';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import './App.css';
import {AppProvider} from './AppProvider'
import Settings from '../Settings/index'
import Content from '../Shared/Content'
// import Page from '../Shared/Page'

class App extends Component {
  render() {
    return (
      // <Page>
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
          </Content>
        </AppProvider>
      </AppLayout>
      // </Page>
    );
  }
}

export default App;
