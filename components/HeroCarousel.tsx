"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Anchor, Box, Group, Stack, Text, Title, UnstyledButton } from "@mantine/core";

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

const SLIDES: HeroSlide[] = [
  {
    eyebrow: "Climate-resilient community biogas systems",
    title: "Resilience starts with Spark365.",
    description:
      "We have built a climate-resilient microbial consortium isolated from our local environment, designed to support reliable biogas production through changing weather conditions.",
    ctaLabel: "Explore our science",
    ctaHref: "/innovation",
    image: "/images/hero/hero-1.jpg",
    imageAlt: "Biospark scientists examining a culture sample in the lab",
  },
  {
    eyebrow: "Clean cooking for every community",
    title: "Energy that works where you live.",
    description:
      "Our community gas hubs turn organic waste into affordable, reliable cooking fuel—reducing deforestation and cutting household energy costs across Nigeria.",
    ctaLabel: "Explore our products",
    ctaHref: "/products",
    image: "/images/hero/hero-1.jpg",
    imageAlt: "Biospark scientists examining a culture sample in the lab",
  },
  {
    eyebrow: "Local solutions, scalable impact",
    title: "Find a hub near you.",
    description:
      "Locate Biospark community gas hubs across the country and connect households, schools, and small businesses to cleaner energy operations.",
    ctaLabel: "Locate a gas hub",
    ctaHref: "/#community-gas-hub-locator",
    image: "/images/hero/hero-1.jpg",
    imageAlt: "Biospark scientists examining a culture sample in the lab",
  },
  {
    eyebrow: "Science-backed sustainability",
    title: "From lab to lasting change.",
    description:
      "Every system we deploy is grounded in applied microbiology—so communities get consistent biogas output while keeping carbon out of the atmosphere.",
    ctaLabel: "See our solutions",
    ctaHref: "/solutions",
    image: "/images/hero/hero-1.jpg",
    imageAlt: "Biospark scientists examining a culture sample in the lab",
  },
];

const AUTOPLAY_MS = 7000;

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
    setAnimKey((k) => k + 1);
  }, []);

  const previous = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
      setAnimKey((k) => k + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [index]);

  const slide = SLIDES[index];
  const counter = `${String(index + 1).padStart(2, "0")} / ${String(SLIDES.length).padStart(2, "0")}`;

  return (
    <Box
      component="section"
      className="relative -mt-[57px] flex min-h-svh w-full items-end overflow-hidden text-white md:items-center"
      aria-roledescription="carousel"
      aria-label="Biospark highlights"
    >
      {SLIDES.map((item, i) => (
        <Box
          key={item.title}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-[68%_center] md:object-center"
          />
        </Box>
      ))}

      <Box
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 28%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 58%)",
        }}
      />

      <Box className="relative z-10 flex min-h-svh w-full flex-col justify-end px-5 pb-8 pt-28 sm:px-8 md:justify-center md:px-12 md:pb-12 lg:px-16 xl:px-20">
        <Stack
          key={animKey}
          gap="md"
          maw={560}
          className="animate-[heroFade_600ms_ease-out]"
        >
          <Text
            tt="uppercase"
            fw={500}
            c="white"
            style={{
              fontSize: 12,
              letterSpacing: "0.14em",
              lineHeight: 1.4,
            }}
          >
            {slide.eyebrow}
          </Text>

          <Title
            order={1}
            c="white"
            className="font-display text-[2.35rem] leading-[1.08] tracking-[-0.02em] sm:text-5xl md:text-[3.4rem] lg:text-[3.75rem]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            {slide.title}
          </Title>

          <Text
            c="white"
            maw={480}
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              opacity: 0.92,
            }}
          >
            {slide.description}
          </Text>

          <Anchor
            component={Link}
            href={slide.ctaHref}
            underline="never"
            c="white"
            fw={500}
            className="mt-2 inline-flex w-fit items-center gap-2.5 transition-opacity hover:opacity-80"
            style={{ fontSize: 15 }}
          >
            {slide.ctaLabel}
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#2B6CB0]">
              <ArrowUpRightIcon />
            </span>
          </Anchor>
        </Stack>

        <Group justify="space-between" align="center" className="mt-16 w-full md:mt-24">
          {/* <Box
            className="rounded-full border border-white/70 px-3.5 py-1.5"
            aria-live="polite"
          >
            <Text c="white" fw={500} style={{ fontSize: 13, letterSpacing: "0.04em" }}>
              {counter}
            </Text>
          </Box> */}

          <Group gap="sm">
            <UnstyledButton
              onClick={previous}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35"
            >
              <ChevronLeftIcon />
            </UnstyledButton>
            <UnstyledButton
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35"
            >
              <ChevronRightIcon />
            </UnstyledButton>
          </Group>
        </Group>
      </Box>
    </Box>
  );
}
