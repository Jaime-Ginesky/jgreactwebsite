import { Fragment } from 'react';
import { Card, ProjectCardStyles, Image, Content } from './category-menu-item.styles';

const CategoryMenuItem = ({ category }) => {
    const { title, description } = category;

    return(
        <Fragment>
            <Card>
               <ProjectCardStyles>
                    <Image>
                        <h4>{title}</h4>
                    </Image>
                    <Content>
                        <p>{description}</p>
                    </Content>  
                </ProjectCardStyles>  
          </Card>
        </Fragment>
    )
}

export default CategoryMenuItem;