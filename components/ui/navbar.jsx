import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="p-4">
        <ul className="flex gap-12 flex-wrap font-bold">
          <Link href="/">Home</Link>
          <Link href="/createuser">Create User</Link>
          <Link href="/alluser">All Users</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
