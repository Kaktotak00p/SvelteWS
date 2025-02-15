<script lang="ts">
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<div class="md:hidden">
	<button class="focus:outline-none" on:click={toggleMenu}>
		<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>

	<div class="{isOpen ? 'block' : 'hidden'} absolute right-0 top-16 w-full bg-gray-700">
		<a href="#module1" class="block p-4 text-gray-300 hover:text-white" on:click={closeMenu}
			>Module 1</a
		>
		<a href="#module2" class="block p-4 text-gray-300 hover:text-white" on:click={closeMenu}
			>Module 2</a
		>
		<a href="#module3" class="block p-4 text-gray-300 hover:text-white" on:click={closeMenu}
			>Module 3</a
		>
	</div>
</div>
