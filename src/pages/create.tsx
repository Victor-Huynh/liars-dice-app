import { type NextPage } from "next";
import NavigationBar from "~/components/navigationbar";

import { RouterOutputs, api } from "~/utils/api";

const Create: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <main className="flex justify-center">
        <div>Create page</div>
      </main>
    </>
  );
};

export default Create;
