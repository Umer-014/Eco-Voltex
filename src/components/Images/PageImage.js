import { useContext } from "react";
import ImagesLoadingContext from "./ImagesLoadingContext";

export default function PageImage({
  priority = false,
  alt = "",
  src,
  srcSet,
  ...imageProps
}) {
  const imagesEnabled = useContext(ImagesLoadingContext);
  const shouldLoad = priority || imagesEnabled;

  return (
    <img
      {...imageProps}
      alt={alt}
      src={shouldLoad ? src : undefined}
      srcSet={shouldLoad ? srcSet : undefined}
    />
  );
}
