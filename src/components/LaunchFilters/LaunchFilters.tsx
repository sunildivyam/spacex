import React from 'react';
import { ButtonGroup, Card, Col, Container, Row, ToggleButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, toggleSuccessfulLandingAction, toggleSuccessfulLaunchAction } from '../../store';
import { YearFilter } from '../YearFilter/YearFilter';
import './LaunchFilters.scss';

const LaunchFilters: React.FC = () => {
  const { successfulLaunch, successfulLanding } = useSelector((state: AppState) => state.filters);
  const dispatch = useDispatch();

  const toggleLaunch = () => dispatch(toggleSuccessfulLaunchAction())
  const toggleLanding = () => dispatch(toggleSuccessfulLandingAction())

  return (
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
  );
}

export default LaunchFilters;
