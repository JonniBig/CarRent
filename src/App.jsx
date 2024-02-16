import Home from 'pages/Home/Home';

import { HOME_ROUTE, CATALOGUE_ROUTE, FAVOURITE_ROUTE } from 'constants/routes';
import { Route, Routes } from 'react-router-dom';
import Catalogue from 'pages/Catalouge/Catalouge';
import Favourite from 'pages/Favourite/Favourite';
import { Layout } from 'components';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={CATALOGUE_ROUTE} element={<Catalogue />} />
        <Route path={FAVOURITE_ROUTE} element={<Favourite />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};
