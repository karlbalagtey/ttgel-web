import { useState } from 'react';
import ContentLoader from 'react-content-loader';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImage = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <div {...props}>
          <ContentLoader
            speed={2}
            width={width}
            height={height}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" width={width} height={height} />
          </ContentLoader>
        </div>
      )}
      <img src={src} onLoad={handleImage} alt={alt} />
    </>
  );
}
