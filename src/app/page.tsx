import { Links } from '@/components/Links';
import { introduction, links } from '@/data/me';
import { Typewriter } from '@/components/Typewriter';
import { SparklesText } from '@/components/ui/sparkles';
import TextRotate from '@/components/ui/text-rotate';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <main className="flex flex-col items-center px-4 py-16">
        <section className="relative mb-6 mt-6 text-4xl font-bold md:mb-12 md:mt-10 md:text-6xl">
          <div className="animate-wave inline-block origin-center whitespace-pre">👋 </div>
          <SparklesText className="inline whitespace-pre font-normal" sparklesCount={2} text={` Hi, I'm `} />{' '}
          <SparklesText
            className="inline font-normal"
            sparklesCount={3}
            text={
              <TextRotate
                mainClassName="w-40 md:w-60"
                texts={[`<OddC/>`, ` Hang`]}
                staggerFrom={'first'}
                staggerDuration={0.1}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                rotationInterval={5000}
              />
            }
          />
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
