import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import EventPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/register/:eventName" element={<Register />} />
      <Route path="/success/:eventName" element={<SuccessPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;