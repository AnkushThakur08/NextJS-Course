import Counter from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about"> About</Link>
      <Link href="/contact"> Contact</Link>

      <Counter />
    </div>
  );
}
