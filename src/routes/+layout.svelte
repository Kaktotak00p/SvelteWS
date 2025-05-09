<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>
  
  <div class="min-h-screen bg-black">
	<header>
	  <Navbar />
	</header>
	<main class="container min-w-full mx-auto p-4">
		<slot />
	</main>
  </div>