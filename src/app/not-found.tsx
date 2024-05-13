'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <main className="flex flex-col items-center">
        <section className="h-54 relative mb-6 mt-6 w-96 font-bold">
          {/* Logo by @SAWARATSUKI */}
          <img src="/404 NotFound.png" alt="404" />
        </section>

        <section className="flex gap-4">
          <span
            className="icon-[mdi--arrow-left] cursor-pointer text-3xl
           
            font-bold opacity-60 hover:opacity-100"
            onClick={() => window.history.back()}
          />

          <Link href="/">
            <span
              className="icon-[mdi--home] cursor-pointer text-3xl
            font-bold opacity-60 hover:opacity-100"
            />
          </Link>
        </section>
      </main>
    </div>
  );
}
