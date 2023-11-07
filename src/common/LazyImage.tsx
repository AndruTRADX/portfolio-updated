
import { useRef, useEffect, useState } from "react";
import { base64img } from "./img";

export default function LazyImg({ src, ...imgProps }) {
  const node = useRef(null);
  const [currentSrc, setCurrentSrc] = useState(base64img);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
      });
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img ref={node} src={currentSrc} {...imgProps} />;
}
