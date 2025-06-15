<script>
    export let isOpen = false;
    export let onClose = () => {};
    let selectedFile = null;
    let fileInputRef;
    let fileName = "Choose File";


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
    <button on:click={() => onClose()} class="absolute top-[43px] right-5 invert">
        <img src="/images/cross.svg" alt="logo">
    </button>
<div class="w-[110%] h-fit my-32 relative inset-0 bg-black overflow-y-auto overflow-x-hidden z-40 translate-x-[-1%] rounded-[30px] shadow-[2px_2px_34px_0px_rgba(255,65,223,0.80)] pt-10 ">
    <div class=" w-[93%] px-8 inline-flex flex-col justify-start items-center gap-14 pb-10">
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
            <label for="reasons" class="self-stretch justify-center text-white text-2xl font-normal px-[8px] font-['Craftwork_Grotesk']">
                Коментарі
            </label>
            <textarea 
                id="reasons"
                class="w-full min-h-[120px] bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border border-slate-600 rounded-[5px] p-3 focus:border-white focus:outline-none resize-y"
                required
            ></textarea>
        </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">Резюме/портфоліо</div>
                <div class="inline-flex justify-start items-center gap-5">
                    <div class="w-16 h-16 relative bg-white/0 border border-[#FF41df] rounded-[5px] flex justify-center items-center">
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
                                class="px-5 py-2.5 rounded-[5px] outline outline-1 outline-offset-[-0.50px] outline-[#BDFD00] flex justify-start items-center gap-2.5"
                            >
                                <div class="flex justify-center items-center gap-3.5">
                                    <div class="justify-start {selectedFile ? 'text-[#FF41df]' : 'text-[#BDFD00]'} text-base font-medium font-['Poppins'] leading-snug truncate max-w-[200px]">
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
            <button class="w-64 h-14 px-5 py-3.5 bg-[#FF41df] rounded inline-flex justify-center items-center gap-2.5 mx-auto">
                <span class="w-56 self-stretch justify-center text-white text-2xl font-bold font-['Craftwork_Grotesk']">ВІДГУКНУТИСЬ</span>
            </button>
        </div>
    </div>
</div>
<div class="left-[35px] top-[43px] absolute justify-start text-white text-4xl font-normal font-['Craftwork_Grotesk'] uppercase">//:відгукнутись на вакансію</div>
</div>

{/if}