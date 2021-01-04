import React, { useEffect } from 'react';
import './LaunchesPage.scss';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLaunches } from '../../services';
import { AppState } from '../../store';
import { Col, Container, Row } from 'react-bootstrap';
import { LaunchList } from '../';
import LaunchFilters from '../LaunchFilters/LaunchFilters';

interface IParams {
  launchYears: string;
}

export const LaunchesPage: React.FC = () => {

  const searchParams = new URLSearchParams(useLocation().search);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLaunches());
  }, [dispatch]);

  const state = useSelector((state: AppState) => state.launches);

  return (
    <Container fluid className="LaunchesPage" data-testid="LaunchesPage" as="section">
      <Row as="section"><Col as="h1">SpaceX Launch Programs</Col></Row>
      <Row as="section">
        <Col sm="12" md="3" as="section"><LaunchFilters></LaunchFilters></Col>
        <Col sm="12" md="9" as="section"><LaunchList launches={state.launches}></LaunchList></Col>
      </Row>
    </Container>
  );
}
