import { type NextPage } from "next";
import NavigationBar from "~/components/navigationbar";

// import { RouterOutputs, api } from "~/utils/api";

const Lobbies: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <main className="flex justify-center">
        <div>Lobbies page</div>
      </main>
    </>
  );
};

export default Lobbies;
