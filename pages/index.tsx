import React from 'react';
import { NextPage } from 'next';

import withLayout from '../layouts/with-layout';
import ColorListShowcase from '../components/color-list-showcase';

const Home: NextPage = _ => (
  <div>
    <ColorListShowcase />
  </div>
);

export default withLayout(Home);
