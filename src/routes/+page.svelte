<script>
	import Career from "$lib/components/Career.svelte";
	import Footer from "$lib/components/Footer.svelte";
  import Landing from "$lib/components/Landing.svelte";
	import Partners from "$lib/components/Partners.svelte";
  import Perevagi from "$lib/components/Perevagi.svelte";
  import WhoRWe from "$lib/components/WhoRWe.svelte";
</script>

<div class="layout">
  <Landing />
    <WhoRWe />
    <Perevagi />
    <Partners />
    <!-- <Career /> -->
    <Footer />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: black;
  }
</style>