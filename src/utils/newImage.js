import React from 'react';

const NewImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default NewImage;