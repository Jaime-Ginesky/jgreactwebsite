import { Fragment } from 'react';


const CategoryMenuItem = ({ category }) => {
    const { id, title, description } = category;

    return(
        <Fragment>
        <title>{title}</title>
        <p>{description}</p>
        </Fragment>
    )
}

export default CategoryMenuItem;