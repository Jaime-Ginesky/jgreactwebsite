import { Fragment } from 'react';
import { CategoryContainer } from './category-menu-item.styles'

const CategoryMenuItem = ({ category }) => {
    const { id, title, description } = category;

    return(
        <Fragment>
            <CategoryContainer>
        <title>{title}</title>
        <p>{description}</p>
        </CategoryContainer>
        </Fragment>
    )
}

export default CategoryMenuItem;