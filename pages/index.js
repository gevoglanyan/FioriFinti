import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fior Finti</title>
        <meta name="description" content="Delicate, floral cupcakes made with love." />
      </Head>
      <main className="p-8 bg-pink-50 min-h-screen text-center">
        <h1 className="text-5xl font-bold text-pink-700">Fior Finti</h1>
        <p className="mt-4 text-lg text-pink-900">
          Elegant hand-crafted floral cupcakes for every occasion.
        </p>
      </main>
    </>
  )
}