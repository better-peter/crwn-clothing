import React from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  const newLink = '/shop/' + title.toLowerCase();
  return (
    <div className='collection-preview'>
      <Link to={newLink}>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>

      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

{
  /* <Link className='title' to=`/shop/${{title.toUpperCase()} </Link> */
}
