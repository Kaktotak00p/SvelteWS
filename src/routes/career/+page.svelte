<script>
	import CLanding from "$lib/components/contact/desktop/CLanding.svelte";
	import Referal2D from "$lib/components/contact/desktop/Referal2D.svelte";
	import ReferalD from "$lib/components/contact/desktop/ReferalD.svelte";
	import VacanciesD from "$lib/components/contact/desktop/VacanciesD.svelte";
	import CardsM from "$lib/components/contact/mobile/CardsM.svelte";
	import CLandingM from "$lib/components/contact/mobile/CLandingM.svelte";
	import Referal2M from "$lib/components/contact/mobile/Referal2M.svelte";
	import ReferalM from "$lib/components/contact/mobile/ReferalM.svelte";
	import VacanciesM from "$lib/components/contact/mobile/VacanciesM.svelte";
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
  <CLanding />
  <CardsT />
  <VacanciesD />
  <ReferalD />
  <Referal2D />
  <Art />
  <Footer />
  {:else if deviceType === 'mobile'}
  <CLandingM />
  <CardsM />
  <VacanciesM />
  <ReferalM />
  <Referal2M />
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