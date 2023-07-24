
import { ProjectMenu } from '../../components/projects/projects.component';

import { MainContainer } from './home.styles';

const Home = () => {
return(
  <MainContainer>
    <h1>JaimeGinesky</h1>
    <h2>Front-end Developer based in Los Angeles, CA</h2>
    <ProjectMenu />
  </MainContainer>
)
}

export default Home;