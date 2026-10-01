import Image from 'next/image';
import Link from 'next/link';
import {Box, Stack, Text, Title} from '@mantine/core';
import {HeroCarousel} from '../../components/HeroCarousel';

const HOW_IT_WORKS = [
	{
		step: '01',
		title: 'Organic waste is collected.',
		description:
			'Organic waste from kitchens, markets and other local sources becomes feedstock instead of being discarded.',
		image: '/images/how-it-works/image_organic.jpg',
		alt: 'Pile of organic waste collected as feedstock',
	},
	{
		step: '02',
		title: 'Spark365 does the work.',
		description:
			'Inside the biodigester, microbial activity breaks down the organic material and produces biogas.',
		image: '/images/how-it-works/image_spark-365.jpg',
		alt: 'Worker building a Spark365 biodigester',
	},
	{
		step: '03',
		title: 'Biogas becomes clean cooking fuel.',
		description:
			'The produced gas can be used for cooking, reducing dependence on firewood and charcoal.',
		image: '/images/how-it-works/image_biogas.jpg',
		alt: 'Blue flame on a biogas cooking stove',
	},
	{
		step: '04',
		title: 'Nutrients return to the soil.',
		description:
			'The remaining organic material becomes nutrient-rich biofertilizer that can support farms and gardens.',
		image: '/images/how-it-works/image_nutriets.jpg',
		alt: 'Biofertilizer collection tank in the field',
	},
] as const;

const PRODUCTS = [
	{
		category: 'Biogas Systems',
		title: 'Biodigester Systems',
		cta: 'View Systems',
		href: '/products',
		image: '/images/products/product-1.jpg',
		alt: 'Biospark biodigester drum with gas storage bag',
	},
	{
		category: 'Organic fertilizer',
		title: 'Nutrient-rich Biofertilizer',
		cta: 'View Biofertilizer',
		href: '/products',
		image: '/images/products/product-2.jpg',
		alt: 'Biofertilizer collection from a Biospark system',
	},
	{
		category: 'Spark365',
		title: 'Climate resilient microbial consortium',
		cta: 'View Spark365',
		href: '/innovation',
		image: '/images/products/product-3.jpg',
		alt: 'Biospark lab cultures in petri dishes',
	},
] as const;

const IMPACT_STATS = [
	{value: '15', label: 'communities reached'},
	{value: '1000+', label: 'People reached'},
	{value: '25000+', label: 'tCO2 Emissions Mitigated'},
	{value: '50+', label: 'Jobs created'},
	{value: '35000', label: 'tons of organic waste diverted'},
] as const;

const PARTNERS = [
	{
		name: 'IFRC',
		image: '/images/sponsors/ifrc.png',
		background: '#ffffff',
	},
	{
		name: 'Climate Launchpad',
		image: '/images/sponsors/climate-lauchpad.png',
		background: '#D6E05A',
	},
	{
		name: 'Youth & Women Greenovations',
		image: '/images/sponsors/greenovations.png',
		background: '#ffffff',
	},
	{
		name: 'BE green Africa',
		image: '/images/sponsors/begreen.png',
		background: '#0A0A0A',
	},
] as const;

function LinkIcon() {
	return (
		<svg width='16' height='16' viewBox='0 0 24 24' fill='none' aria-hidden>
			<path
				d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

function ArrowUpRightIcon() {
	return (
		<svg width='16' height='16' viewBox='0 0 24 24' fill='none' aria-hidden>
			<path
				d='M7 17L17 7M17 7H9M17 7v8'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

function SearchIcon() {
	return (
		<svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden>
			<circle
				cx='11'
				cy='11'
				r='7'
				stroke='currentColor'
				strokeWidth='2'
			/>
			<path
				d='M20 20l-3.5-3.5'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	);
}

function MapPinIcon() {
	return (
		<svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden>
			<path
				d='M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z'
				fill='currentColor'
			/>
			<circle cx='12' cy='10' r='2.5' fill='white' />
		</svg>
	);
}

const MAP_PINS = [
	{ top: '22%', left: '28%' },
	{ top: '38%', left: '62%' },
	{ top: '55%', left: '40%', active: true },
	{ top: '48%', left: '78%' },
	{ top: '68%', left: '58%' },
	{ top: '30%', left: '48%' },
] as const;

export default function Home() {
	return (
		<main className='flex flex-1 flex-col'>
			<HeroCarousel />

			<Box
				component='section'
				className='bg-[#F9F5F1] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20'
			>
				<Box className='mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20'>
					<Box className='relative aspect-[4/3] overflow-hidden rounded-[2rem]'>
						<Image
							src='/image_intro.jpg'
							alt='Biospark community members working with a biogas system'
							fill
							sizes='(max-width: 768px) 100vw, 50vw'
							className='object-cover'
						/>
					</Box>

					<Stack gap='lg' maw={460}>
						<Text c='#4a4a4a' fw={500} style={{fontSize: 15}}>
							What Biospark Does.
						</Text>

						<Title
							order={2}
							c='#3a3a3a'
							className='font-display text-[2rem] leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] md:text-[2.75rem]'
							style={{
								fontFamily:
									'var(--font-fraunces), Georgia, serif',
							}}
						>
							We turn waste into something useful.
						</Title>

						<Text
							c='#6b6b6b'
							style={{fontSize: 16, lineHeight: 1.7}}
						>
							Biospark converts organic waste into clean biogas
							for cooking and nutrient-rich biofertilizer —
							creating practical value from materials that would
							otherwise be discarded
						</Text>

						<Link
							href='/#solutions'
							className='mt-2 inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-[#2f2f2f] no-underline transition-opacity hover:opacity-70'
						>
							Discover how it works
							<LinkIcon />
						</Link>
					</Stack>
				</Box>
			</Box>

			<Box
				component='section'
				id='solutions'
				className='bg-white px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20'
			>
				<Box className='mx-auto max-w-[1200px]'>
					<Stack gap='xs' mb={{base: 40, md: 56}} maw={560}>
						<Text c='#6b6b6b' fw={500} style={{fontSize: 15}}>
							How Biospark Works
						</Text>
						<Title
							order={2}
							c='#3a3a3a'
							className='font-display text-[2rem] leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] md:text-[2.85rem]'
							style={{
								fontFamily:
									'var(--font-fraunces), Georgia, serif',
							}}
						>
							From organic waste to clean fuel
						</Title>
					</Stack>

					<Box className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
						{HOW_IT_WORKS.map((item) => (
							<Stack key={item.step} gap='md'>
								<Box className='relative aspect-[4/3] overflow-hidden rounded-3xl'>
									<Image
										src={item.image}
										alt={item.alt}
										fill
										sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
										className='object-cover'
									/>
								</Box>

								<Text
									c='#8a8a8a'
									fw={500}
									style={{fontSize: 13}}
								>
									{item.step}
								</Text>

								<Title
									order={3}
									c='#2f2f2f'
									className='font-display text-[1.25rem] leading-[1.25] tracking-[-0.01em] sm:text-[1.35rem]'
									style={{
										fontFamily:
											'var(--font-fraunces), Georgia, serif',
									}}
								>
									{item.title}
								</Title>

								<Text
									c='#7a7a7a'
									style={{fontSize: 14, lineHeight: 1.65}}
								>
									{item.description}
								</Text>
							</Stack>
						))}
					</Box>
				</Box>
			</Box>

			<Box
				component='section'
				id='innovation'
				className='bg-[#0A1915] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20'
			>
				<Box className='mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-20'>
					<Stack gap='lg' maw={520}>
						<Text
							c='#A8B5B0'
							fw={500}
							tt='uppercase'
							style={{fontSize: 12, letterSpacing: '0.14em'}}
						>
							Spark365 • Biospark Technology
						</Text>

						<Title
							order={2}
							c='white'
							className='font-display text-[2rem] leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] md:text-[2.85rem]'
							style={{
								fontFamily:
									'var(--font-fraunces), Georgia, serif',
							}}
						>
							Built for climate resiliency.
						</Title>

						<Text
							c='#D4DDD9'
							style={{fontSize: 16, lineHeight: 1.7}}
						>
							Spark365 combines climate-resilient biology with
							smarter system monitoring to improve the reliability
							of biogas production across changing seasonal
							conditions.
						</Text>

						<Stack gap='sm' mt='xs'>
							{[
								{
									step: '01',
									label: 'Climate-resilient microbial consortium',
								},
								{
									step: '02',
									label: 'Smart monitoring for system performance',
								},
							].map((feature) => (
								<Box
									key={feature.step}
									className='flex items-center gap-4 rounded-full border border-white/20 px-5 py-3.5'
								>
									<Text
										c='#A8B5B0'
										fw={500}
										style={{fontSize: 13}}
									>
										{feature.step}
									</Text>
									<Text
										c='white'
										fw={500}
										style={{fontSize: 14}}
									>
										{feature.label}
									</Text>
								</Box>
							))}
						</Stack>

						<Link
							href='/#innovation'
							className='mt-2 inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-white no-underline transition-opacity hover:opacity-70'
						>
							Explore Spark365
							<LinkIcon />
						</Link>
					</Stack>

					<Box className='relative aspect-[4/3] overflow-hidden rounded-[2rem]'>
						<Image
							src='/images/hero/hero-11.jpg'
							alt='Biospark scientists working with cultures and a microscope in the lab'
							fill
							sizes='(max-width: 768px) 100vw, 50vw'
							className='object-cover object-center'
						/>
					</Box>
				</Box>
			</Box>

			<Box
				component='section'
				id='community-gas-hub-locator'
				className='bg-[#E8EFE6] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20'
			>
				<Box className='mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-16'>
					<Stack gap='lg' maw={520}>
						<Box className='w-fit rounded-xl bg-white px-4 py-3 shadow-sm'>
							<Text
								c='#1f3a2e'
								fw={600}
								className='font-display'
								style={{
									fontFamily:
										'var(--font-fraunces), Georgia, serif',
									fontSize: 18,
								}}
							>
								Want to buy Biogas instead?
							</Text>
						</Box>

						<Text c='#3d5248' fw={500} style={{fontSize: 15}}>
							Find a Biospark Community Hub Near You.
						</Text>

						<Title
							order={2}
							c='#1f3a2e'
							className='font-display text-[2rem] leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] md:text-[2.85rem]'
							style={{
								fontFamily:
									'var(--font-fraunces), Georgia, serif',
							}}
						>
							Clean Energy Closer to You.
						</Title>

						<Text
							c='#4a5f54'
							style={{fontSize: 16, lineHeight: 1.7}}
						>
							Use our locator to find Biospark gas hubs, check
							nearby access points and get the information you
							need before visiting.
						</Text>

						<form
							action='/#community-gas-hub-locator'
							className='relative mt-1'
						>
							<label htmlFor='hub-search' className='sr-only'>
								Search City/community
							</label>
							<input
								id='hub-search'
								name='q'
								type='search'
								placeholder='Search City/community'
								className='h-12 w-full rounded-full border-0 bg-white px-5 pr-12 text-[15px] text-[#1f3a2e] shadow-sm outline-none placeholder:text-[#8a9a92] focus:ring-2 focus:ring-[#1f3a2e]/15'
							/>
							<button
								type='submit'
								aria-label='Search hubs'
								className='absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-[#1f3a2e] transition-colors hover:bg-[#1f3a2e]/5'
							>
								<SearchIcon />
							</button>
						</form>

						<a
							href='#community-gas-hub-locator'
							className='mt-1 inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-[#1f3a2e] no-underline transition-opacity hover:opacity-70'
						>
							Open Gas Hub Locator
							<ArrowUpRightIcon />
						</a>
					</Stack>

					<Box className='overflow-hidden rounded-[1.75rem] bg-[#F4F7F2] p-4 shadow-sm sm:p-5'>
						<form
							action='/#community-gas-hub-locator'
							className='relative mb-4'
						>
							<label htmlFor='map-hub-search' className='sr-only'>
								Find A Biospark Hub
							</label>
							<input
								id='map-hub-search'
								name='q'
								type='search'
								placeholder='Find A Biospark Hub'
								className='h-11 w-full rounded-full border border-[#1f3a2e]/10 bg-white px-4 pr-11 text-[14px] text-[#1f3a2e] outline-none placeholder:text-[#8a9a92] focus:ring-2 focus:ring-[#1f3a2e]/15'
							/>
							<button
								type='submit'
								aria-label='Search map hubs'
								className='absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#1f3a2e]'
							>
								<SearchIcon />
							</button>
						</form>

						<Box className='relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#D7E3D5]'>
							<Box
								className='absolute inset-0 opacity-40'
								style={{
									backgroundImage:
										'linear-gradient(#c5d4c3 1px, transparent 1px), linear-gradient(90deg, #c5d4c3 1px, transparent 1px)',
									backgroundSize: '48px 48px',
								}}
							/>

							{MAP_PINS.map((pin) => (
								<Box
									key={`${pin.top}-${pin.left}`}
									className={`absolute -translate-x-1/2 -translate-y-full ${
										'active' in pin && pin.active
											? 'z-10 text-[#1f3a2e]'
											: 'text-[#2f4a3c]/70'
									}`}
									style={{top: pin.top, left: pin.left}}
								>
									<MapPinIcon />
									{'active' in pin && pin.active ? (
										<Box className='absolute bottom-[calc(100%+8px)] left-1/2 w-44 -translate-x-1/2 rounded-xl bg-white p-3 shadow-md'>
											<Text
												c='#6b7c74'
												fw={600}
												tt='uppercase'
												style={{
													fontSize: 10,
													letterSpacing: '0.08em',
												}}
											>
												Biospark Gas Hub
											</Text>
											<Text
												c='#1f3a2e'
												fw={600}
												className='font-display mt-1'
												style={{
													fontFamily:
														'var(--font-fraunces), Georgia, serif',
													fontSize: 16,
													lineHeight: 1.25,
												}}
											>
												Farin Gada Market
											</Text>
											<a
												href='#community-gas-hub-locator'
												className='mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1f3a2e] no-underline hover:opacity-70'
											>
												View Location
												<ArrowUpRightIcon />
											</a>
										</Box>
									) : null}
								</Box>
							))}
						</Box>
					</Box>
				</Box>
			</Box>

			<Box
				component='section'
				id='products'
				className='bg-[#F9F5F1] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20'
			>
				<Box className='mx-auto max-w-[1200px]'>
					<Box className='mb-12 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between'>
						<Stack gap='xs' maw={560}>
							<Text
								c='#4a4a4a'
								fw={500}
								tt='uppercase'
								style={{fontSize: 13, letterSpacing: '0.08em'}}
							>
								Our Products
							</Text>
							<Title
								order={2}
								c='#1f2a24'
								className='font-display text-[2rem] leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] md:text-[2.85rem]'
								style={{
									fontFamily:
										'var(--font-fraunces), Georgia, serif',
								}}
							>
								Practical tools for cleaner energy
							</Title>
						</Stack>

						<Link
							href='/products'
							className='inline-flex w-fit shrink-0 items-center text-[15px] font-medium text-[#2f2f2f] no-underline transition-opacity hover:opacity-70'
						>
							View all products
						</Link>
					</Box>

					<Box className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
						{PRODUCTS.map((product) => (
							<Stack key={product.title} gap='md'>
								<Box className='relative aspect-[6/5] overflow-hidden rounded-3xl'>
									<Image
										src={product.image}
										alt={product.alt}
										fill
										sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
										className='object-cover'
									/>
								</Box>

								<Text
									c='#6b6b6b'
									fw={500}
									tt='uppercase'
									style={{
										fontSize: 12,
										letterSpacing: '0.08em',
									}}
								>
									{product.category}
								</Text>

								<Title
									order={3}
									c='#2f2f2f'
									className='font-display text-[1.35rem] leading-[1.25] tracking-[-0.01em] sm:text-[1.5rem]'
									style={{
										fontFamily:
											'var(--font-fraunces), Georgia, serif',
									}}
								>
									{product.title}
								</Title>

								<Link
									href={product.href}
									className='inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-[#2f2f2f] no-underline transition-opacity hover:opacity-70'
								>
									{product.cta}
									<LinkIcon />
								</Link>
							</Stack>
						))}
					</Box>
				</Box>
			</Box>

			<Box
				component='section'
				id='impact'
				className='bg-[#F9F5F1] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20'
			>
				<Box className='mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-20'>
					<Box className='relative aspect-square overflow-hidden rounded-[2rem]'>
						<Image
							src='/images/image_impact.jpg'
							alt='Biospark team processing organic feedstock with community members'
							fill
							sizes='(max-width: 768px) 100vw, 50vw'
							className='object-cover'
						/>
					</Box>

					<Stack gap='lg'>
						<Text
							c='#1f3a2e'
							fw={500}
							tt='uppercase'
							style={{fontSize: 13, letterSpacing: '0.1em'}}
						>
							Our Impact
						</Text>

						<Title
							order={2}
							c='#1f3a2e'
							className='font-display text-[2rem] leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] md:text-[2.85rem]'
							style={{
								fontFamily:
									'var(--font-fraunces), Georgia, serif',
							}}
						>
							Clean Energy that Keeps Giving Back
						</Title>

						<Text
							c='#3d5248'
							style={{fontSize: 16, lineHeight: 1.7}}
						>
							Our impact starts with replacing firewood and
							charcoal but it doesn&apos;t stop there. We reduce
							the burden around energy and waste, creating useful
							local resources and expanding opportunities within
							the communities we serve.
						</Text>

						<Stack gap={0} mt='xs'>
							{IMPACT_STATS.map((stat) => (
								<Box
									key={stat.label}
									className='flex items-baseline justify-between gap-6 border-b border-[#1f3a2e]/15 py-4 first:border-t'
								>
									<Text
										c='#1f3a2e'
										fw={600}
										className='font-display shrink-0'
										style={{
											fontFamily:
												'var(--font-fraunces), Georgia, serif',
											fontSize: 28,
											lineHeight: 1.1,
										}}
									>
										{stat.value}
									</Text>
									<Text
										c='#3d5248'
										className='text-right'
										style={{fontSize: 15}}
									>
										{stat.label}
									</Text>
								</Box>
							))}
						</Stack>

						<Link
							href='/impact'
							className='mt-2 inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-[#1f3a2e] no-underline transition-opacity hover:opacity-70'
						>
							Explore our Impact
							<ArrowUpRightIcon />
						</Link>
					</Stack>
				</Box>
			</Box>

			<Box
				component='section'
				className='bg-white px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20'
			>
				<Box className='mx-auto max-w-[1200px]'>
					<Stack gap='md' maw={640} mb={{base: 40, md: 48}}>
						<Text c='#8a8a8a' fw={500} style={{fontSize: 15}}>
							Recognition
						</Text>

						<Title
							order={2}
							c='#2f2f2f'
							className='font-display text-[2rem] leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] md:text-[2.85rem]'
							style={{
								fontFamily:
									'var(--font-fraunces), Georgia, serif',
							}}
						>
							Recognised for building what comes next.
						</Title>

						<Text
							c='#6b6b6b'
							maw={520}
							style={{fontSize: 16, lineHeight: 1.7}}
						>
							Our work has been recognised through climate
							innovation programmes, youth innovation platforms
							and international development networks.
						</Text>
					</Stack>

					<Box className='max-w-[720px]'>
						<Box className='relative mb-6 aspect-[16/10] overflow-hidden rounded-3xl'>
							<Image
								src='/images/recognition/reg-1.png'
								alt='Biospark Energy Solutions Limited winning first place at ClimateLaunchpad Regional Final'
								fill
								sizes='(max-width: 768px) 100vw, 720px'
								className='object-cover object-top'
							/>
						</Box>

						<Stack gap='xs' maw={520}>
							<Text
								c='#8a8a8a'
								fw={500}
								tt='uppercase'
								style={{fontSize: 12, letterSpacing: '0.1em'}}
							>
								ClimateLaunchpad 2026
							</Text>

							<Title
								order={3}
								c='#2f2f2f'
								className='font-display text-[1.5rem] leading-[1.2] tracking-[-0.01em] sm:text-[1.75rem]'
								style={{
									fontFamily:
										'var(--font-fraunces), Georgia, serif',
								}}
							>
								Nigeria & Regional Winner
							</Title>

							<Text
								c='#6b6b6b'
								style={{fontSize: 15, lineHeight: 1.65}}
							>
								Biospark advanced through the national and
								regional stages of ClimateLaunchpad and
								qualified for the global finals.
							</Text>
						</Stack>
					</Box>
				</Box>
			</Box>

			<Box
				component='section'
				className='bg-[#F8F5F0] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20'
			>
				<Box className='mx-auto max-w-[1200px]'>
					<Stack gap='md' maw={640} mb={{base: 40, md: 48}}>
						<Text
							c='#4a4a4a'
							fw={500}
							tt='uppercase'
							style={{fontSize: 13, letterSpacing: '0.1em'}}
						>
							Partners & Networks
						</Text>

						<Title
							order={2}
							c='#2f2f2f'
							className='font-display text-[2rem] leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] md:text-[2.85rem]'
							style={{
								fontFamily:
									'var(--font-fraunces), Georgia, serif',
							}}
						>
							We Have Grown Thanks to our Network
						</Title>

						<Text
							c='#6b6b6b'
							maw={520}
							style={{fontSize: 16, lineHeight: 1.7}}
						>
							We work across climate innovation, and local
							implementation to turn practical ideas into
							solutions communities can use.
						</Text>
					</Stack>

					<Box className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5'>
						{PARTNERS.map((partner) => (
							<Image
								key={partner.name}
								src={partner.image}
								alt={partner.name}
								width={220}
								height={100}
								className='h-auto max-h-16 w-auto max-w-full object-contain'
							/>
						))}
					</Box>
				</Box>
			</Box>

			<Box
				component='section'
				id='contact'
				className='bg-[#0F2A22] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20'
			>
				<Box className='mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16'>
					<Stack gap='lg' maw={640}>
						<Text
							c='#E8E4DC'
							style={{fontSize: 15, lineHeight: 1.5}}
						>
							Lets Accelerate Clean Energy Access and Build
							Resilient Communities
						</Text>

						<Title
							order={2}
							c='#F4F0E8'
							className='font-display text-[2rem] leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] md:text-[2.85rem]'
							style={{
								fontFamily:
									'var(--font-fraunces), Georgia, serif',
							}}
						>
							Waste Can Power Communities and Create Opportunities
						</Title>

						<Text
							c='#C9C4BA'
							maw={480}
							style={{fontSize: 16, lineHeight: 1.7}}
						>
							Whether you&apos;re looking for a clean-energy
							solution, partnership opportunity or a way to work
							with Biospark, we&apos;d like to hear from you.
						</Text>
					</Stack>

					<Stack gap='md' className='md:justify-self-end md:w-full md:max-w-[320px]'>
						<Link
							href='/contact'
							className='inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F4F0E8] px-6 py-4 text-[15px] font-semibold text-[#0F2A22] no-underline transition-opacity hover:opacity-90'
						>
							Talk to Biospark
							<ArrowUpRightIcon />
						</Link>

						<Link
							href='/solutions'
							className='inline-flex items-center justify-center rounded-2xl border border-[#F4F0E8]/35 px-6 py-4 text-[15px] font-semibold text-[#F4F0E8] no-underline transition-colors hover:border-[#F4F0E8]/70'
						>
							Explore our solutions
						</Link>
					</Stack>
				</Box>
			</Box>
		</main>
	);
}
