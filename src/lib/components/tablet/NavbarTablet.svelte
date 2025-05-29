<script lang="ts">
    import ContactForm from "./ContactFormTablet.svelte";
    import { currentLang, switchLanguage } from '$lib/stores/language';
    import { page } from '$app/state';
    let scrolled = $state(false);

    function handleScroll() {
        scrolled = window.scrollY > 20;
    }

    // Browser-safe onMount scroll listener
    import { onMount } from 'svelte';
	import { goto } from "$app/navigation";

    let contact =$derived( page.url.pathname === "/contact");

    
    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    
    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center'});
        }
    }
    
    function handleLanguageSwitch(lang: string) {
        switchLanguage(lang);
    }
    
    let isOpen = $state(false); 
</script>
<div class="frame- fixed top-0 w-full z-10 pr-4" class:scrolled>
    <button on:click={() => {goto("/");scrollToSection("landing");}}>
        <img src="/images/лого.svg" class="ml-12" alt="logo">
    </button>
    <div class="frame-112 mr-4 flex-col md:flex-row">
        <div class="frame-56 flex-col md:flex-row items-center gap-4 md:gap-100">
            <div><button class="fspan hover:text-[#BDFD02]" on:click={() => scrollToSection("who")}>[хто ми?]</button></div>
            <div><button class="fspan_02 hover:text-[#BDFD02]" class:active={contact} on:click={() => {isOpen = true}}><span>[приєднатися]</span></button></div>
            <div><button class="fspan_03 hover:text-[#BDFD02]" on:click={() => scrollToSection("footer")}>[контакти]</button></div>
        </div>
        <div class="frame-57">
            <div class="frame-111">
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
</div>

<!-- <ContactForm isOpen={isOpen} onClose={() => (isOpen = false)} /> -->

<style>
.fspan {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.fspan_02 {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.fspan_03 {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}


.frame-56 {
    justify-content: flex-start;
    align-items: center;
    gap: 100px;
    display: flex;
}

.frame-111 {
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    display: flex;
}

.frame-57 {
    justify-content: flex-start;
    align-items: center;
    gap: 98px;
    display: flex;
}

.frame-112 {
    justify-content: flex-start;
    align-items: center;
    gap: 100px;
    display: flex;
}

.frame- {
    width: 100%;
    height: 100%;
    max-height: 100px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    transition: all 0.1s ease;
}


.frame-.scrolled {
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.5);
}

.lang-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.lang-button span {
    color: #C6C6C6;
    font-size: 20px;
    font-weight: 400;
    word-wrap: break-word;
}
.lang-button:hover span {
    color: #FF41df;
}
.lang-button.active:hover span {
    color: white;
}

.active span {
    color: #BDFD02;
    font-weight: 600;
}
</style>