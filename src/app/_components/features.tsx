import Container from "@/components/ui/container";

const features = [
  {
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    title: "Fast Setup",
    description: "Start building your landing page instantly with zero config.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" /></svg>
    ),
    title: "Modern Design",
    description: "Beautiful, responsive components ready to use.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: "Performance",
    description: "Optimized for speed and best practices out of the box.",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Modern gradient background with blurred blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 via-purple-300/20 to-pink-300/30 rounded-full blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-200/30 via-pink-200/20 to-blue-200/30 rounded-full blur-2xl opacity-60 animate-pulse delay-2000" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 via-white/80 to-white dark:from-gray-900/90 dark:via-gray-950/80 dark:to-gray-950" />
      </div>
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 shadow-xl backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-100 via-white to-pink-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 