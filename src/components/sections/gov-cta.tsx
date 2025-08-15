import { SendHorizontal } from 'lucide-react';

interface GovCtaProps {
  title: string;
  body: string;
  button: string;
}

export function GovCta({ title, body, button }: GovCtaProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary text-white">
        {/* dotted pattern overlay */}
        {/* <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_center,_currentColor_1px,_transparent_1.5px)] [background-size:18px_18px]" /> */}
        <div className="relative grid gap-10 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
            <p className="mt-4 text-sm/6 text-white/90">{body}</p>
            <a
              href="#integrarse"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-white/90"
            >
              <SendHorizontal className="h-4 w-4" /> {button}
            </a>
          </div>
          <div className="hidden md:block">
            {/* Illustration placeholder */}
            {/* <div className="h-full w-full rounded-2xl bg-white/10" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
