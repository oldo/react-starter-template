import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const match = useRouteMatch();
  console.log(match);
  
  return <div>WOOT!!</div>;
};

export default Home;
