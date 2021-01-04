import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { LaunchesPage, AppHeader, AppFooter } from '../';
import { Container, Row, Col } from 'react-bootstrap';

import './App.scss';

export function App() {
  return (
      <Container fluid>
        <Row>
          <Col xs><AppHeader/></Col>
        </Row>
        <Row>
          <Col xs>
            <Switch>
              <Route exact path="/launches">
                <LaunchesPage />
              </Route>
              <Route path="*">
                <Redirect to="/launches" />
              </Route>
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col xs><AppFooter/></Col>
        </Row>
      </Container>
  );
}
