import { type NextPage } from "next";
import NavigationBar from "~/components/navigationbar";

import { RouterOutputs, api } from "~/utils/api";

const Cerberus: NextPage = () => {
    return (
        <>
            <NavigationBar />
            <main className="flex justify-center">
                <div>This is my page for Cerberus boss</div>
            </main>
        </>
    );
};

export default Cerberus;
