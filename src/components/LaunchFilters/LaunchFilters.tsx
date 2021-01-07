import React, { useEffect } from 'react';
import { ButtonGroup, Card, Col, Container, Row, ToggleButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, toggleSuccessfulLandingAction, toggleSuccessfulLaunchAction } from '../../store';
import { YearFilter } from '../YearFilter/YearFilter';
import { Redirect, useLocation } from 'react-router-dom';
import './LaunchFilters.scss';

const LaunchFilters: React.FC = () => {
  const { selectedYear, successfulLaunch, successfulLanding } = useSelector((state: AppState) => state.filters);
  let searchString = buildSearchString();
  const dispatch = useDispatch();
  const location = useLocation();
  const toggleLaunch = () => dispatch(toggleSuccessfulLaunchAction())
  const toggleLanding = () => dispatch(toggleSuccessfulLandingAction())


  useEffect(() => {
    searchString = buildSearchString();
  }, [selectedYear, successfulLanding, successfulLaunch]);

  function buildSearchString(): string {
    const queryParams = new URLSearchParams();
    selectedYear && queryParams.append('launch_year', selectedYear.toString());
    successfulLaunch && queryParams.append('launch_success', successfulLaunch.toString());
    successfulLanding && queryParams.append('land_success', successfulLanding.toString());
    return queryParams.toString();
  }

  return (
    <>
    <Card className="LaunchFilters" data-testid="LaunchFilters">
      <Container fluid >
        <Row><Col><Card.Title className="FiltersLabel">Filters</Card.Title></Col></Row>
        <Row><Col className="label">Launch Year</Col></Row>
        <Row><Col><YearFilter></YearFilter></Col></Row>
        <Row><Col className="label">Launch</Col></Row>
        <Row><Col className="BtnGroupContainer">
          <ButtonGroup toggle className="mb-2">
            <ToggleButton
              className="successBtn"
              type="checkbox"
              value='successfulLaunch'
              checked={successfulLaunch}
              onChange={() => toggleLaunch()}
              variant={successfulLaunch ? 'primary' : 'outline-primary'}
            >{'Successful'}</ToggleButton></ButtonGroup>
        </Col></Row>
        <Row><Col className="label">Landing</Col></Row>
        <Row><Col className="BtnGroupContainer">
          <ButtonGroup toggle className="mb-2">
            <ToggleButton
              className="successBtn"
              type="checkbox"
              value='successfulLanding'
              checked={successfulLanding}
              onChange={() => toggleLanding()}
              variant={successfulLanding ? 'primary' : 'outline-primary'}
            >{'Successful'}</ToggleButton></ButtonGroup>
        </Col></Row>
      </Container>
    </Card>
    <Redirect push={true} to={{...location, search: searchString}}/>
    </>
  );
}

export default LaunchFilters;
