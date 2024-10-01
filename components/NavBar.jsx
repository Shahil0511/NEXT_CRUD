import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-purple-600 px-8 py-3">
      <Link className="font-bold text-white " href={"/"}>
        CRUD
      </Link>
      <Link className="bg-white p-3 font-bold rounded-md" href={"/addTopic"}>
        ADD TOPIC
      </Link>
    </nav>
  );
}
