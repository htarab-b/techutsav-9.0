import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<HomePage />} />,
    <Route path="/events" element={<EventsPage />} />
  ])
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
