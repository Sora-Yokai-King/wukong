import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import monkeyKing from "@/assets/monkey-king.png";
import heavenMountains from "@/assets/heaven-mountains.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ascend — Tap the Monkey King to Begin" },
      { name: "description", content: "An immersive ink-wash login: tap the Monkey King and watch him leap into the heavens." },
      { property: "og:title", content: "Ascend — Tap the Monkey King" },
      { property: "og:description", content: "Tap the Monkey King to ascend into the heavens." },
    ],
  }),
  component: Index,
});

function Index() {
  const [launched, setLaunched] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleTap = () => {
    if (launched) return;
    setLaunched(true);
    setTimeout(() => setLoggedIn(true), 2200);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Sky / mountains background */}
      <img
        src={heavenMountains}
        alt="Mist-wreathed mountains beneath a golden heavenly sky"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-110 animate-[drift_30s_ease-in-out_infinite_alternate]"
      />
      {/* Drifting cloud layers */}
      <div className="pointer-events-none absolute inset-0 cloud-layer cloud-1" />
      <div className="pointer-events-none absolute inset-0 cloud-layer cloud-2" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Title */}
      <div className={`absolute left-1/2 top-10 z-20 -translate-x-1/2 text-center transition-opacity duration-700 ${launched ? "opacity-0" : "opacity-100"}`}>
        <h1 className="font-serif text-3xl tracking-[0.3em] text-amber-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-5xl">
          ASCEND
        </h1>
        <p className="mt-2 text-xs tracking-[0.4em] text-amber-200/80 md:text-sm">
          TAP THE MONKEY KING TO ENTER THE HEAVENS
        </p>
      </div>

      {/* Monkey King */}
      <button
        onClick={handleTap}
        aria-label="Tap to log in"
        disabled={launched}
        className={`absolute left-1/2 z-10 -translate-x-1/2 cursor-pointer transition-none focus:outline-none ${
          launched ? "monkey-launch" : "monkey-idle"
        }`}
        style={{ bottom: "8%" }}
      >
        <img
          src={monkeyKing}
          alt="Stylized warrior Monkey King poised to leap"
          width={1024}
          height={1024}
          className="h-[60vh] w-auto max-w-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
        />
        {!launched && (
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-amber-300/20 blur-3xl animate-pulse" />
        )}
      </button>

      {/* Trail */}
      {launched && (
        <div className="pointer-events-none absolute left-1/2 bottom-0 z-[5] h-full w-32 -translate-x-1/2 trail-streak" />
      )}

      {/* Login bar */}
      {loggedIn && (
        <div className="absolute inset-0 z-30 flex items-center justify-center px-6 animate-[fade-in_0.9s_ease-out]">
          <div className="relative w-full max-w-md">
            {/* Cloud covering top-right corner */}
            <div className="pointer-events-none absolute -top-16 -right-20 h-56 w-72 rounded-full bg-white/70 blur-3xl" />
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-56 rounded-full bg-white/50 blur-2xl" />
            {/* Cloud covering bottom-left corner */}
            <div className="pointer-events-none absolute -bottom-16 -left-20 h-56 w-72 rounded-full bg-white/70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-56 rounded-full bg-white/50 blur-2xl" />

            {/* The login panel */}
            <div className="relative rounded-2xl border border-amber-200/30 bg-black/50 p-8 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.7)]">
              <div className="text-center">
                <h2 className="font-serif text-3xl tracking-[0.25em] text-amber-100">
                  ENTER THE GATE
                </h2>
                <p className="mt-3 text-xs italic tracking-[0.25em] text-amber-200/70">
                  Speak thy true name, traveler of the nine heavens
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 space-y-4"
              >
                <div>
                  <label className="block text-[10px] tracking-[0.35em] text-amber-200/70">
                    THY NAME
                  </label>
                  <input
                    type="text"
                    placeholder="whispered to the wind…"
                    className="mt-2 w-full rounded-md border border-amber-200/20 bg-black/40 px-4 py-3 text-amber-50 placeholder:text-amber-200/30 focus:border-amber-300/60 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.35em] text-amber-200/70">
                    SACRED SEAL
                  </label>
                  <input
                    type="password"
                    placeholder="known only to the stars…"
                    className="mt-2 w-full rounded-md border border-amber-200/20 bg-black/40 px-4 py-3 text-amber-50 placeholder:text-amber-200/30 focus:border-amber-300/60 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full rounded-md bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 py-3 text-sm font-semibold tracking-[0.3em] text-black transition hover:brightness-110"
                >
                  ASCEND
                </button>
              </form>

              <p className="mt-6 text-center text-[10px] italic tracking-[0.2em] text-amber-200/50">
                — only the worthy may cross the cloud bridge —
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
