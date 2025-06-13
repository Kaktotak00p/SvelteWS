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
<div class="w-[680px] h-[632px] fixed top-[100px] inset-0 bg-black overflow-x-hidden overflow-y-auto z-40 mx-auto border border-white rounded-[10px] shadow-[2px_2px_34px_0px_rgba(255,65,223,0.80)] pt-10">
    <div class="w-full mx-auto inline-flex flex-col justify-start items-start gap-14">
        <div class="w-[90%] self-stretch flex flex-col justify-start items-start gap-10 mx-auto">
        <input 
            id="name"
            type="text"
            placeholder="Ім'я*"
            class="w-[539px] bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
        <input 
            id="name"
            type="text"
            placeholder="E-mail*"
            class="w-[539px] bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
        <input 
            id="name"
            type="text"
            placeholder="Нік в Telegram*"
            class="w-[539px] bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            required
        />
        <input 
            id="name"
            type="text"
            placeholder="Коментар"
            class="w-[539px] bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
        />
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">Резюме/портфоліо <span class=" text-slate-600">(опцiональ)</span></div>
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
            <button class="w-64 h-14 px-5 py-3.5 bg-fuchsia-500 rounded inline-flex justify-center items-center gap-2.5 mx-auto">
                <span class="w-56 self-stretch justify-center text-white text-2xl font-bold font-['Craftwork_Grotesk']">ВІДГУКНУТИСЬ</span>
            </button>
        </div>
    </div>
    <div class="w-96 h-96 left-[855px] top-[159px] absolute bg-zinc-300"></div>
</div>
<div class="left-[35px] top-[43px] absolute justify-start text-white text-4xl font-normal font-['Craftwork_Grotesk'] uppercase">//:реферальна програм</div>
</div>

{/if}