import {
  MdBarChart,
  MdOutlineHelpOutline,
  MdOutlineSpaceDashboard
} from 'react-icons/md'

const dataSidebar = [
  {
    tag: 'Dashboard',
    icon: <MdOutlineSpaceDashboard />,
    route: 'dashboard'
  },
  {
    tag: 'Encuesta',
    icon: <MdBarChart />,
    route: 'encuesta'
  },
  {
    tag: 'Ayuda',
    icon: <MdOutlineHelpOutline />,
    route: 'ayuda'
  }
]

export default dataSidebar
