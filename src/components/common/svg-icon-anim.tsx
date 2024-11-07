import { useRef, useEffect } from "react";
import Vivus from "vivus";

const SvgIconCom = ({ icon, id }: { icon: string; id: string }) => {
  const svgRef = useRef<HTMLDivElement | null>(null);
  const vivusRef = useRef<Vivus | null>(null);

  useEffect(() => {
    const currentSvgRef = svgRef.current;

    if (currentSvgRef && !vivusRef.current) {
      vivusRef.current = new Vivus(currentSvgRef, {
        duration: 180,
        file: icon,
      });
    }

    const handleMouseEnter = () => {
      if (vivusRef.current) {
        vivusRef.current.reset().play();
      }
    };

    return () => {
      if (currentSvgRef) {
        currentSvgRef.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [icon]);

  return (
    <div
      className="svg-icon"
      id={id}
      ref={svgRef}
      onMouseEnter={() => vivusRef.current?.reset().play()}
    ></div>
  );
};

export default SvgIconCom;