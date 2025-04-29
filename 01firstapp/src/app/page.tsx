import Counter from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link className="text-blue-300" href="/about"> About</Link>
      <Link className="text-blue-300" href="/contact"> Contact</Link>
      <Link className="text-blue-300" href="/products"> Products</Link>

      <Counter />
    </div>
  );
}
