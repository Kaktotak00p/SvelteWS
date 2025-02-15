<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import HamburgerMenu from '$lib/components/HamburgerMenu.svelte'
	import '../app.postcss';
</script>
  
  <div class="min-h-screen bg-black">
	<header>
	  <Navbar>
		  <svelte:fragment slot="hamburger-menu">
			  <HamburgerMenu/>
		  </svelte:fragment>
	  </Navbar>
	</header>
	<main class="container mx-auto p-4">
		<slot />
	</main>
  </div>