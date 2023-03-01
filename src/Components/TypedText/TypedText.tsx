import "./TypedText.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

type TypedTextProps = {
  texts: Array<string>;
};

const TypedText = ({ texts }: TypedTextProps) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: texts,
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typedtext" ref={el}></span>;
};

export default TypedText;
