import Input from "./Input";
import TodoLists from "./TodoLists";

export default function Home() {
  return (
    <div className="rootContainer dynamic">
      <Input />
      <TodoLists />
    </div>
  );
}
