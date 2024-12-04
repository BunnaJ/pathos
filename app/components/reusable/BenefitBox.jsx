import React, { useEffect } from "react";
import { useState } from "react";
import textList from "../text/ListData";

export default function BenefitBox({ id }) {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [btnText, setBtnText] = useState("");
  const [text, setText] = useState("");

  const handleTextDisplay = () => {
    setDisplay(!display);
  };
  useEffect(() => {
    if (display) {
      setText(textList[id].message);
      setBtnText('less...')
    } else {
      setText(textList[id].message.substring(0, 391));
      setBtnText('more...')
    } 
    setTitle(textList[id].title)
  }, [display]);
  return (
    <>
      <div className="pt-9 w-custom rounded bg-active ">
        <div className="flex justify-center">
          <h1 className="text-primary text-xl pb-4 ">
            {textList[id]?.title}
          </h1>
        </div>
        <div className=" bg-active3 rounded px-5 pt-3">
          <p className="text-sm">{text}</p>
          <button className="text-primary " onClick={handleTextDisplay}>
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}
