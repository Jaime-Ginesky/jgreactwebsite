
import './App.css';

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

const App = () => {
  return (
    <div className="projects-container">
      <h1>Jaime Ginesky</h1>
      <h2>Front-end Developer based in Los Angeles, CA</h2>
      <div className="project-container">
        {categories.map(({title,description}) => (
          <div className='card'>
          <div className='imgA'>
            <h2>{title}</h2>
          </div>
            <div className='contentA'>
              <div className='content'>
                <p>{description}</p>
                {/* <link>link to site</link> */}
          </div>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
