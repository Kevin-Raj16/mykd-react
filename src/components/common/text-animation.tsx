import { useState } from "react";
import useTextAnimation from "../../hooks/use-text-animation";
import { InView } from "react-intersection-observer";

// props type
type IProp = {
  title: string;
  style_2?: boolean;
};
const TextAnimation = ({ title, style_2=false }: IProp) => {
  const [isView, setIsView] = useState<boolean>(false);
  useTextAnimation(isView);

  const handleInViewChange = (inView:boolean) => {
    if (inView) {
      setIsView(true);
    }
  };

  return (
    <>
      {!style_2 && (
        <InView
          onChange={handleInViewChange}
          as="span"
          className={`sub-title tg__animate-text`}
        >
          {title}
        </InView>
      )}
      {style_2 && (
        <InView
          onChange={handleInViewChange}
          as="p"
          className={`tg__animate-text style2`}
        >
          {title}
        </InView>
      )}
    </>
  );
};

export default TextAnimation;
