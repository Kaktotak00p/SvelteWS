<script>
	import Navbar from '$lib/components/desktop/Navbar.svelte';
	import '../app.postcss';
	import { onMount } from 'svelte';
	import {device} from '$lib/stores/device.js';
	import NavbarMobile from '$lib/components/mobile/NavbarMobile.svelte';

    export let isMobile = false;

    // Subscribe to the device store
    $: isMobile = $device;

    onMount(() => {
        const mql = window.matchMedia('(max-width: 768px)');

        // set initial value
        isMobile = mql.matches;
        device.set(mql.matches);

        // subscribe to changes
        const handler = (e) => {
            isMobile = e.matches;
            device.set(e.matches);
        };
        mql.addEventListener('change', handler);

        return () => {
            mql.removeEventListener('change', handler);
        };
    });

</script>
  
  <div class="min-h-screen bg-black">
	<header>
		{#if !isMobile}
	  <Navbar />
	  {:else}
	  <!-- <NavbarMobile /> -->
	  {/if}
	</header>
	<main class="container min-w-full mx-auto pt-4 ">
		<slot />
	</main>
  </div>