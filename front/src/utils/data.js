import { FcHome } from 'react-icons/fc';
import { LuCheckSquare } from 'react-icons/lu';
import { ImStopwatch } from 'react-icons/im';
import { BsFillExclamationSquareFill } from 'react-icons/bs';

export const navMenus = [
  { label: 'Home', to: '/', icon: <FcHome className="w-5 h-5" /> },
  {
    label: 'Completed',
    to: '/completed',
    icon: <LuCheckSquare className="w-5 h-5" />,
  },
  {
    label: 'Proceeding',
    to: '/proceeding',
    icon: <ImStopwatch className="w-5 h-5" />,
  },
  {
    label: 'Important',
    to: '/important',
    icon: <BsFillExclamationSquareFill className="w-5 h-5" />,
  },
];
