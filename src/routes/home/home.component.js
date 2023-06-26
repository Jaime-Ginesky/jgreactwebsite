import { Outlet } from 'react-router-dom';

import ProjectMenu from '../../components/projects/projects.component';

const Home = () => {
return(
  <div>
    <ProjectMenu />
    <Outlet />
  </div>
)
}

export default Home;