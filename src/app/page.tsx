import Input from "@/components/Input";
import TodoLists from "@/components/TodoLists";

export default function Home() {
  return (
    <div className="rootContainer dynamic">
      <Input />
      <TodoLists />
    </div>
  );
}
