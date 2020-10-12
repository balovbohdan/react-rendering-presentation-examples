import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="Home">
    <h1>Contents</h1>
    <ul>
      <li>
        <Link to="/create-element" className="link">React.createElement(...)</Link>
      </li>
      <li>
        <Link to="/standard-render-behavior" className="link">Standard Render Behavior</Link>
      </li>
    </ul>
  </div>
);

export default Home;
