import CategoryMenuItem  from '../category-menu-item/category-menu-item.component';

const categories = [
    {
      id: 1,
      title: 'E-Commerce Site',
      description: 'Fascininating site that does things',
    },
    {
      id: 2,
      title: 'Dictionary App',
      description: 'Fascininating site that does things',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Fascininating site that does things',
    }, {
      id: 4,
      title: 'Other Project',
      description: 'Fascininating site that does things',
    },
  
  ]

   export const ProjectMenu = () => {
    return (
       <div className="project-container">
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
          </div>
    
    )
  }

  export default ProjectMenu;

  