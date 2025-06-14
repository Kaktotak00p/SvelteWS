<script>
    export let isOpen = false;
    export let onClose = () => {};

    let source = "";
    let isDropdownOpen = false;
    let selectedPosition = "Обрати";
    let selectedFile = null;
    let fileInputRef;
    let fileName = "Choose File";

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

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
            selectedFile = file;
            fileName = file.name;
        }
    }
</script>
{#if isOpen}


<div class="fixed inset-0 bg-black overflow-x-hidden overflow-y-auto z-40 mx-auto">
<div class="w-full h-full fixed bg-black overflow-hidden p-2">
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
</div>
    <button on:click={() => onClose()} class="absolute top-5 right-5 invert">
        <img src="/images/cross.svg" alt="logo">
    </button>
<div class="w-[680px] h-fit my-32 relative inset-0 bg-black overflow-y-auto overflow-x-hidden z-40 mx-auto border border-white rounded-[10px] shadow-[2px_2px_34px_0px_rgba(255,65,223,0.80)] pt-10 ">
    <div class=" w-fit mx-8 inline-flex flex-col justify-start items-center gap-14 pb-10">
        <div class="w-full self-stretch flex flex-col justify-center items-start gap-12">
        <input 
            id="name"
            type="text"
            placeholder="Ім'я*"
            class="w-full bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
        <input 
            id="name"
            type="text"
            placeholder="E-mail*"
            class="w-full bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
        <input 
            id="name"
            type="text"
            placeholder="Нік в Telegram*"
            class="w-full bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">На яку позицію відгукуєтесь?*</div>
                <div class="self-stretch flex flex-col justify-start items-start gap-[5px]">
        <div class="w-full flex flex-col justify-start items-start gap-[5px] relative">
            <button 
                on:click={toggleDropdown} 
                class="w-full flex flex-row justify-between cursor-pointer"
            >
                <div class="w-fit h-8 {selectedPosition === 'Обрати' ? 'text-zinc-500' : 'text-white'} text-xl font-normal font-['Craftwork_Grotesk']">{selectedPosition}</div>
                <img src="./images/Vector 16.svg" class:rotate-180={isDropdownOpen} />
            </button>
            <div class="w-full h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
            
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
                    <div class="w-16 h-16 relative bg-white/0 border border-fuchsia-500 rounded-[5px] flex justify-center items-center">
                        <img src="/images/fileIcon.svg">
                    </div>
                    <div class="w-80 inline-flex flex-col justify-start items-start gap-2.5">
                        <input 
                            type="file" 
                            bind:this={fileInputRef}
                            on:change={handleFileSelect}
                            accept=".jpg,.pdf,.csv"
                            class="hidden"
                            required
                        />
                        <div class="self-stretch p-2.5 bg-neutral-700 rounded-[5px] inline-flex justify-start items-center gap-7">
                            <button 
                                on:click={() => fileInputRef.click()} 
                                class="px-5 py-2.5 rounded-[5px] outline outline-1 outline-offset-[-0.50px] outline-lime-400 flex justify-start items-center gap-2.5"
                            >
                                <div class="flex justify-center items-center gap-3.5">
                                    <div class="justify-start {selectedFile ? 'text-fuchsia-500' : 'text-lime-400'} text-base font-medium font-['Poppins'] leading-snug truncate max-w-[200px]">
                                        {fileName}
                                    </div>
                                </div>
                            </button>
                            <div class="flex justify-center items-center gap-2.5">
                                <div class="justify-start text-zinc-400 text-base font-normal font-['Inter'] leading-snug">JPG, PDF, CVS</div>
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
                            <img src="/images/selected.svg"/>
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
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
            <label for="reasons" class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">
                3 причини, щоб дати тобі джоб-оффер від TraffHub
            </label>
            <textarea 
                id="reasons"
                class="w-full min-h-[120px] bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border border-slate-600 rounded-[5px] p-3 focus:border-white focus:outline-none resize-y"
                required
            ></textarea>
        </div>
            <button class="w-64 h-14 px-5 py-3.5 bg-fuchsia-500 rounded inline-flex justify-center items-center gap-2.5 mx-auto">
                <span class="w-56 self-stretch justify-center text-white text-2xl font-bold font-['Craftwork_Grotesk']">ВІДГУКНУТИСЬ</span>
            </button>
        </div>
    </div>
</div>
<div class="left-[35px] top-[43px] absolute justify-start text-white text-4xl font-normal font-['Craftwork_Grotesk'] uppercase">//:відгукнутись на вакансію</div>
</div>

{/if}