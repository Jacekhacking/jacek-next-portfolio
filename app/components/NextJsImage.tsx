import Image from 'next/image';

const NextJsImage = ({ imagePath, height, width, alt }: NextJsImage) => {
  return (
    <div
      className="next-image-wrapper "
      style={{
        height: height,
        width: width,
      }}
    >
      <Image src={imagePath} alt={alt} fill />
    </div>
  );
};

export default NextJsImage;

type NextJsImage = {
  imagePath: string;
  height: string;
  width: string;
  alt: string;
};
