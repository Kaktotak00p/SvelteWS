<script>
  import Landing from "$lib/components/Landing.svelte";
  import Perevagi from "$lib/components/Perevagi.svelte";
  import WhoRWe from "$lib/components/WhoRWe.svelte";
</script>

<div class="layout">
  <Landing />
    <WhoRWe />
    <Perevagi />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>