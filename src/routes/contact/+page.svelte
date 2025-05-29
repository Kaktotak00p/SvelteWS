<script>
	import CLanding from "$lib/components/contact/desktop/CLanding.svelte";
	import CardsT from "$lib/components/contact/tablet/CardsT.svelte";
	import CLandingT from "$lib/components/contact/tablet/CLandingT.svelte";
	import VacanciesT from "$lib/components/contact/tablet/VacanciesT.svelte";
	import Footer from "$lib/components/desktop/Footer.svelte";
	import FooterMobile from "$lib/components/mobile/FooterMobile.svelte";
	import FooterTablet from "$lib/components/tablet/FooterTablet.svelte";

  import { device } from "$lib/stores/device.js";

  // Subscribe to the device store
  $: deviceType = $device;  
</script>

<div class="layout">
  {#if deviceType === 'desktop'}
  <CLanding />
  <Footer />
  {:else if deviceType === 'mobile'}
  <FooterMobile />
  {:else if deviceType === 'tablet'}
  <CLandingT />
  <CardsT />
  <VacanciesT />
  <FooterTablet />
  {/if}
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: black;
  }
</style>