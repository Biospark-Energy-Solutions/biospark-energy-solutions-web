"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Anchor,
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  Stack,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const NAV_LINKS = [
  { label: "Innovation", href: "/#innovation" },
  { label: "Products", href: "/#products" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Community Gas Hub Locator", href: "/#community-gas-hub-locator" },
] as const;

const SCROLL_DISTANCE = 80;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function Navbar() {
  const [opened, setOpened] = useState(false);
  const [scroll] = useWindowScroll();

  const progress = Math.min(scroll.y / SCROLL_DISTANCE, 1);
  const bgAlpha = lerp(0.1, 0.35, progress);
  const blur = lerp(0, 16, progress);
  const scrolled = progress > 0.35;

  const linkColor = scrolled ? "rgb(33, 37, 41)" : "rgb(255, 255, 255)";
  const burgerColor = scrolled ? "dark" : "white";

  return (
    <>
      <Box
        component="header"
        className="sticky top-0 z-100"
        style={{
          backgroundColor: `rgba(232, 232, 232, ${bgAlpha})`,
          backdropFilter: blur > 0.5 ? `blur(${blur}px)` : undefined,
          WebkitBackdropFilter: blur > 0.5 ? `blur(${blur}px)` : undefined,
          borderBottom: `1px solid rgba(255, 255, 255, ${progress * 0.08})`,
          transition: "background-color 0.2s ease, backdrop-filter 0.2s ease",
        }}
      >
        <Container size={1320} px={16} py={10}>
          <Group justify="space-between" wrap="nowrap" gap="md" h={36}>
            <Anchor
              component={Link}
              href="/"
              underline="never"
              className="shrink-0 leading-none"
            >
              <Image
                src="/logo.png"
                alt="Biospark"
                width={100}
                height={56}
                priority
                className="h-9 w-auto object-contain"
              />
            </Anchor>

            <Group gap="lg" visibleFrom="md" wrap="nowrap">
              {NAV_LINKS.map((link) => (
                <Anchor
                  key={link.href}
                  component={Link}
                  href={link.href}
                  underline="never"
                  size="sm"
                  fw={500}
                  style={{
                    color: linkColor,
                    fontSize: 14,
                    transition: "color 0.2s ease, opacity 0.2s ease",
                  }}
                  className="whitespace-nowrap opacity-90 hover:opacity-100"
                >
                  {link.label}
                </Anchor>
              ))}
            </Group>

            <Group gap="sm" wrap="nowrap" className="shrink-0">
            <></>

              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                color={burgerColor}
                size="sm"
                hiddenFrom="md"
                aria-label="Toggle navigation"
              />
            </Group>
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Image
            src="/logo.png"
            alt="Biospark"
            width={100}
            height={56}
            className="h-10 w-auto object-contain"
          />
        }
        padding="md"
        size="xs"
        position="right"
      >
        <Divider mb="md" />
        <Stack gap="sm">
          {NAV_LINKS.map((link) => (
            <Anchor
              key={link.href}
              component={Link}
              href={link.href}
              underline="never"
              c="dark.7"
              fw={500}
              py="xs"
              onClick={() => setOpened(false)}
            >
              {link.label}
            </Anchor>
          ))}
          <></>
          {/* <Button
            component={Link}
            href="/#contact"
            radius="xl"
            fullWidth
            mt="sm"
            onClick={() => setOpened(false)}
            style={{
              background:
                "linear-gradient(135deg, #FF6600 0%, #FF9F43 100%)",
              border: "none",
              boxShadow: "0 4px 14px rgba(255, 102, 0, 0.35)",
            }}
          >
            Get Started
          </Button> */}
        </Stack>
      </Drawer>
    </>
  );
}
