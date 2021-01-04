import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.scss';

interface IProps {
  loading: boolean;
}

export const Loader: React.FC<IProps> = ({loading}: IProps) => (
  loading ? <div className="backdrop">
      <Spinner animation="border" variant="primary" role="status"></Spinner>
      <span className="sr-only">Loading...</span>
  </div> : null
);
