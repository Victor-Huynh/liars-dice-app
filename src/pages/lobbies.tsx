import { type NextPage } from "next";
import Head from "next/head";
import { NavBar } from "~/components/navbar";

import { RouterOutputs, api } from "~/utils/api";

const Lobbies: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="flex justify-center">
        <div>Lobbies page</div>
      </main>
    </>
  );
};

export default Lobbies;
