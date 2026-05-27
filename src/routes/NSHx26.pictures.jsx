import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/NSHx26/pictures")({
  component: PicturesPage,
  head: () => ({
    meta: [
      { title: "NSHx26 Pictures - NSBE x SHPE Hackathon at RPI" },
      {
        name: "description",
        content: "NSHx26 pictures for the NSBE x SHPE Hackathon at RPI.",
      },
    ],
  }),
});

function PicturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="font-mono text-sm text-primary mb-3">
        &gt; pictures.dir
      </p>
      <div className="terminal-window p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold">NSHx26 Pictures</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Event photos will be added here after NSHx26.
        </p>
      </div>
    </div>
  );
}
