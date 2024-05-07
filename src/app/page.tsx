import Typewriter from '@/components/typewriter';
import { introduction } from '@/data/me';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <main className="flex flex-col items-center px-4 py-16">
        <section className="relative mb-6 mt-12 text-4xl font-bold md:mb-12 md:mt-24 md:text-6xl">
          👋&nbsp; Hi, I&apos;m{' '}
          <div className="group inline-flex">
            <div
              className="transition-all duration-500 
              ease-in-out group-hover:-translate-y-full
              group-hover:opacity-0
            "
            >
              &lt;OddC/&gt;
            </div>
            <div
              className="absolute translate-x-full opacity-0 transition-all delay-100 duration-500 
              ease-in-out
              group-hover:translate-x-0
              group-hover:opacity-100
            "
            >
              Humphrey
            </div>
          </div>
        </section>

        <section className="flex h-6 justify-start">
          <Typewriter snippets={introduction} />
        </section>

        {/* <Links links={links} /> */}
      </main>
    </div>
  );
}
