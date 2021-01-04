import React, { useEffect } from 'react';
import './LaunchesPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getLaunches } from '../../services';
import { AppState } from '../../store';
import { Col, Container, Row } from 'react-bootstrap';
import { LaunchList } from '../';
import LaunchFilters from '../LaunchFilters/LaunchFilters';
import { useLocation } from 'react-router-dom';

interface IParams {
  launchYears: string;
}

export const LaunchesPage: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { filters } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(getLaunches(filters));
  }, [location.search]);

  return (
    <Container fluid className="LaunchesPage" data-testid="LaunchesPage" as="section">
      <Row as="section"><Col as="h1">SpaceX Launch Programs</Col></Row>
      <Row as="section">
        <Col sm="12" md="3" as="section"><LaunchFilters></LaunchFilters></Col>
        <Col sm="12" md="9" as="section">
          <LaunchList></LaunchList>
        </Col>
      </Row>
    </Container>
  );
}
