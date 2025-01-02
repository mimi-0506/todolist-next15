import Input from "@/components/root/Input";
import TodoLists from "@/components/root/TodoLists";

export default function Home() {
  return (
    <div className="rootContainer dynamic">
      <Input />
      <TodoLists />
    </div>
  );
}
