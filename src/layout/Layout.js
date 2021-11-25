import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import RandomPlanet from '../components/random-planet/RandomPlanet';

function Layout() {
  return (
    <>
      <Header />
      <RandomPlanet />
      <Outlet />
    </>
  );
}

export default Layout;
