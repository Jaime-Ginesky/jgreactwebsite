import { Outlet } from 'react-router-dom';

import ProjectMenu from '../../components/projects/projects.component';

const Home = () => {
return(
  <div className="name">
    <h1>JaimeGinesky</h1>
    <h2>Front-end Developer based in Los Angeles, CA</h2>
    <ProjectMenu />
    <Outlet />
  </div>
)
}

export default Home;