import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <main className="flex flex-col items-center px-4 py-16">
        <div className="relative mb-6 mt-12 text-4xl font-bold md:mb-12 md:mt-24 md:text-6xl">
          👋&nbsp; Hi, I&apos;m{' '}
          <div className="group inline-flex">
            <div
              className="transition-all duration-500 
              ease-in-out group-hover:-translate-y-44
              group-hover:opacity-0
            "
            >
              &lt;OddC/&gt;
            </div>
            <div
              className="opacity-0 transition-all  duration-500 ease-in-out 
              group-hover:-translate-x-[4.5em]
              group-hover:opacity-100
            "
            >
              Humphrey Wong
            </div>
          </div>
        </div>
        {/* <Typewriter snippets={descriptiveStatements} /> */}
        {/* <Links links={links} /> */}
      </main>
    </div>
  );
}
