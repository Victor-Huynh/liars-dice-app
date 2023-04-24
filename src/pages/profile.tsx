import { type NextPage } from "next";
import NavigationBar from "~/components/navigationbar";

import { RouterOutputs, api } from "~/utils/api";

const Profile: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <main className="flex justify-center">
        <div>Profile page</div>
      </main>
    </>
  );
};

export default Profile;
