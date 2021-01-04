import React, { useEffect } from 'react';
import './LaunchesPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getLaunches } from '../../services';
import { AppState } from '../../store';
import { Col, Container, Row } from 'react-bootstrap';
import { LaunchList } from '../';
import LaunchFilters from '../LaunchFilters/LaunchFilters';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const LaunchesPage: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { filters } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(getLaunches(filters));
  }, [location.search]);

  const {selectedYear, successfulLaunch, successfulLanding} = filters;

  const title = `
  ${successfulLaunch ? 'Successfully Launched': ''}
  ${successfulLanding ? 'and Landed': ''} 
  SpaceX Programs 
  ${selectedYear ? 'of ' + selectedYear : ''}`;
  return (
    <>
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={'SpaceX Programs Description'}/>
    </Helmet>
    <Container fluid className="LaunchesPage" data-testid="LaunchesPage" as="section">
      <Row as="section"><Col as="h1">SpaceX Launch Programs</Col></Row>
      <Row as="section">
        <Col xs="12" sm="6" md="3" as="section"><LaunchFilters></LaunchFilters></Col>
        <Col xs="12" sm="6" md="9" as="section">
          <LaunchList></LaunchList>
        </Col>
      </Row>
    </Container>
    </>
  );
}
