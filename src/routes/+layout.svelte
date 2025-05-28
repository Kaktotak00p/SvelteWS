<script>
	import Navbar from '$lib/components/desktop/Navbar.svelte';
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { device } from '$lib/stores/device.js';
	import { DeviceType } from '$lib/stores/device.js';
	import NavbarMobile from '$lib/components/mobile/NavbarMobile.svelte';
	import NavbarTablet from '$lib/components/tablet/NavbarTablet.svelte';

	export let deviceType = 'desktop';

	// Subscribe to the device store
	$: deviceType = $device;

	onMount(() => {
		const checkDeviceType = () => {
			if (window.matchMedia('(max-width: 767px)').matches) {
				return DeviceType.MOBILE;
			} else if (window.matchMedia('(max-width: 1400px)').matches) {
				return DeviceType.TABLET;
			}
			return DeviceType.DESKTOP;
		};

		// set initial value
		deviceType = checkDeviceType();
		device.set(deviceType);

		// subscribe to changes
		const handler = () => {
			deviceType = checkDeviceType();
			device.set(deviceType);
		};

		window.addEventListener('resize', handler);
		return () => window.removeEventListener('resize', handler);
	});
</script>

<div class="min-h-screen bg-black">
	<header>
		{#if deviceType === 'desktop'}
			<Navbar />
		{:else if deviceType === 'mobile'}
			<NavbarMobile />
		{:else if deviceType === 'tablet'}
			<NavbarTablet />
		{/if}
	</header>
	<main class="container mx-auto min-w-full pt-4">
		<slot />
	</main>
</div>
