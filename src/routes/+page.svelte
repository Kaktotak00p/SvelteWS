<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const images = [
    '/images/partners/247.png',
    '/images/partners/betman.png',
    '/images/partners/glory.png',
    '/images/partners/most b.png',
    '/images/partners/mr bet.png',
    '/images/partners/v.png',
    '/images/partners/чили.png',
  ];

  let currentStart = 0;
  let displayedImages = [];
  let showImages = true;

  function updateImages() {
    displayedImages = Array.from({ length: 4 }, (_, i) => images[(currentStart + i) % images.length]);
    currentStart = (currentStart + 4) % images.length;
  }

  async function cycle() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    showImages = false;
    await new Promise(resolve => setTimeout(resolve, 500));
    updateImages();
    showImages = true;
  }

  onMount(() => {
    updateImages();
    const interval = setInterval(cycle, 3500);
    return () => clearInterval(interval);
  });
</script>

<main class="bg-black text-white min-h-screen flex flex-col">
    <!-- Hero / Top Section -->
    <div class=" h-8"></div>
    <section class=" h-fit rounded-xl border-brandGreen border-2" id="module1">
      <div class="max-w-7xl mx-auto px-4 py-16 h-3/4 flex">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 class="text-4xl font-bold mb-4">Lorem Ipsum Title</h1>
            <p class="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse placerat vulputate ex. Fusce vehicula gravida mi, 
              ac placerat ligula commodo vitae.
            </p>
            <button class="bg-brandGreen px-6 py-2 rounded text-black font-bold hover:bg-green-600">
              Call to Action
            </button>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <!-- Placeholder green shape -->
            <img src="/images/005.png" alt="Hero" class="w-96 h-96 object-contain" />
          </div>
        </div>
      </div>
    </section>

    <!-- Text -->
    <section class="py-32 h-auto px-4" id="module2">
      <h2 class="text-3xl font-bold mb-8">Lorem Ipsum Text</h2>
      <div class="max-w-7xl mx-auto px-4 flex flex-row">
        <div class="w-1/3"></div>
        <div class="w-1/3">
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse placerat vulputate ex. Fusce vehicula gravida mi, 
            ac placerat ligula commodo vitae
          </p>
        </div>
        <div class="w-1/3"></div>
      </div>
    </section>
  
    <!-- Advantages / Features -->
    <section class="bg-gray-900 py-16 h-auto" id="module2">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8">Lorem Ipsum Advantages</h2>
            <div 
              class="
                grid 
                grid-cols-2 grid-rows-4  gap-8
                md:grid-cols-4 md:grid-rows-2
              "
            >
              <!-- Empty placeholder (visible only at md and above) -->
              <div class="block"></div>
        
              <!-- Card 1 -->
            <div class="bg-no-repeat bg-center bg-contain bg-[url(images/CardGreenShort.png)] flex flex-col items-center text-center pt-16 p-12 text-xs text-gray-600 ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nisl sed magna.
                </p>
              </div>
        
              <!-- Card 2 -->
            <div class="bg-no-repeat bg-center bg-contain bg-[url(images/CardGreenShort.png)] flex flex-col items-center text-center pt-16 p-12 text-xs text-gray-600 ">
                <p>
                  Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat.
                </p>
              </div>
       
              <!-- Card 3 -->
            <div class="bg-no-repeat bg-center bg-contain bg-[url(images/CardGreenShort.png)] flex flex-col items-center text-center pt-16 p-12 text-xs text-gray-600 ">
                <p>
                  Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat.
                </p>
              </div>

              <!-- Card 4 -->
            <div class="bg-no-repeat bg-center bg-contain bg-[url(images/CardPinkShort.png)] flex flex-col items-center text-center pt-16 p-12 text-xs text-gray-600 ">
                <p>
                  Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat.
                </p>
              </div>

              <!-- Card 5 -->
            <div class="bg-no-repeat bg-center bg-contain bg-[url(images/CardPinkShort.png)] flex flex-col items-center text-center pt-16 p-12 text-xs text-gray-600 ">
                <p>
                  In dictum non nulla sit amet commodo. Maecenas feugiat sem id ex efficitur, a luctus orci finibus.
                </p>
              </div>
        
              <!-- Card 6 -->
            <div class="bg-no-repeat bg-center bg-contain bg-[url(images/CardPinkShort.png)] flex flex-col items-center text-center pt-16 p-12 text-xs text-gray-600 ">
                <p>
                  Quisque consequat justo nec est tristique, eget malesuada neque faucibus.
                </p>
              </div>
        
              <!-- Empty placeholder (visible only at md and above) -->
              <div class="block"></div>
            </div>
          </div>
    </section>
  
    <!-- Vacancies / Jobs -->
    <section class="py-16 h-auto" id="module3">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Lorem Ipsum Vacancies</h2>
        <ul class="space-y-4">
          <li class="border-b border-gray-700 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li class="border-b border-gray-700 pb-4">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li class="border-b border-gray-700 pb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </li>
          <li class="border-b border-gray-700 pb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </li>
        </ul>
      </div>
    </section>
  
    <!-- Partners / Logos -->
    <section class="bg-gray-900 py-16 h-auto" id="module4">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Lorem Ipsum Partners</h2>
        <!-- Container with overflow-hidden so sliding images don’t show outside -->
        <div class="overflow-hidden relative">
          {#if showImages}
            <!-- The fly transitions handle the slide effect:
                 - in: from left (x: -200)
                 - out: to right (x: 200) -->
            <div
              class="flex gap-8 justify-between min-h-44"
              in:fly={{ x: -200, duration: 500 }}
              out:fly={{ x: 200, duration: 500 }}
            >
              {#each displayedImages as img (img)}
                <img src={img} alt="Partner logo" class="w-32 h-40 object-contain" />
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </section>
  
    <!-- Sources -->
    <section class="py-16 h-auto" id="module5">
      <h2 class="text-3xl font-bold mb-8">Lorem Ipsum Sources</h2>
      <div class="flex flex-row space-x-8 justify-evenly">
        <!-- Source 1 -->
        <div class="transform rotate-45 hover:rotate-0 transition-transform duration-300">
          <img src="/images/sources/fb.png" alt="Source 1" class="w-24 h-24 object-contain" />
        </div>
        <!-- Source 2 -->
        <div class="transform rotate-45 hover:rotate-0 transition-transform duration-300">
          <img src="/images/sources/google.png" alt="Source 2" class="w-24 h-24 object-contain" />
        </div>
        <!-- Source 3 -->
        <div class="transform rotate-45 hover:rotate-0 transition-transform duration-300">
          <img src="/images/sources/tt.png" alt="Source 3" class="w-24 h-24 object-contain" />
        </div>
      </div>
    </section>

    <!-- Contact / Form -->
    <section class="py-16 h-auto" id="module5">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Lorem Ipsum Form</h2>
        <form class="grid grid-cols-1 gap-4 max-w-md">
          <input 
            type="text" 
            placeholder="Name" 
            class="p-2 rounded text-black"
          />
          <input 
            type="email" 
            placeholder="Email" 
            class="p-2 rounded text-black"
          />
          <textarea 
            placeholder="Message" 
            class="p-2 rounded text-black"
          ></textarea>
          <button 
            type="submit"
            class="bg-brandGreen px-6 py-2 rounded text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  
  </main>
