import Avatar from '../../../assets/images/chat/avatar.png';
import Avatar2 from '../../../assets/images/chat/avatar2.png';
import Image from '../../../assets/images/chat/image.png';

export const messages = [
  {
    id: 0,
    avatar: Avatar.src,
    description: 'V42',
    stars: 3,
    name: 'Nikolay',
    time: '09:30',
    color: 'purple',
    messages: [
      {
        id: 0,
        text: 'Any big winner? Congratulations to the winners and good luck to the ones trying to win',
      },
      {
        id: 1,
        text: '<span className={styles.user}>@Losing125</span> have a good one ,)',
      },
    ],
  },
  {
    id: 1,
    avatar: Avatar2.src,
    description: 'V12',
    stars: 5,
    name: 'Raja2222',
    time: '09:25',
    color: 'yellow',
    messages: [
      {
        id: 0,
        text: 'Any big winner? Congratulations to the winners and good luck to the ones trying to win',
      },
      {
        id: 0,
        text: '<span className={styles.user}>@Losing125</span> have a good one ,)',
      },
    ],
  },
  {
    id: 2,
    avatar: Avatar.src,
    description: 'V42',
    stars: 3,
    name: 'Nikolay',
    time: '09:30',
    color: 'red',
    messages: [
      {
        id: 0,
        gif: Image.src,
      },
    ],
  },
];
