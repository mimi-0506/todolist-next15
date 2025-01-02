"use client";
import "./components.css";
import Image from "next/image";

interface dataType {
  text: string;
  state: boolean;
}

const Item = ({ value }: { value: dataType }) => {
  const { state, text } = value;
  return (
    <div className="item">
      <Image
        src={state ? "./svg/todo.svg" : "./svg/done.svg"}
        alt="Responsive"
        width="32"
        height="32"
      />
      <p>{text}</p>
    </div>
  );
};

export default function TodoLists() {
  return (
    <div className="todoListContainer">
      <div className="commonContainer todoContainer">
        <div className="title">TO DO</div>
        <Item value={{ text: "test1", state: true }} />
      </div>

      <div className="commonContainer doneContainer">
        <div className="title">DONE</div>
        <Item value={{ text: "test2", state: false }} />
      </div>
    </div>
  );
}
