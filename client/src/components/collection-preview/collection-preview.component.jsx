import React from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => {
  const newLink = '/shop/' + title.toLowerCase();
  return (
    <CollectionPreviewContainer>
      <Link to={newLink}>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
      </Link>

      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;

//{
/* <Link className='title' to=`/shop/${{title.toUpperCase()} </Link> */
//}
