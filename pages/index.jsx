import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-6">
      <Head>
        <title>AmplifyVids</title>
      </Head>
      <h1 className="text-4xl font-bold text-purple-600 mb-4">
        AmplifyVids
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        La solution pour amplifier vos vidéos partout, facilement et
        rapidement. Connectez vos créateurs, diffusez vos contenus,
        touchez plus de monde.
      </p>
      <a
        href="mailto:hello@amplifyvids.co"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
      >
        Contactez-nous
      </a>
      <a
        href="https://wa.me/212600000000"
        className="mt-4 text-purple-500 underline"
      >
        Ou écrivez-nous sur WhatsApp
      </a>
    </div>
  );
}
