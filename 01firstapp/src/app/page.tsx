import Counter from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/about"> About</Link>
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/contact"> Contact</Link>
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/products"> Products</Link>

      <Counter />
    </div>
  );
}
