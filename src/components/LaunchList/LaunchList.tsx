import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ILaunch } from '../../models';
import { LaunchCard, Error } from '../';
import { Loader } from '../Loader/Loader';
import './LaunchList.scss';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';

export const LaunchList: React.FC = () => {
  const { launches, progress } = useSelector((state: AppState) => state);
  const { loading, error } = progress;
  const launchesList = launches.launches;

  return (
    <Container fluid className="LaunchesList" data-testid="LaunchesList" as="section">
      <Row as="div">
        {launchesList ? launchesList.map((l: ILaunch) => <Col xs="12" sm="6" lg="3" as="div" key={l.id}><LaunchCard launch={l}></LaunchCard></Col>) : null}
      </Row>
      <Row>
        <Col xs="12">
          <Loader loading={loading}></Loader>
        </Col>
        <Col xs="12">
          <Error error={error}></Error>
        </Col>
      </Row>
    </Container>
  );
}
