import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Lamita — A Letter from Eyad" },
      { name: "description", content: "A private love letter for Lamita, written by Eyad." },
      { property: "og:title", content: "For Lamita — A Letter from Eyad" },
      { property: "og:description", content: "A private love letter for Lamita, written by Eyad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function RevealedParagraph({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Index() {
  const [opened, setOpened] = useState(false);
  const letterRef = useRef<HTMLElement>(null);

  const openLetter = () => {
    setOpened(true);
    window.setTimeout(() => letterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 420);
  };

  return (
    <main className="love-letter-atmosphere relative min-h-screen overflow-x-hidden text-invitation-foreground">
      <div aria-hidden="true" className="atmosphere-grain pointer-events-none fixed inset-0 opacity-20" />
      <section
        aria-label="A private letter for Lamita"
        className={`relative flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center transition-[opacity,transform] duration-1000 ${
          opened ? "pointer-events-none -translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div aria-hidden="true" className="opening-glow pointer-events-none absolute h-[34rem] w-[34rem] max-w-[95vw]" />
        <div className="relative z-10 flex w-full flex-col items-center">
          <h1 className="font-display text-5xl font-normal leading-none sm:text-7xl">for lamlam ♡</h1>
          <div className="letter-rule my-8 h-px w-28 opacity-60" />
          <Button variant="letter" onClick={openLetter} aria-label="Open Eyad's letter for Lamita">
            A little thing i wanna tell you, a fraction of the love i have for you. I love you so much
          </Button>
        </div>
      </section>

      {opened ? (
        <section ref={letterRef} className="relative mx-auto -mt-[100vh] w-full px-3 pb-20 pt-8 sm:px-7 sm:pb-32 sm:pt-16">
          <article className="parchment-sheet paper-arrive relative mx-auto max-w-[860px] overflow-hidden px-7 py-14 text-ink sm:px-16 sm:py-20 md:px-24 md:py-24">
            <div aria-hidden="true" className="parchment-curl absolute right-0 top-0 h-16 w-20 opacity-45" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 border border-parchment-deep/20" />
            <div className="relative z-10 font-body text-[1.2rem] leading-[1.78] sm:text-[1.35rem] sm:leading-[1.82]">
              <RevealedParagraph className="mb-8 font-display text-[2.6rem] leading-none sm:text-[3.35rem]">Dearest lamita,</RevealedParagraph>

              <RevealedParagraph className="mb-8">My truest love, my baby, my beginning, my ending, my life and my whole world. It is with a full heart i write this letter to you, a heart full of love and pure adoration for you.</RevealedParagraph>

              <RevealedParagraph className="mb-8">God has created me to love you, your life causes me to praise our god and his handiwork, i want to pick you up and lift you up to the heavens and scream at the top of my lungs praises to god for being such a wonderful artist. because you my sweetheart are beautiful. you are the most naturally stunning and perfect woman i have ever seen and cherished. the mere essence of you radiates the glory of a masterful creator. for how could god not be the most just, transcendent, divine, omnipotent lord when he has personally carved you from his hands and made you with ineffable splendor. after god blew his infinite life into your soul, he crowned you with the crown of creation, making you the most beautiful woman that has ever drawn breath. care for me to elaborate a little more on that? my baby, your not just merely beautiful, you are divine in nature. that body and stomach you dislike so much is the only body i wanna come back to, i wanna clasp my hands from behind you and lock them around that beautifully drawn and divine stomach, i wanna plop my head onto your shoulders and love you and give you all the love you deserve my beautiful baby.</RevealedParagraph>

              <RevealedParagraph className="mb-8 font-arabic text-[1.5rem] leading-[2] sm:text-[1.7rem]" ><p dir="rtl" lang="ar">حبيبتي, قلبي, عمري, روحي, عيني, نور عيني, يا حياتي، دنيتي، ملاكي، بهجة قلبي، اميرتي، شمسي، نجمتي، سنيني، فرحتي، نبضي، وجودي، ضحكتي، املي، و ملكتي.</p></RevealedParagraph>

              <RevealedParagraph className="mb-12">I love you as much as the desert love the rains, as much as the roots love the earth, as much as the sailor loves the shore, as much as the tide loves the rocking ship, as much as the poet loves the thrill and as much as the composer loves the harmony, as much as the rising sun loves the longing night, as much as the opening flower loves the sun. i always knew i loved you, i will continue loving you for loving you has been the best decision and the easiest ive ever took. i am so proud of you and everything youve done and ill always be your support system and number one supporter for you have ultimately made life feel like a dreamy, lucid heaven for me, removing my worries and always being there for me. i will always love you regardless of anything, of any sensitivity, issues, fights or whatever life throws at us for you are worth each and everything if it means i will get to call you mine forever till death. wanna know how worth it you are? i would knit my arteries into a cardigan if you told me you were cold, to provide you the warmth of my love that my blood carries throughout my body, i would pull the threads of every winter through the little spaces between my ribs and make you something warm enough to make you forget how cruel the world is. i would give you my last season of sunshine if it meant you would be happy and i wouldnt tell you ive been cold for years. you could ask me for warmth and i would hand you my fire and then sit quietly in my ashes, i would freeze as an icicle but id be grateful, for once, you arent the one shivering. its better to be kinder to you than me so i can be the best man for you ya hayate. I have no reason to give up on you, even if you show me the worst parts of yourself, ill still be here and no matter how bad your mood is sometimes or how bad things get, ill still choose you. i wont love anyone else, its always been you baby and it will always be you my dear, till death do us part. i love you so fucking much my baby, your my biggest treasure and my heaven. i love you so much.</RevealedParagraph>

              <RevealedParagraph className="font-display text-[2.4rem] leading-[1.15] sm:text-[3rem]">
                <p>Yours truly and infinitely,</p>
                <p className="mt-5">Eyad</p>
              </RevealedParagraph>
            </div>
          </article>
        </section>
      ) : null}
    </main>
  );
}
