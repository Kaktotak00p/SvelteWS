<script lang="ts">
</script>

<nav class="bg-gray-800 p-4 fixed top-0 w-full z-10">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center">
        <a href="#" class="text-white font-bold text-xl mr-4">TRAFFHUB</a>
        <div class="md:hidden">
          <slot name="hamburger-menu" />
        </div>
    </div>
    <div class="hidden md:flex space-x-4">
      <a href="#module1" class="text-gray-300 hover:text-green-400">Module 1</a>
      <a href="#module2" class="text-gray-300 hover:text-green-400">Module 2</a>
      <a href="#module3" class="text-gray-300 hover:text-green-400">Module 3</a>
      <a href="#module4" class="text-gray-300 hover:text-green-400">Module 4</a>
      <a href="#module5" class="text-gray-300 hover:text-green-400">Module 5</a>
      <a href="#module6" class="text-gray-300 hover:text-green-400">Module 6</a>
      <a href="#module7" class="text-gray-300 hover:text-green-400">Module 7</a>
    </div>
  </div>
</nav>