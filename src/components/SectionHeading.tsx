"use client";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: Props) {
  return (
    <div
      className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-pink-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
      <div
        className={`gradient-divider mt-5 h-0.5 w-16 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
