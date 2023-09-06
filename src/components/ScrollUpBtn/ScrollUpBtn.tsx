import React, { useRef, useState } from "react";
import { scrollUp } from "./ScrollUp";
import s from "./ScrollUpBtn.module.css";
export const ScrollUpBtn:React.FC = () => {
  const scrBtn = useRef(null);
  const [op, setOp] = useState<number>(0);
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setOp(1) : setOp(0);
  });
  return (
    <button
      ref={scrBtn}
      style={{ opacity: op }}
      id={s.scrollup}
      onClick={() => scrollUp()}
    >
      UP
    </button>
  );
};
