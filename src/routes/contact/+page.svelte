<script>
	import CLanding from "$lib/components/contact/desktop/CLanding.svelte";
	import Referal2D from "$lib/components/contact/desktop/Referal2D.svelte";
	import VacanciesD from "$lib/components/contact/desktop/VacanciesD.svelte";
	import Art from "$lib/components/contact/tablet/Art.svelte";
	import CardsT from "$lib/components/contact/tablet/CardsT.svelte";
	import CLandingT from "$lib/components/contact/tablet/CLandingT.svelte";
	import Referal2T from "$lib/components/contact/tablet/Referal2T.svelte";
	import ReferalT from "$lib/components/contact/tablet/ReferalT.svelte";
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
  <CLandingT />
  <CardsT />
  <VacanciesD />
  <ReferalT />
  <Referal2D />
  <Art />
  <Footer />
  {:else if deviceType === 'mobile'}
  <Art />
  <FooterMobile />
  {:else if deviceType === 'tablet'}
  <CLandingT />
  <CardsT />
  <VacanciesT />
  <ReferalT />
  <Referal2T />
  <Art />
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