import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import ProjectMenu from '../../components/projects/projects.component';

import { MainContainer, Grid, SlideDown } from './home.styles';

const Home = () => {
return(
  <Fragment>
    <MainContainer>
      <Grid>
        <h3>Hello, My Name is</h3>
        <h1>JaimeGinesky</h1>
        <SlideDown>
          <h2>Front-end Developer based in Los Angeles, CA</h2>
          </SlideDown>
        <footer>jfdh</footer>
        </Grid>
     <ProjectMenu />
     <Outlet />
     </MainContainer>
    </Fragment>
)
}

export default Home;