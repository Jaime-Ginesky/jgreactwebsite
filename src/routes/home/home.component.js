import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import ProjectMenu from '../../components/projects/projects.component';
import Footer from '../../components/footer/footer.component';
import { MainContainer, SlideDown, SlideUp } from './home.styles';

const Home = () => {
return(
  <Fragment>
    <MainContainer>
      <h1>Jaime Ginesky</h1>
      <SlideUp>
      <h3>Hello, My Name is</h3>
      </SlideUp>
        <SlideDown>
        <h2>Front-end Developer based in Los Angeles, CA</h2>
        </SlideDown>
     <Outlet />
    <ProjectMenu />
     <Footer />
     </MainContainer>
    </Fragment>
)
}

export default Home;