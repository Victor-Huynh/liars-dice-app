import { type NextPage } from "next";
// import Head from "next/head";
// import { useEffect, useState } from 'react';

const Cerberus: NextPage = () => {
    //     enum attackStates { COMBO = "COMBO", AUTO = "Auto", GHOSTS = "GHOSTS", LAVA = "LAVA" }
    //     const cerbData = [
    //         { id: 1, attack: attackStates.COMBO },
    //         { id: 2, attack: attackStates.AUTO },
    //         { id: 3, attack: attackStates.AUTO },
    //         { id: 4, attack: attackStates.AUTO },
    //         { id: 5, attack: attackStates.AUTO },
    //         { id: 6, attack: attackStates.AUTO },
    //         { id: 7, attack: attackStates.GHOSTS },
    //         { id: 8, attack: attackStates.AUTO },
    //         { id: 9, attack: attackStates.AUTO },
    //         { id: 10, attack: attackStates.AUTO },
    //         { id: 11, attack: attackStates.COMBO },
    //         { id: 12, attack: attackStates.AUTO },
    //         { id: 13, attack: attackStates.AUTO },
    //         { id: 14, attack: attackStates.GHOSTS },
    //         { id: 15, attack: attackStates.LAVA },
    //         { id: 16, attack: attackStates.AUTO },
    //         { id: 17, attack: attackStates.AUTO },
    //         { id: 18, attack: attackStates.AUTO },
    //         { id: 19, attack: attackStates.AUTO },
    //         { id: 20, attack: attackStates.LAVA },
    //         { id: 21, attack: attackStates.COMBO },
    //         { id: 22, attack: attackStates.AUTO },
    //         { id: 23, attack: attackStates.AUTO },
    //         { id: 24, attack: attackStates.AUTO },
    //         { id: 25, attack: attackStates.LAVA },
    //         { id: 26, attack: attackStates.AUTO },
    //         { id: 27, attack: attackStates.AUTO },
    //         { id: 28, attack: attackStates.GHOSTS }
    //     ]

    //     const [highlightedRow, setHighlightedRow] = useState(1);
    //     const [highlightRows, setHighlightRows] = useState(false);

    //     useEffect(() => {
    //         if (highlightRows) {
    //             // Highlight each row after a delay
    //             const timeoutIds = cerbData.map((row, index) => {
    //                 return setTimeout(() => {
    //                     // console.log(`setting row: ${row.id}`);
    //                     setHighlightedRow(row.id);
    //                 }, index * 3600);
    //             });

    //             // Clear timeouts when component unmounts
    //             return () => {
    //                 timeoutIds.forEach(id => clearTimeout(id));
    //             };
    //         }
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //     }, [highlightRows]);

    //     const resetTimer = () => {
    //         setHighlightRows(false);
    //         setHighlightedRow(1);
    //     }

    //     return (
    //         <>
    //             <main>
    //                 {/* <Head>
    //                     <title>Cerberus Tool</title>
    //                     <meta name="description" content="VVKH - Cerberus Tool for OSRS ghost skip" />
    //                     <link rel="icon" href="/favicon.ico" />
    //                 </Head> */}
    //                 <div>TIMING: As the respawn timer hits 0, don&apos;t get it under 400</div>
    //                 <div>After #14-GHOSTS, put on Piety and kill, prefer to dump dmg specs at the very end</div>
    //                 <div>Ghosts spawn &lt;400 and lava spawns &lt;200</div>
    //                 <br></br>
    //                 <button className="w-20 h-20 bg-slate-700 hover:bg-slate-600" onClick={() => setHighlightRows(true)}><span>Start</span></button>
    //                 <button className="padding: w-20 h-20 bg-slate-700 hover:bg-slate-600" onClick={() => resetTimer()}>Reset</button>
    //                 <br></br>
    //                 <br></br>
    //                 <table className="border-2">
    //                     <thead>
    //                         <tr>
    //                             <td>#</td>
    //                             <td>Attack</td>
    //                         </tr>
    //                     </thead>
    //                     <tbody className="border-2">
    //                         {cerbData.map((row) => (
    //                             <tr key={row.id} className={row.id === highlightedRow ? "bg-green-900 border-2" : ""} >
    //                                 <td>{row.id}</td>
    //                                 <td>{row.attack !== attackStates.AUTO ? <strong>{row.attack}</strong> : row.attack}</td>
    //                             </tr>
    //                         ))}
    //                     </tbody>
    //                 </table>
    //             </main>
    //         </>
    //     );
    // };

    return (
        <>
            <div> hello world </div>
        </>
    )
};
export default Cerberus;
