import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, NotFoundPage } from '../pages';

export default class App extends React.Component {
  public render() {
    return (
      <>
        <Switch>
          <Route exact={true} path="/" component={HomePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </>
    );
  }
}
