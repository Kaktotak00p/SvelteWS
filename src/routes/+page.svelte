<script>
  import Landing from "$lib/components/Landing.svelte";
  import Perevagi from "$lib/components/Perevagi.svelte";
  import WhoRWe from "$lib/components/WhoRWe.svelte";
</script>

<div class="layout">
  <Landing />
  <section class="who-section">
    <WhoRWe />
  </section>
  <section class="perevagi-section">
    <Perevagi />
  </section>
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  section {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 2rem 0;
  }
</style>