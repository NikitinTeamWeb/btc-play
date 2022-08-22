import Races from '../Races/Races';
import AllBets from '../AllBets/AllBets';

export const resultsCategory = [
  {
    id: 0,
    title: 'My Bets',
    component: <AllBets />,
    category: 'myBets',
  },
  {
    id: 1,
    title: 'All Bets',
    component: <AllBets />,
    category: 'allBets',
  },
];
