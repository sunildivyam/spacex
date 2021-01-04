import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
    <Container fluid className="LaunchList" data-testid="LaunchList" as="section">
      <Row as="div">
        {launchesList ? launchesList.map((l: ILaunch) => <Col sm="12" md="4" lg="3" as="div" key={l.id}><LaunchCard launch={l}></LaunchCard></Col>) : null}
        {launchesList && !launchesList.length && !error && !loading? <Card className="NotFound">
          <Card.Title>
            No Records found for the selected filters. Please try other filters or try removing filters.
          </Card.Title>
          </Card> : null}
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
