import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">

        <Link href={'/home'}>
          LINK TO home
        </Link>

      </main>
    </div>
  );
}
