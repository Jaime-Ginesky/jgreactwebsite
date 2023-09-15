import { Outlet } from 'react-router-dom';
import { ProjectMenu } from '../../components/projects/projects.component';

import { MainContainer } from './home.styles';

export const Home = () => {
return(
  <header>
    <MainContainer>
    <h3>Hello, My name is</h3>
     <h1>JaimeGinesky</h1>
     <h2>Front-end Developer based in Los Angeles, CA</h2>
     <ProjectMenu />
     <Outlet />
     </MainContainer>
    </header>
)
}

export default Home;