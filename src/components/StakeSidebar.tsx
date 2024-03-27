import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/StakeSidebar.scss';

const StakeSidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'link')}>Overview</NavLink>
      <NavLink to="/my-assets" className={({ isActive }) => (isActive ? 'active' : 'link')}>My Assets</NavLink>
      <NavLink to="/quests" className={({ isActive }) => (isActive ? 'active' : 'link')}>Quests</NavLink>
    </div>
  );
};

export default StakeSidebar;
