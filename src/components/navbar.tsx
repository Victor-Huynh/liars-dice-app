export const NavBar = () => {
  return (
    <div className="fixed top-0 w-full">
      <nav className="flex h-8 space-x-2">
        <a
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/"
        >
          Home
        </a>
        <a
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/"
        >
          Options
        </a>
        <a
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/"
        >
          Profile
        </a>
        <a
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/"
        >
          Lobbies
        </a>
        <a
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/"
        >
          Create
        </a>
        <a
          className="w-20 border-2 border-solid border-slate-300 text-center hover:bg-slate-200"
          href="/play"
        >
          Play
        </a>
      </nav>
    </div>
  );
};
