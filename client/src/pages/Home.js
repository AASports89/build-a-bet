import React from 'react';
import { useQuery } from '@apollo/client';

import GameList from '../components/GameList';
// import ParlayList from '../components/ParlayList';

import { QUERY_PARLAYS } from '../utils/queries';

var date = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.write(date);

const Home = () => {
  const { loading, data } = useQuery(QUERY_PARLAYS);
  const parlays = data?.parlays || [];

  return (
    <main> 
      <div className="flex-row justify-center">
      <h5 id="list-title">
                  Scheduled 🏈 Games: {date} 📋
                </h5>
          <GameList />
        </div>
      {/* <div className="flex-row justify-center">
        {loading ? (
          <div>Loading...💸...</div>
          ) : (
        <ParlayList 
        parlays={parlays}
        title="Winner...Winner 💰...Chicken...Dinner 🐔"
        />
        )}
        </div> */}
    </main>
  );
};

export default Home;