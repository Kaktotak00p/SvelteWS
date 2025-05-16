<script>
    export let isOpen = false;
    export let onClose = () => {};
    
    let source = "Instagram";
    let isDropdownOpen = false;
    let selectedPosition = "Media Buyer";

    const positions = [
        "Media Buyer",
        "Media Buyer",
        "Media Buyer",
        "Media Buyer"
    ];

    const sources = [
        "Instagram",
        "Реклама",
        "Від знайомих",
        "Інше"
    ];

    function setSource(value) {
        source = value;
    }

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }

    function selectPosition(position) {
        selectedPosition = position;
        isDropdownOpen = false;
    }
</script>
{#if isOpen}
<div class="w-full h-full fixed z-40 bg-black overflow-hidden p-2">
    <button on:click={() => onClose()} class="absolute top-5 right-5 invert">
        <img src="/images/cross.svg" alt="logo">
    </button>
    <div class="w-full justify-start text-white text-3xl font-normal font-['Craftwork_Grotesk'] uppercase">//:відгукнутись на вакансію</div>
    <div class="inline-flex flex-col justify-start items-start gap-2.5 my-1">
        <input 
            id="name"
            type="text"
            placeholder="Ім'я"
            class="w-96 bg-transparent text-white text-xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
    </div>
    <div class="inline-flex flex-col justify-start items-start gap-2.5 my-1">
        <input 
            id="email"
            type="email"
            placeholder="E-mail"
            class="w-96 bg-transparent text-white text-xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
    </div>
    <div class="inline-flex flex-col justify-start items-start gap-2.5 my-1">
        <input 
            id="telegram"
            type="text"
            placeholder="Нік в Telegram"
            class="w-96 bg-transparent text-white text-xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
    </div>
    <div class="inline-flex flex-col justify-start items-start gap-2.5 my-1">
        <div class="justify-center text-white text-xl font-normal font-['Craftwork_Grotesk']">На яку позицію відгукуєтесь?*</div>
        <div class="flex flex-col justify-start items-start gap-[5px] relative">
            <button 
                on:click={toggleDropdown} 
                class="w-full flex flex-row justify-between cursor-pointer"
            >
                <div class="w-fit h-8 text-zinc-500 text-xl font-normal font-['Craftwork_Grotesk']">{selectedPosition}</div>
                <img src="./images/Vector 16.svg" class:rotate-180={isDropdownOpen} />
            </button>
            <div class="w-96 h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
            
            {#if isDropdownOpen}
            <div class="absolute top-full left-0 inline-flex flex-col justify-start items-start gap-[5px] w-full bg-black z-50">
                {#each positions as position}
                    <button 
                        on:click={() => selectPosition(position)}
                        class="self-stretch h-8 justify-center text-white text-xl font-normal font-['Craftwork_Grotesk'] w-full text-left hover:bg-zinc-800"
                    >
                        {position}
                    </button>
                    <div class="w-80 h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-400"></div>
                {/each}
            </div>
            {/if}
        </div>
    </div>
    <div class="inline-flex flex-col justify-start items-start gap-2.5 my-1">
        <div class="self-stretch justify-center text-white text-xl font-normal font-['Craftwork_Grotesk']">Резюме/портфоліо*</div>
        <div class="inline-flex justify-start items-center gap-2.5">
            <div class="w-16 h-16 relative bg-white/0">
            <img src="./images/plImage.svg" />
            </div>
            <div class="w-72 inline-flex flex-col justify-start items-start gap-2.5">
                <div class="self-stretch p-2.5 bg-neutral-700 rounded-[5px] inline-flex justify-start items-center gap-5">
                    <div class="px-5 py-2.5 rounded-[5px] outline outline-1 outline-offset-[-0.50px] outline-lime-400 flex justify-start items-center gap-2.5">
                        <div class="flex justify-center items-center gap-3.5">
                            <div class="justify-start text-lime-400 text-base font-medium font-['Poppins'] leading-snug">Choose File</div>
                        </div>
                    </div>
                    <div class="flex justify-center items-center gap-2.5">
                        <div class="justify-start text-zinc-400 text-sm font-normal font-['Inter'] leading-snug">JPG, PDF, CVS </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="left-[15px] top-[644px]  inline-flex justify-start items-start gap-20">
        <div class="inline-flex flex-col justify-start items-start gap-4">
            <div class="justify-center text-white text-xl font-normal font-['Craftwork_Grotesk']">Звідки про нас дізнались*</div>
            <div class="flex flex-col justify-center items-start gap-3.5">
                <div class="inline-flex justify-start items-center gap-3.5">
                {#each sources.slice(0,2) as item}
                {#if item === source}
                    <div class="w-fit h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-white inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border bg-fuchsia-500"></div>
                            <div class="justify-center text-white text-xl font-normal font-['Craftwork_Grotesk']">{item}</div>
                        </div>
                    </div>
                {:else}
                    <button on:click={() => setSource(item)} class="w-fit h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border border-neutral-400"></div>
                            <div class="justify-center text-neutral-400 text-xl font-normal font-['Craftwork_Grotesk']">{item}</div>
                        </div>
                    </button>
                {/if}
                {/each}
                </div>
                <div class="inline-flex justify-start items-center gap-3.5">
                {#each sources.slice(2,4) as item}
                {#if item === source}
                    <div class="w-fit h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-white inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border bg-fuchsia-500"></div>
                            <div class="justify-center text-white text-xl font-normal font-['Craftwork_Grotesk'] text-nowrap">{item}</div>
                        </div>
                    </div>
                {:else}
                    <button on:click={() => setSource(item)} class="w-fit h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border border-neutral-400"></div>
                            <div class="justify-center text-neutral-400 text-xl font-normal font-['Craftwork_Grotesk'] text-nowrap">{item}</div>
                        </div>
                    </button>
                {/if}
                {/each}

                </div>
            </div>
        </div>
    </div>
    <div class="inline-flex flex-col justify-start items-start gap-[5px]">
        <div class="self-stretch justify-center text-zinc-500 text-xl font-normal font-['Craftwork_Grotesk']">Коментар</div>
        <div class="w-96 h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
    </div>
    <div class="w-full flex justify-center">
        <div class="w-64 h-14 px-5 py-3.5 bg-fuchsia-500 rounded inline-flex justify-center items-center gap-2.5 mt-2">
            <button class="text-center justify-center text-white text-xl font-bold font-['Craftwork_Grotesk']">ВІДГУКНУТИСЬ</button>
        </div>
    </div>
</div>
{/if}