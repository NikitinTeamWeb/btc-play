import General from './General/General';
import Preferences from './Preferences/Preferences';
import Security from './Security/Security';
import Sessions from './Sessions/Sessions';
import Verify from './Verify/Verify';

import GeneralIcon from '../../assets/images/globalSettings/general.svg';
import PreferencesIcon from '../../assets/images/globalSettings/Preferences.svg';
import SecurityIcon from '../../assets/images/globalSettings/security.svg';
import SessionsIcon from '../../assets/images/globalSettings/Sessions.svg';
import VerifyIcon from '../../assets/images/globalSettings/Verify.svg';

export const settingsList = [
  {
    id: 0,
    title: 'General',
    icon: <GeneralIcon />,
    component: <General />,
    message: 'updateNumber',
  },
  {
    id: 1,
    title: 'Security',
    icon: <SecurityIcon />,
    component: <Security />,
    message: 'twoFactorEnabled',
  },
  {
    id: 2,
    title: 'Preferences',
    icon: <PreferencesIcon />,
    component: <Preferences />,
  },
  {
    id: 3,
    title: 'Sessions',
    icon: <SessionsIcon />,
    component: <Sessions />,
  },
  {
    id: 4,
    title: 'Verify',
    icon: <VerifyIcon />,
    component: <Verify />,
  },
];
