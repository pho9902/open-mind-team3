import { useEffect, useRef } from "react";

export default function InfiniteScrollObserver({ onIntersect }) {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect(); 
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [onIntersect]);

  return <div ref={observerRef} style={{ height: "10px", margin: "20px 0" }} />;
}