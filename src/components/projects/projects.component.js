import CategoryMenuItem  from '../category-menu-item/category-menu-item.component';
import { ProjectContainer, Container } from '../projects/projects.styles';

const categories = [
    {
      id: 1,
      title: 'E-Commerce Site',
      description: 'E-commerce site built with React',
    },
    {
      id: 2,
      title: 'Dictionary App',
      description: 'Dictionary App complete with definitions, synonyms, pronunciation and images',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Weather App',
    }, {
      id: 4,
      title: 'Other Project',
      description: 'Rbots',
    },
  
  ]

   const ProjectMenu = () => {
    return (
       <ProjectContainer>
        <Container>
          {categories.map((category) => (
            <CategoryMenuItem key={category.id} category={category} />
          //   <div className='card'>
          //   <div className='imgA'>
          //     <h2>{title}</h2>
          //   </div>
          //     <div className='contentA'>
          //       <div className='content'>
          //         <p>{description}</p>
          //         {/* <link>link to site</link> */}
          //   </div>
          // </div>
          // </div>
          ))}
          </Container>
          </ProjectContainer>
    
    )
  }

  export default ProjectMenu;

  