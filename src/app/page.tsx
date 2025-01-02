import Input from "./Input";
import TodoLists from "./TodoLists";

export default function Home() {
  return (
    <div className="dynamicWidth">
      <Input />
      <TodoLists />
    </div>
  );
}
