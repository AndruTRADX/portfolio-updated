import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { base64img } from "./img";

type LazyImageProps = { src: string | undefined };
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;

export default function LazyImage({ src, className }: Props): JSX.Element {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(base64img);

  useEffect(() => {
    // new observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
      });
    });

    // observe node
    if (node.current) {
      observer.observe(node.current);
    }

    // disconnect observer
    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <img
      ref={node}
      src={currentSrc}
      alt="loading image"
      className={className}
    />
  );
}
