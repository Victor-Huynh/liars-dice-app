/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import React, { FormEvent } from "react";
import NavigationBar from "~/components/navigationbar";

import { RouterOutputs, api } from "~/utils/api";

const Lobbies: NextPage = () => {


  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   alert("hello");
  //   // (e: { preventDefault: () => void; target: HTMLFormElement | undefined; }) 
  //   // preventDefault();   // Prevent default submission
  //   const data = new FormData(e.target as HTMLFormElement);
  //   if (!data) return;
  //   const GameName = data.get('GameName')?.toString();
  //   console.log(`hello I submitted game name: ${GameName || "undefined"}`);

  // }

  return (
    <>
      <NavigationBar />
      <main className="justify-center">
        <div>Lobbies page</div>
        {/* <div>
          <form onSubmit={handleSubmit}>
            <label>Game Name</label>
            <input type="text" id="GameName" name="GameName" className="bg-black" />
            <button type="submit">Submit</button>
          </form>
        </div> */}
      </main>
    </>
  );
};

export default Lobbies;
