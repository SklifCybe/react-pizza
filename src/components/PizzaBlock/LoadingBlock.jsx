import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={458}
      viewBox="0 0 280 458"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="275" rx="10" ry="10" width="280" height="25" />
      <rect x="27" y="326" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="316" rx="10" ry="10" width="280" height="83" />
      <rect x="0" y="413" rx="11" ry="11" width="84" height="26" />
      <rect x="125" y="408" rx="30" ry="30" width="151" height="45" />
    </ContentLoader>
  );
}

export default LoadingBlock;
