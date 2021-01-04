import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { ILaunch } from '../../models';
import './LaunchCard.scss';

interface IProps {
  launch: ILaunch;
}

export const LaunchCard: React.FC<IProps> = ({ launch }: IProps) => (
  <Card className="LaunchCard" data-testid="LaunchCard">
    <Card.Img variant="top" src={launch.thumbnailImage} />
    <Card.Body>
      <Card.Title className="text-primary">{launch.name}#{launch.flightNumber}</Card.Title>
      <Table className="LaunchInfo">
        <tbody>
          <tr>
            <td colSpan={launch.missionIds && launch.missionIds.length ? 2 : 0}>
              <span className="InfoHeader">MissionIds</span>
              <ul>{launch.missionIds ? launch.missionIds.map(m => <li key={m}>{m}</li>) : null}</ul>
            </td>
            {!launch.missionIds || !launch.missionIds.length ? <td>NA</td> : null}
          </tr>
          <tr>
            <td><span className="InfoHeader">Launch Year</span></td>
            <td>{launch.launchYear}</td>
          </tr>
          <tr>
            <td><span className="InfoHeader">Successful Launch</span></td>
            <td>{launch.successfulLaunch ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td><span className="InfoHeader">Successful Landing</span></td>
            <td>{launch.successfulLanding ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </Table>
    </Card.Body>
  </Card>
);
