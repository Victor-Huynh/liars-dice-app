import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="fixed top-0 w-full">
      <nav className="flex h-8 space-x-2">
        <Link
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/"
        >
          Home
        </Link>
        <Link
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/"
        >
          Options
        </Link>
        <Link
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/"
        >
          Profile
        </Link>
        <Link
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/"
        >
          Lobbies
        </Link>
        <Link
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/"
        >
          Create
        </Link>
        <Link
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/play"
        >
          Play
        </Link>
      </nav>
    </div>
  );
};
