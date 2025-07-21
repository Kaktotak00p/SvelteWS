<script>
	import VacanciesM from "$lib/components/mobile/VacanciesM.svelte";
	import Art from "$lib/components/contact/tablet/Art.svelte";
	import VacanciesT from "$lib/components/tablet/VacanciesT.svelte";
	import Footer from "$lib/components/desktop/Footer.svelte";
  import Landing from "$lib/components/desktop/Landing.svelte";
	import Partners from "$lib/components/desktop/Partners.svelte";
  import Perevagi from "$lib/components/desktop/Perevagi.svelte";
	import Vacancies from "$lib/components/desktop/Vacancies.svelte";
  import WhoRWe from "$lib/components/desktop/WhoRWe.svelte";
	import FooterMobile from "$lib/components/mobile/FooterMobile.svelte";
	import LandingMobile from "$lib/components/mobile/LandingMobile.svelte";
	import PartnersMobile from "$lib/components/mobile/PartnersMobile.svelte";
	import PerevagiMobile from "$lib/components/mobile/PerevagiMobile.svelte";
	import WhoRWeMobile from "$lib/components/mobile/WhoRWeMobile.svelte";
	import FooterTablet from "$lib/components/tablet/FooterTablet.svelte";
	import LandingTablet from "$lib/components/tablet/LandingTablet.svelte";
	import PartnersTablet from "$lib/components/tablet/PartnersTablet.svelte";
	import PerevagiTablet from "$lib/components/tablet/PerevagiTablet.svelte";
	import WhoRWeTablet from "$lib/components/tablet/WhoRWeTablet.svelte";

  import { device } from "$lib/stores/device.js";

  // Subscribe to the device store
  $: deviceType = $device;  
</script>

<div class="layout">
  {#if deviceType === 'desktop'}
  <Landing />
  <WhoRWe />
  <Perevagi />
  <Vacancies />
  <Art />
  <Partners />
  <Footer />
  {:else if deviceType === 'mobile'}
  <LandingMobile />
  <WhoRWeMobile />
  <PerevagiMobile />
  <VacanciesM />
  <Art />
  <PartnersMobile />
  <FooterMobile />
  {:else if deviceType === 'tablet'}
  <LandingTablet />
  <WhoRWeTablet />
  <PerevagiTablet />
  <VacanciesT />
  <Art />
  <PartnersTablet />
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