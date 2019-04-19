import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

export default class Root extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
  }
}
