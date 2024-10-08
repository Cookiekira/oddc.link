import { Links } from '@/components/Links';
import { introduction, links } from '@/data/me';
import { Typewriter } from '@/components/Typewriter';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <main className="flex flex-col items-center px-4 py-16">
        <section className="relative mb-6 mt-6 text-4xl font-bold md:mb-12 md:mt-10 md:text-6xl">
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
              className="absolute opacity-0 transition-all delay-100 duration-500 ease-in-out 
              group-hover:translate-x-0
              group-hover:opacity-100
              md:translate-x-full
            "
            >
              Hang
            </div>
          </div>
        </section>

        <section className="mb-10 flex">
          <Typewriter snippets={introduction} />
        </section>

        <section className="mt-10 flex">
          <Links links={links} />
        </section>
      </main>
    </div>
  );
}
