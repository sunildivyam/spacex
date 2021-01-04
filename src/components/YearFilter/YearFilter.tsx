import React, { useEffect } from 'react';
import { ButtonGroup, Col, Container, Row, ToggleButton } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { AppState, toggleYearAction } from '../../store';
import './YearFilter.scss';

export const YearFilter: React.FC = () => {
  const filters = useSelector((state: AppState) => state.filters);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const selectYear = (year: number) => {
    dispatch(toggleYearAction(year))
  }

  useEffect(() => {
    updateQueryParams();
  }, [filters.selectedYear, filters.successfulLanding, filters.successfulLaunch]);

  const updateQueryParams = () => {
    const pathName = location.pathname;
    const queryParams = new URLSearchParams();
    filters.selectedYear && queryParams.append('launch_year', filters.selectedYear.toString());
    filters.successfulLaunch && queryParams.append('launch_success', filters.successfulLaunch.toString());
    filters.successfulLanding && queryParams.append('landing_success', filters.successfulLanding.toString());
    history.push(`${pathName}?${queryParams.toString()}`)
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
              onChange={(e) => selectYear(year)}
              variant={filters.selectedYear === year ? 'primary' : 'outline-primary'}
            >{year}</ToggleButton></ButtonGroup>
        </Col>)}
      </Row>
    </Container>
  );
}
