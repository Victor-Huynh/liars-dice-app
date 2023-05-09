import { type NextPage } from "next";
import NavigationBar from "~/components/navigationbar";

// import { RouterOutputs, api } from "~/utils/api";

const Play: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <main className="flex justify-center">
        <div>Play page</div>
      </main>
    </>
  );
};

export default Play;
