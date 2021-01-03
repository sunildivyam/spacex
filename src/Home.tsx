import React, { useEffect } from 'react';
import logo from './react.svg';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getLaunchesAndDispatch } from './services';
import { AppState } from './store';
import { ILaunch } from './models';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLaunchesAndDispatch());
  }, [dispatch]);

  const launchesState = useSelector((state: AppState) => state.launches);
  
  const launchItems = launchesState.launches.map((launch: ILaunch) => (
    <div key={launch.id}>
      <h1>Hello: {launch.name}#{launch.flightNumber}</h1>
      <p>{launch.launchYear}</p>
    </div>
  ));

  return (
    <div className="Home">
        <Helmet>
          <title>Welcome to Razzle Boilerplate</title>
          <meta name='description' content='Web site created using create-razzle-app'/>
        </Helmet>
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzles</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.tsx</code> or{' '}
          <code>src/Home.tsx</code> and save to reload.
        </p>
        <Button>Test Button <FontAwesomeIcon icon={faUser}/></Button>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>

        <div>{launchItems}</div>
      </div>
  );
}
