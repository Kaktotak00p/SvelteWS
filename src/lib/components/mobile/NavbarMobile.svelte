<script>
    import ContactFormMobile from "./ContactFormMobile.svelte";
    import ContactForm from "./ContactFormMobile.svelte";
    import { onMount } from 'svelte';
    import { currentLang, switchLanguage } from '$lib/stores/language';
	import { goto } from "$app/navigation";
    import { page } from '$app/state';

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
    }
    
    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    // Add language state management
    let menuOpen = $state(false);

    let isOpen = $state(false); 
    
    let scrolled = $state(false);

    function handleScroll() {
        scrolled = (window.scrollY > 20) && !menuOpen;
    }

    function handleLanguageSwitch(lang) {
        switchLanguage(lang);
    }

    function openMenu() {
        menuOpen = true;
    }

    function closeMenu() {
        menuOpen = false;
    }
    let isHome = $derived(page.url.pathname === "/" || page.url.pathname === "");
    function handleWhoClick() {
        if (isHome) {
            scrollToSection("who");
        } else {
            goto("/?section=who");
        }
    }
</script>
<div class="w-full fixed top-0 z-40 inline-flex flex-col justify-start items-center gap-8" class:scrolled>
    {#if menuOpen}
    <div class="w-full h-[1000px] bg-[#BDFD00]">
        <div class="w-full h-[39px] px-5 py-5"><button class=" absolute top-5 right-5" on:click={() => closeMenu()}><img src="/images/cross.svg"/></button></div>
        <div class="inline-flex flex-col justify-center items-start gap-5 px-2">
            <button on:click={()=>{closeMenu(); handleWhoClick();}} class="justify-start text-black text-lg font-semibold font-['Craftwork_Grotesk']">[хто ми?]</button>
            <div class="w-80 h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-700"></div>
            <!-- <button class="justify-start text-black text-lg font-semibold font-['Craftwork_Grotesk']">[вакансії]</button>
            <div class="w-80 h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-700"></div> -->
            <button on:click={() => {closeMenu(); goto("/career")}} class="justify-start text-black text-lg font-semibold font-['Craftwork_Grotesk']">[приєднатися]</button>
            <div class="w-80 h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-700"></div>
            <button on:click={()=>{closeMenu(); scrollToSection("footer")}} class="justify-start text-black text-lg font-semibold font-['Craftwork_Grotesk']">[контакти]</button>
        </div>
    </div>
    {:else}
    <div class="self-stretch flex flex-col justify-start items-center gap-4 mt-4">
        <div class="w-full inline-flex justify-between items-center">
            <button on:click={()=>openMenu()} class="w-[110px] inline-flex flex-col justify-start items-center gap-2.5">
                <div class="w-10 h-0 outline outline-[2px] outline-offset-[-1.50px] outline-[#BDFD00]"></div>
                <div class="w-10 h-0 outline outline-[2px] outline-offset-[-1.50px] outline-[#BDFD00]"></div>
                <div class="w-10 h-0 outline outline-[2px] outline-offset-[-1.50px] outline-[#BDFD00]"></div>
            </button>

            <button on:click={() => {goto("/");scrollToSection("landing")}}>
                <img src="/images/лого.svg" alt="logo" class="w-[120px]">
            </button>

            <div class=" pr-[20px] flex justify-start items-center gap-24">
                <div class="flex justify-start items-center gap-2.5">
               <button 
                    class="lang-button" 
                    class:active={$currentLang === 'ua'} 
                    on:click={() => handleLanguageSwitch('ua')}
                >
                    <span class="font-Inter">[UA]</span>
                </button>
                <button 
                    class="lang-button" 
                    class:active={$currentLang === 'en'} 
                    on:click={() => handleLanguageSwitch('en')}
                >
                    <span class="font-Inter">[EN]</span>
                </button>
                </div>
            </div>
        </div>
        <div class="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-[#BDFD00]"></div>
    </div>
    {/if}
</div>

<ContactFormMobile isOpen={isOpen} onClose={() => (isOpen = false)} />

<style>
.lang-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.lang-button span {
    color: #C6C6C6;
    font-size: 18px;
    font-weight: 400;
    word-wrap: break-word;
}

.lang-button.active span {
    color: #BDFD02;
    font-weight: 600;
}

.frame- {
    width: 100%;
    height: 100%;
    max-height: 100px;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
    transition: all 0.1s ease;
}

.scrolled {
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.5);
}
</style>