import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { createPageUrl } from '@/utils';
import Home from '../Pages/Home.jsx';
import States from '../Pages/States.jsx';
import History from '../Pages/History.jsx';
import Food from '../Pages/Food.jsx';
import Stories from '../Pages/Stories.jsx';
import Festivals from '../Pages/Festivals.jsx';
import Quizzes from '../Pages/Quizzes.jsx';
import Instagram from '../Pages/Instagram.jsx';
import AboutUs from '../Pages/AboutUs.jsx';
import ExecutiveBoard from '../Pages/ExecutiveBoard.jsx';
import LightTheLegacy from '../Pages/LightTheLegacy.jsx';
import ShareYourDiwali from '../Pages/ShareYourDiwali.jsx';
import IndiaMap from '../Pages/IndiaMap.jsx';
import StateRajasthan from '../Pages/State-rajasthan.jsx';

const withLayout = (Component, pageName) => ({
  path: createPageUrl(pageName),
  element: (
    <Layout currentPageName={pageName}>
      <Component />
    </Layout>
  )
});

export const router = createBrowserRouter([
  withLayout(Home, 'Home'),
  withLayout(States, 'States'),
  withLayout(History, 'History'),
  withLayout(Food, 'Food'),
  withLayout(Stories, 'Stories'),
  withLayout(Festivals, 'Festivals'),
  withLayout(Quizzes, 'Quizzes'),
  withLayout(Instagram, 'Instagram'),
  withLayout(AboutUs, 'AboutUs'),
  withLayout(ExecutiveBoard, 'ExecutiveBoard'),
  withLayout(LightTheLegacy, 'LightTheLegacy'),
  withLayout(ShareYourDiwali, 'ShareYourDiwali'),
  withLayout(IndiaMap, 'IndiaMap'),
  withLayout(StateRajasthan, 'State-rajasthan'),
  {
    path: '*',
    element: (
      <Layout currentPageName="NotFound">
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#4E342E]">Page not found</h1>
            <p className="text-lg text-[#4E342E]/80">The page you are looking for does not exist.</p>
            <a className="text-[#B8941F] font-semibold underline" href={createPageUrl('Home')}>
              Go home
            </a>
          </div>
        </div>
      </Layout>
    )
  }
]);
