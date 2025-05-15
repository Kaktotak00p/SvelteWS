<script>
    import ContactForm from "./ContactFormMobile.svelte";
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center'});
        }
    }
    
    // Add language state management
    let currentLang = 'ua'; // Default language

    let isOpen = false; 
    
    function switchLanguage(lang) {
        currentLang = lang;
        console.log(`Language switched to: ${lang}`);
    }
</script>

<div class="frame- fixed top-0 w-full z-10 pr-4">
    <button on:click={() => scrollToSection("landing")}>
        <img src="/images/лого.svg" class="ml-12" alt="logo">
    </button>
    <div class="frame-112 mr-4">
        <div class="frame-56">
            <div><button class="fspan" on:click={() => scrollToSection("who")}>[хто ми?]</button></div>
            <div><button class="fspan_02" on:click={() => {isOpen = true}}>[приєднатися]</button></div>
            <div><button class="fspan_03" on:click={() => scrollToSection("footer")}>[контакти]</button></div>
        </div>
        <div class="frame-57">
            <div class="frame-111">
                <button 
                    class="lang-button" 
                    class:active={currentLang === 'ua'} 
                    on:click={() => switchLanguage('ua')}
                >
                    <span class="font-Inter">[UA]</span>
                </button>
                <button 
                    class="lang-button" 
                    class:active={currentLang === 'en'} 
                    on:click={() => switchLanguage('en')}
                >
                    <span class="font-Inter">[EN]</span>
                </button>
            </div>
        </div>
    </div>
</div>

<ContactForm isOpen={isOpen} onClose={() => (isOpen = false)} />
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
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
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

.lang-button.active span {
    color: #BDFD02;
    font-weight: 600;
}
</style>