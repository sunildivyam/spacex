import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ILaunch } from '../../models';
import { LaunchCard } from '../';
import './LaunchList.scss';

interface IProps {
  launches: Array<ILaunch>;
}

export const LaunchList: React.FC<IProps> = ({ launches }: IProps) => (
  <Container fluid className="LaunchesList" data-testid="LaunchesList" as="section">
    <Row as="div">
      {launches ? launches.map(l => <Col xs="12" sm="6" lg="3" as="div" key={l.id}><LaunchCard launch={l}></LaunchCard></Col>) : null}
    </Row>
  </Container>
);
