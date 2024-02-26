import { Card } from "../lib/main";

export default function App() {
  return (
    <div className="grid grid-cols-4 px-[12.5%]">
      {Array(30)
        .fill(0)
        .map((_, i) => (
          <Card key={i.toPrecision()} />
        ))}
    </div>
  );
}
