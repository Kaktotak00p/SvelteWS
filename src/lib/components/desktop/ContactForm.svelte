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


<div class="fixed inset-0 bg-black overflow-hidden z-40 mx-auto">
<div class="w-[1914px] h-[233px] relative">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-0 top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[953px] top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1914px] top-0 absolute  blur-[17px]">
</div>
<div class="w-[1914px] h-[233px] relative">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] -left-[317px] top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[636px] top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1597px] top-0 absolute  blur-[17px]">
</div>
<div class="w-[1915px] h-[233px] relative">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-0 top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[953px] top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1914px] top-0 absolute  blur-[17px]">
</div>
<div class="w-[1914px] h-[233px] relative">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] -left-[317px] top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[636px] top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1597px] top-0 absolute  blur-[17px]">
</div>
<div class="w-[1914px] h-[233px] relative">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-0 top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[953px] top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1914px] top-0 absolute  blur-[17px]">
</div>
<div class="w-[1914px] h-[233px] relative">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] -left-[317px] top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[636px] top-0 absolute  blur-[17px]">
  <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1597px] top-0 absolute  blur-[17px]">
</div>
    <button on:click={() => onClose()} class="absolute top-5 right-5 invert">
        <img src="/images/cross.svg" alt="logo">
    </button>
<div class="w-[680px] h-[832px] fixed top-[200px] inset-0 bg-black overflow-hidden z-40 mx-auto border border-white rounded-[10px] shadow-[2px_2px_34px_0px_rgba(255,65,223,0.80)]">
    <div class="w-[539px] top-[20px] left-4 absolute inline-flex flex-col justify-start items-start gap-14">
        <div class="self-stretch flex flex-col justify-start items-start gap-10">
        <input 
            id="name"
            type="text"
            placeholder="Ім'я"
            class="w-[539px] bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
        <input 
            id="name"
            type="text"
            placeholder="E-mail"
            class="w-[539px] bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
        <input 
            id="name"
            type="text"
            placeholder="Нік в Telegram"
            class="w-[539px] bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">На яку позицію відгукуєтесь?*</div>
                <div class="self-stretch flex flex-col justify-start items-start gap-[5px]">
        <div class="flex flex-col justify-start items-start gap-[5px] relative">
            <button 
                on:click={toggleDropdown} 
                class="w-full flex flex-row justify-between cursor-pointer"
            >
                <div class="w-fit h-8 text-zinc-500 text-xl font-normal font-['Craftwork_Grotesk']">{selectedPosition}</div>
                <img src="./images/Vector 16.svg" class:rotate-180={isDropdownOpen} />
            </button>
            <div class="w-[539px] h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
            
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
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">Резюме/портфоліо*</div>
                <div class="inline-flex justify-start items-center gap-5">
                    <div class="w-16 h-16 relative bg-white/0">
                        <div class="w-16 h-16 left-0 top-0 absolute rounded-[5px] border border-fuchsia-500"></div>
                        <div class="w-7 h-5 left-[17.77px] top-[20.25px] absolute bg-fuchsia-500"></div>
                        <div class="w-1.5 h-1.5 left-[21.29px] top-[23.35px] absolute bg-fuchsia-500 rounded-full"></div>
                        <div class="w-5 h-3 left-[21.29px] top-[26.25px] absolute bg-fuchsia-500 rounded-sm"></div>
                    </div>
                    <div class="w-80 inline-flex flex-col justify-start items-start gap-2.5">
                        <div class="self-stretch p-2.5 bg-neutral-700 rounded-[5px] inline-flex justify-start items-center gap-7">
                            <div class="px-5 py-2.5 rounded-[5px] outline outline-1 outline-offset-[-0.50px] outline-lime-400 flex justify-start items-center gap-2.5">
                                <div class="flex justify-center items-center gap-3.5">
                                    <div class="justify-start text-lime-400 text-base font-medium font-['Poppins'] leading-snug">Choose File</div>
                                </div>
                            </div>
                            <div class="flex justify-center items-center gap-2.5">
                                <div class="justify-start text-zinc-400 text-base font-normal font-['Inter'] leading-snug">JPG, PDF, CVS </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">Звідки про нас дізнались*</div>
                <div class="self-stretch inline-flex justify-start items-center gap-3.5">
                {#each sources as item}
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
    <div class="w-64 h-14 px-5 py-3.5 left-1/2 -translate-x-1/2 top-[678px] absolute bg-fuchsia-500 rounded inline-flex justify-center items-center gap-2.5">
        <button class="w-56 self-stretch justify-center text-white text-2xl font-bold font-['Craftwork_Grotesk']">ВІДГУКНУТИСЬ</button>
    </div>
    <div class="w-96 h-96 left-[855px] top-[159px] absolute bg-zinc-300"></div>
</div>
<div class="left-[35px] top-[43px] absolute justify-start text-white text-4xl font-normal font-['Craftwork_Grotesk'] uppercase">//:відгукнутись на вакансію</div>
</div>

{/if}