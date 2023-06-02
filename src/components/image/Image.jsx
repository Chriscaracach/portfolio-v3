import { useImage } from "react-image";
import { Suspense } from "react";
import PropTypes from "prop-types";

const Image = ({ path, width, height, className }) => {
  const { src } = useImage({
    srcList: path,
  });

  return (
    <Suspense fallback={<>Loading...</>}>
      <img src={src} width={width} height={height} className={className} />
    </Suspense>
  );
};

Image.propTypes = {
  path: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default Image;
