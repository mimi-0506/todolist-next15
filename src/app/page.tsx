import Input from "./Input";
import Item from "./Item";

export default function Home() {
  return (
    <div className="dynamicWidth">
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
