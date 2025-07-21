<script>
	import CLanding from "$lib/components/contact/desktop/CLanding.svelte";
	import Referal2D from "$lib/components/contact/desktop/Referal2D.svelte";
	import ReferalD from "$lib/components/contact/desktop/ReferalD.svelte";
	import VacanciesD from "$lib/components/contact/desktop/VacanciesD.svelte";
	import CLandingM from "$lib/components/contact/mobile/CLandingM.svelte";
	import Referal2M from "$lib/components/contact/mobile/Referal2M.svelte";
	import ReferalM from "$lib/components/contact/mobile/ReferalM.svelte";
	import VacanciesM from "$lib/components/contact/mobile/VacanciesM.svelte";
	import CLandingT from "$lib/components/contact/tablet/CLandingT.svelte";
	import Referal2T from "$lib/components/contact/tablet/Referal2T.svelte";
	import ReferalT from "$lib/components/contact/tablet/ReferalT.svelte";
	import VacanciesT from "$lib/components/contact/tablet/VacanciesT.svelte";
	import Footer from "$lib/components/desktop/Footer.svelte";
  import Landing from "$lib/components/desktop/Landing.svelte";
	import Partners from "$lib/components/desktop/Partners.svelte";
  import Perevagi from "$lib/components/desktop/Perevagi.svelte";
	import ReferalForm from "$lib/components/desktop/ReferalForm.svelte";
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
  <CLanding />
  <VacanciesD />
  <ReferalD />
  <Referal2D />
  <Partners />
  <Footer />
  {:else if deviceType === 'mobile'}
  <LandingMobile />
  <WhoRWeMobile />
  <PerevagiMobile />
  <CLandingM />
  <VacanciesM />
  <ReferalM />
  <Referal2M />
  <PartnersMobile />
  <FooterMobile />
  {:else if deviceType === 'tablet'}
  <LandingTablet />
  <WhoRWeTablet />
  <PerevagiTablet />
  <CLandingT />
  <VacanciesT />
  <ReferalT />
  <Referal2T />
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