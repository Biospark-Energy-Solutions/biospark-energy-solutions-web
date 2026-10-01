import Image from "next/image";
import Link from "next/link";
import { Box, Group, Stack, Text } from "@mantine/core";

const COMPANY_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Our team", href: "/about#team" },
  { label: "Impact", href: "/impact" },
  { label: "Blog & Resources", href: "/blog" },
] as const;

const EXPLORE_LINKS = [
  { label: "Innovation", href: "/innovation" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Gas Hub Locator", href: "/#community-gas-hub-locator" },
  { label: "Pricing", href: "/pricing" },
] as const;

const CONNECT_LINKS = [
  { label: "Contact", href: "/contact" },
  { label: "Partners", href: "/partners" },
  { label: "Work with us", href: "/contact" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <Stack gap="lg">
      <Text
        c="#7C9488"
        fw={600}
        tt="uppercase"
        style={{ fontSize: 11, letterSpacing: "0.16em" }}
      >
        {title}
      </Text>
      <Stack gap={14}>
        {links.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            className="group inline-flex w-fit items-center gap-2 text-[14px] text-[#E7EEE9] no-underline transition-colors hover:text-[#7CDB6A]"
          >
            <span className="h-px w-0 bg-[#7CDB6A] transition-all duration-200 group-hover:w-3" />
            {link.label}
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}

export function Footer() {
  return (
    <Box
      component="footer"
      className="relative mt-auto overflow-hidden bg-[#07140F] px-5 pt-16 pb-8 sm:px-8 md:px-12 md:pt-20 lg:px-16 xl:px-20"
    >
      <Box
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,219,106,0.45) 35%, rgba(255,112,67,0.4) 65%, transparent 100%)",
        }}
      />
      <Box
        className="pointer-events-none absolute -top-24 left-1/4 h-48 w-48 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124,219,106,0.22) 0%, transparent 70%)",
        }}
      />
      <Box
        className="pointer-events-none absolute -top-16 right-1/5 h-40 w-40 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,112,67,0.18) 0%, transparent 70%)",
        }}
      />

      <Box className="relative mx-auto max-w-[1200px]">
        <Box className="grid gap-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,1fr)] lg:gap-12">
          <Stack gap="xl" maw={300}>
            <Link href="/" className="inline-flex w-fit">
              <Image
                src="/logo.png"
                alt="Biospark"
                width={140}
                height={72}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <Text c="#B7C5BD" style={{ fontSize: 14, lineHeight: 1.7 }}>
              Turning organic waste into cleaner energy, useful resources and
              stronger local opportunities.
            </Text>

            <Group gap="sm">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#E7EEE9] backdrop-blur-sm transition-all duration-200 hover:border-[#7CDB6A]/40 hover:bg-[#7CDB6A]/10 hover:text-[#7CDB6A]"
                >
                  {social.icon}
                </Link>
              ))}
            </Group>
          </Stack>

          <FooterLinkGroup title="Company" links={COMPANY_LINKS} />
          <FooterLinkGroup title="Explore" links={EXPLORE_LINKS} />
          <FooterLinkGroup title="Connect" links={CONNECT_LINKS} />
        </Box>

        <Box className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <Text c="#7C9488" style={{ fontSize: 13 }}>
            © 2026 Biospark Energy Solutions. All rights reserved.
          </Text>

          <Group gap="lg">
            <Link
              href="/privacy"
              className="text-[13px] text-[#7C9488] no-underline transition-colors hover:text-[#E7EEE9]"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] text-[#7C9488] no-underline transition-colors hover:text-[#E7EEE9]"
            >
              Terms
            </Link>
          </Group>
        </Box>
      </Box>
    </Box>
  );
}
