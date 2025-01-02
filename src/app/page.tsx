import Image from "next/image";
import styles from "./page.module.css";
import Input from "./Input";
import Item from "./Item";

export default function Home() {
  return (
    <div>
      <Input />
      <div>
        <div>
          <div>TO DO</div>
          <Item value="test" />
        </div>

        <div>
          <div>DONE</div>
          <Item value="test2" />
        </div>
      </div>
    </div>
  );
}
