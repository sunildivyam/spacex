import React from 'react';
import { Card } from 'react-bootstrap';
import { IError } from '../../models';
import { IProgressAction } from '../../store';
import './Error.scss';

interface IProps {
  error: IError | null
}

export const Error: React.FC<IProps> = ({ error }: IProps) => {
  if (error) {
    return <Card>
      <Card.Header><Card.Title>Error</Card.Title></Card.Header>
      <Card.Body>
        <Card.Title>{error.statusCode}</Card.Title>
        <Card.Subtitle>{error.message}</Card.Subtitle>
      </Card.Body>
    </Card>
  }
  return null;
}
