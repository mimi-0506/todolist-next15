export default function Item({ value }: { value: string }) {
  return (
    <div>
      <input type="checkbox" />
      {value}
    </div>
  );
}
