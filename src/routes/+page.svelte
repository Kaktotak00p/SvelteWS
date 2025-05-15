<script>
	import Footer from "$lib/components/desktop/Footer.svelte";
  import Landing from "$lib/components/desktop/Landing.svelte";
	import Partners from "$lib/components/desktop/Partners.svelte";
  import Perevagi from "$lib/components/desktop/Perevagi.svelte";
  import WhoRWe from "$lib/components/desktop/WhoRWe.svelte";
	import FooterMobile from "$lib/components/mobile/FooterMobile.svelte";
	import LandingMobile from "$lib/components/mobile/LandingMobile.svelte";
	import PartnersMobile from "$lib/components/mobile/PartnersMobile.svelte";
	import PerevagiMobile from "$lib/components/mobile/PerevagiMobile.svelte";
	import WhoRWeMobile from "$lib/components/mobile/WhoRWeMobile.svelte";

  import { device } from "$lib/stores/device.js";

  // Subscribe to the device store
  $: isMobile = $device;  
</script>

<div class="layout">
  {#if !isMobile}
  <Landing />
  <WhoRWe />
  <Perevagi />
  <Partners />
  <Footer />
  {:else}
  <LandingMobile />
  <WhoRWeMobile />
  <PerevagiMobile />
  <PartnersMobile />
  <FooterMobile />
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