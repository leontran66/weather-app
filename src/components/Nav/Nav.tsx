import React from 'react';
import { v4 as uuid } from 'uuid';
import nav from '../../config/nav.json';
import './Nav.scss';

const Nav = () => (
  <div className='nav'>
    <ul>
      {nav.map((link) => <a key={uuid()} href={link.url}><li>{link.name}</li></a>)}
    </ul>
  </div>
);
export default Nav;
