import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="Home">
    <h1>Contents</h1>
    <ul>
      <li>
        <Link to="/create-element" className="link">React.createElement(...)</Link>
      </li>
    </ul>
  </div>
);

export default Home;
