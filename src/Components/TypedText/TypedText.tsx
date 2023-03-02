import "./TypedText.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

type TypedTextProps = {
  isTitle?: boolean;
  texts: Array<string>;
};

const TypedText = ({ texts, isTitle }: TypedTextProps) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: texts,
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  if (isTitle) return <span className="typedtext-large" ref={el} />;
  return <span ref={el} />;
};

export default TypedText;
