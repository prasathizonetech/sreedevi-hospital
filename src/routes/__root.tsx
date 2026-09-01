import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingSocialMenu } from "@/components/site/FloatingSocialMenu";
import { ScrollProgressBar } from "@/components/site/ScrollProgressBar";
import { DesktopCursorGlow } from "@/components/site/DesktopCursorGlow";
import { pageVariants } from "@/lib/animations";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-[#D94D78]">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-[#14213D]">Page not found</h2>
        <p className="mt-2 text-sm text-slate-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF87B3] via-[#ff9ec2] to-[#D94D78] border border-[#e86595] px-6 py-3 text-sm font-extrabold text-[#14213D] hover:shadow-md shadow-pink-300/40 transition-all cursor-pointer"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold text-[#14213D]">This page didn't load</h1>
        <p className="mt-2 text-sm text-slate-500">Something went wrong. Please try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gradient-to-r from-[#FF87B3] via-[#ff9ec2] to-[#D94D78] border border-[#e86595] px-6 py-2.5 text-sm font-extrabold text-[#14213D] hover:shadow-md shadow-pink-300/40 transition-all cursor-pointer"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-[#FF87B3] bg-white px-6 py-2.5 text-sm font-semibold text-[#14213D] hover:bg-[#FFF5F8] transition-all"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SreeDevi Hospital & Fertility Centre — Srirangam" },
      {
        name: "description",
        content:
          "Manyata-certified maternity, fertility & IVF, women's health, general medicine, diabetes and respiratory care in Srirangam, Tiruchirappalli.",
      },
      { name: "author", content: "SreeDevi Hospital & Fertility Centre" },
      { name: "theme-color", content: "#ffc8d6" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "SreeDevi Hospital & Fertility Centre — Srirangam" },
      {
        property: "og:description",
        content:
          "Manyata-certified maternity, fertility & IVF, women's health, general medicine, diabetes and respiratory care in Srirangam, Tiruchirappalli.",
      },
      { property: "og:url", content: "https://sreedevihospital.in/" },
      { property: "og:image", content: "https://sreedevihospital.in/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:site_name", content: "SreeDevi Hospital & Fertility Centre" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SreeDevi Hospital & Fertility Centre — Srirangam" },
      {
        name: "twitter:description",
        content:
          "Manyata-certified maternity, fertility & IVF, women's health, general medicine, diabetes and respiratory care in Srirangam, Tiruchirappalli.",
      },
      { name: "twitter:image", content: "https://sreedevihospital.in/og-image.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <ScrollProgressBar />
      <DesktopCursorGlow />
      <div className="flex min-h-screen flex-col bg-[#fffcfd] text-[#1a2b49] selection:bg-[#ffc8d6] selection:text-[#7a1231]">
        <Header />
        <main className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <FloatingSocialMenu />
      </div>
    </QueryClientProvider>
  );
}
