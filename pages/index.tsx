import React from "react";
import { useEffect } from "react";
import Head from "next/head";

import useFetchGames from "../hooks/useFetchGames";
import { supabase } from "../libs/supabaseClient";

export default function Home() {
  const { games, isLoading, isError } = useFetchGames();

  useEffect(() => {
    console.log(supabase.auth.user());
  }, []);

  return (
    <div>
      <Head>
        <title>Project Y</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline text-cyan-800">
          Project Y
        </h1>

        <button className="bg-indigo-500">Button</button>

        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error...</p>
        ) : (
          games?.map((game) => <div key={game.name}>{game.name}</div>)
        )}
      </main>
    </div>
  );
}
