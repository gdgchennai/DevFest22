<script lang="ts">
	import Button from '$lib/button/Button.svelte';
	import Icon from '$lib/icon/Icon.svelte';
	let name: string = '';
	let email: string = '';

	const people = [
		{
			name: 'Leonard Krasner',
			role: 'Senior Designer',
			imageUrl:
				'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			twitterUrl: '#',
			linkedinUrl: '#'
		},

		{
			name: 'Leonard Krasner',
			role: 'Senior Designer',
			imageUrl:
				'https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80',
			twitterUrl: '#',
			linkedinUrl: '#'
		},

		{
			name: 'Leonard Krasner',
			role: 'Senior Designer',
			imageUrl:
				'https://images.unsplash.com/photo-1593080358201-08e4ff5f93d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			twitterUrl: '#',
			linkedinUrl: '#'
		},

		{
			name: 'Leonard Krasner',
			role: 'Senior Designer',
			imageUrl:
				'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			twitterUrl: '#',
			linkedinUrl: '#'
		},
		{
			name: 'Leonard Krasner',
			role: 'Senior Designer',
			imageUrl:
				'https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80',
			twitterUrl: '#',
			linkedinUrl: '#'
		},
		{
			name: 'Leonard Krasner',
			role: 'Senior Designer',
			imageUrl:
				'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
			twitterUrl: '#',
			linkedinUrl: '#'
		}
	];

	const includedFeatures = [
		'Private forum access',
		'Exciting sessions',
		'Networking opportunities',
		'Official member t-shirt'
	];

	const perks = [
		{
			name: 'Tech Talks',
			imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
			description:
				"We have a number of speakers lined up to talk about their experiences in the industry. We'll also have a few lightning talks from our members."
		},
		{
			name: 'Expert Speakers',
			imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
			description:
				'Experts from the industry will be on hand to answer your questions and give you advice on how to get into the industry.'
		},
		{
			name: 'Networking',
			imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
			description:
				'You will have the opportunity to network with other students and professionals in the industry.'
		},
		{
			name: 'Workshops',
			imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
			description:
				"We'll be running a number of workshops to help you get started in the industry. We'll also have a few lightning talks from our members."
		}
	];
</script>

<svelte:head>
	<title>GDG Chennai - Devfest 2022</title>
	<meta name="description" content="GDG Chennai - Devfest 2022" />
	<link href="http://fonts.cdnfonts.com/css/google-sans" rel="stylesheet" />
	<link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen" />
	<script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>
</svelte:head>

<div
	class="flex flex-col items-center justify-start space-y-16 md:space-y-44 p-8  min-h-screen overflow-hidden"
>
	<!-- // Blur -->
	<div class="relative w-full max-w-lg max-h-lg -z-10">
		<div
			class="absolute top-12 sm:top-24 -left-10 z-3 w-96 h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
		>
			<Icon width="500" height="500" name="blurgradient" />
		</div>
	</div>

	<!-- // Hero -->
	<section id="hero" class="flex flex-col items-center justify-start space-y-8  py-8 md:py-16">
		<div id="hero-content-group" class="flex flex-col items-center justify-start space-y-8">
			<h1
				class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-start md:text-center lg:text-center"
			>
				Chennai’s biggest tech conference happening now!
			</h1>
			<p class="max-w-2xl text-start md:text-center lg:text-center text-gray-700">
				Come. Learn, Network and Celebrate with Google Developer Groups and Google Developer
				Experts, learn to hack on Android, Chrome and Web while you are at it.
			</p>
		</div>

		<div
			id="hero-cta-group"
			class="w-full flex flex-col md:flex-row lg:flex-row max-w-2xl items-center justify-start space-y-4 md:space-x-4 md:space-y-0"
		>
			<Button
				id="button-hero-get-tickets"
				title="Get your tickets"
				onClick={() => console.log('Clicked get ticket button')}
			>
				<Icon width="20" height="20" name="ticket" />
			</Button>

			<Button
				id="button-hero-watch-trailer"
				title="Watch trailer"
				isSecondaryButton={true}
				onClick={() => console.log('Clicked get watch trailer button')}
			>
				<Icon width="20" height="20" name="video" />
			</Button>
		</div>
	</section>

	<!-- // Why -->
	<section id="why" class="flex w-full flex-col items-center justify-start space-y-6">
		<div class="bg-gray-50">
			<div class="pt-12 sm:pt-16 lg:pt-20">
				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div class="text-center">
						<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 ">
							Why attend?
						</h2>
						<p class="mt-4  sm:text-xl text-gray-600">
							We have a great lineup of speakers and sessions for you to learn and enhance your
							skills.
						</p>
					</div>
				</div>
			</div>
			<h2 class="sr-only">Our perks</h2>
			<div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
				<div
					class="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					{#each perks as perk}
						<div class="sm:flex">
							<div class="sm:flex-shrink-0">
								<div class="flow-root">
									<img class="h-24 w-28" src={perk.imageSrc} alt="" />
								</div>
							</div>
							<div class="mt-3 sm:mt-0 sm:ml-3">
								<h3 class="text-sm font-medium text-gray-900">{perk.name}</h3>
								<p class="mt-2 text-sm text-gray-500">{perk.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- // Tickets -->
	<section id="tickets" class="flex flex-col items-center justify-start space-y-6">
		<div class="bg-gray-100">
			<div class="pt-12 sm:pt-16 lg:pt-20">
				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div class="text-center">
						<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
							You won't get a better conference than this!
						</h2>
						<p class="mt-4  sm:text-xl text-gray-600">
							If you're not satisfied, contact us within the first 14 days and we'll send you a full
							refund.
						</p>
					</div>
				</div>
			</div>
			<div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
				<div class="relative">
					<div class="absolute inset-0 h-1/2 bg-gray-100" />
					<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div
							class="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none"
						>
							<div class="flex-1 bg-white px-6 py-8 lg:p-12">
								<h3 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
									Devfest 2022
								</h3>
								<p class="mt-6 text-base text-gray-500">
									Come. Learn, Network and Celebrate with Google Developer Groups and Google
									Developer Experts, learn to hack on Android, Chrome and Web while you are at it.
								</p>
								<div class="mt-8">
									<div class="flex items-center">
										<h4 class="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">
											What's included
										</h4>
										<div class="flex-1 border-t-2 border-gray-200" />
									</div>
									<ul
										role="list"
										class="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
									>
										{#each includedFeatures as feature}
											<li class="flex items-start lg:col-span-1">
												<div class="flex-shrink-0">
													<Icon width="20" height="20" name="check" />
												</div>
												<p class="ml-3 text-sm text-gray-700">{feature}</p>
											</li>
										{/each}
									</ul>
								</div>
							</div>
							<div
								class="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12"
							>
								<p class="text-lg font-medium leading-6 text-gray-900">Pay once, own it forever</p>
								<div
									class="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900"
								>
									<span>₹150</span>
									<span class="ml-3 text-xl font-medium tracking-normal text-gray-500">INR</span>
								</div>
								<p class="mt-4 text-sm">
									<a href="#" class="font-medium text-gray-500 underline">
										Learn about our membership policy
									</a>
								</p>
								<div class="mt-6">
									<div class="rounded-md shadow">
										<a
											href="#"
											class="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
										>
											Get Access to event
										</a>
									</div>
								</div>
								<div class="mt-4 text-sm">
									<a href="#" class="font-medium text-gray-900">
										Checkout agenda <span class="font-normal text-gray-500">(20MB)</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- // Partners -->
	<section id="partners" class="flex flex-col items-center justify-start space-y-6">
		<h2
			class="w-full flex text-3xl sm:text-4xl lg:text-5xl font-bold text-start md:text-center lg:text-center tracking-tight"
		>
			Sponspoed by top companies in the industry
		</h2>

		<div class="bg-white">
			<div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
				<div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
					<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img
							class="h-12"
							src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
							alt="Tuple"
						/>
					</div>
					<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img
							class="h-12"
							src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
							alt="Mirage"
						/>
					</div>
					<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img
							class="h-12"
							src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
							alt="StaticKit"
						/>
					</div>
					<div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
						<img
							class="h-12"
							src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
							alt="Transistor"
						/>
					</div>
					<div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
						<img
							class="h-12"
							src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
							alt="Workcation"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- // Memories -->
	<section id="memories" class="flex flex-col items-center justify-start space-y-6">
		<h2
			class="w-full flex text-3xl sm:text-4xl lg:text-5xl font-bold text-start md:text-center lg:text-center tracking-tight"
		>
			Devfest 2019 was a fun and memorable experience for many of us.
		</h2>
		<p class="max-w-2xl text-start md:text-center lg:text-center text-gray-700">
			Our team has worked hard to make this event a success. We are looking forward to make this
			event even better in 2022.
		</p>

		<div class="bg-white">
			<div class="mx-auto max-w-7xl py-12  lg:py-24">
				<ul
					role="list"
					class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8"
				>
					{#each people as person}
						<li>
							<div class="space-y-4">
								<div class="aspect-w-3 aspect-h-2">
									<img class="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<!-- // Newsletter -->
	<section id="newsletter" class="flex flex-col items-center justify-start space-y-6">
		<div class="relative flex w-full">
			<div class="flex w-full">
				<div
					class="relative w-full flex overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20"
				>
					<div class="relative">
						<div class="sm:text-center">
							<h2
								class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white sm:text-4xl"
							>
								Get notified when we&rsquo;re launching.
							</h2>
							<p class="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
								We&rsquo;re working hard to make this event even better. Sign up to get notified
								when we launch.
							</p>
						</div>
						<form
							action="https://send.pageclip.co/s2XDrRUZaJEeNwiAzMRd6ZnQKzk3mmgw/GDGChennai-Devfest"
							class="pageclip-form mt-12 sm:mx-auto sm:flex sm:max-w-lg flex flex-row items-center justify-center"
							method="post"
						>
							<div class="min-w-0 flex-1 space-y-3 flex-col md:flex-row">
								<label for="cta-name" class="sr-only">Full name</label>
								<input
									id="input-newsletter-name"
									type="text"
									class="w-full flex rounded-md border border-transparent px-5 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
									placeholder="Enter your name"
									bind:value={name}
								/>

								<label for="cta-email" class="sr-only">Email address</label>
								<input
									id="input-newsletter-email"
									type="email"
									class="flex w-full rounded-md border border-transparent px-5 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
									placeholder="Enter your email"
									bind:value={email}
								/>

								<button
									id="button-newsletter"
									type="button"
									class="pageclip-form__submit w-full inline-flex items-center justify-center rounded-lg border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
								>
									<span>Notify Me</span>
								</button>

								<p class="mt-3 text-sm text-start md:text-center text-indigo-100">
									We care about the protection of your data. Read our{' '}
									<a href="#" class="font-medium text-white underline"> Privacy Policy. </a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
