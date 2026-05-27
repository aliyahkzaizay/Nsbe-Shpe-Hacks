import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/NSHx26")({
  component: NSHx26Page,
  head: () => ({
    meta: [
      { title: "NSHx26 - NSBE x SHPE Hackathon at RPI" },
      {
        name: "description",
        content:
          "NSHx26 information for the NSBE x SHPE Hackathon at RPI.",
      },
    ],
  }),
});

function NSHx26Page() {
  return (
    <Outlet />
  );
}
