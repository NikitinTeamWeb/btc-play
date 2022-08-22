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
  {
    id: 2,
    title: 'High Rollers Bets',
    component: <AllBets />,
    category: 'highRollersBets',
  },
  {
    id: 3,
    title: 'Races',
    component: <Races />,
    category: 'races',
  },
];
