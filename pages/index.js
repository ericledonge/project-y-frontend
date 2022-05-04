import Head from "next/head";

import useFetchGames from "../hooks/useFetchGames";

export default function Home() {
  const { games, isLoading, isError } = useFetchGames();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline text-cyan-800">
          Project Y
        </h1>

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
