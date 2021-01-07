import React from 'react';
import { ButtonGroup, Col, Container, Row, ToggleButton } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, toggleYearAction } from '../../store';
import './YearFilter.scss';

export const YearFilter: React.FC = () => {
  const filters = useSelector((state: AppState) => state.filters);
  const dispatch = useDispatch();

  const selectYear = (year: number) => {
    dispatch(toggleYearAction(year))
  }

  return (
    <Container fluid className="YearFilter" as="section">
      <Row>
        {filters.years.map(year => <Col xs="6" as="section" key={year} className="YearButtonSection">
          <ButtonGroup toggle className="mb-2">
            <ToggleButton
              className="YearButton"
              key={year}
              type="checkbox"
              value={year}
              checked={filters.selectedYear === year}
              onChange={() => selectYear(year)}
              variant={filters.selectedYear === year ? 'primary' : 'outline-primary'}
            >{year}</ToggleButton></ButtonGroup>
        </Col>)}
      </Row>
    </Container>
  );
}
