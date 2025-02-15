<script lang="ts">
</script>

<nav class="bg-gray-800 p-4">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center">
        <a href="#" class="text-white font-bold text-xl mr-4">TRAFFHUB</a>
        <div class="md:hidden">
          <slot name="hamburger-menu" />
        </div>
    </div>
    <div class="hidden md:flex space-x-4">
      <a href="#module1" class="text-gray-300 hover:text-white">Module 1</a>
      <a href="#module2" class="text-gray-300 hover:text-white">Module 2</a>
      <a href="#module3" class="text-gray-300 hover:text-white">Module 3</a>
    </div>
  </div>
</nav>