import { type NextPage } from "next";
import NavigationBar from "~/components/navigationbar";

// import { RouterOutputs, api } from "~/utils/api";

const Options: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <main className="flex justify-center">
        <div>Options page</div>
      </main>
    </>
  );
};

export default Options;
