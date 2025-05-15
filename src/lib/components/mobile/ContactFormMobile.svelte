<script>
    export let isOpen = false;
    export let onClose = () => {};
</script>
{#if isOpen}
<div class="w-full h-full fixed z-40 bg-black overflow-hidden p-2">
    <button on:click={() => onClose()} class="absolute top-5 right-5 invert">
        <img src="/images/cross.svg" alt="logo">
    </button>
    <div class="w-full justify-start text-white text-3xl font-normal font-['Craftwork_Grotesk'] uppercase">//:відгукнутись на вакансію</div>
    <div class="inline-flex flex-col justify-start items-start gap-2.5 my-1">
        <div class="self-stretch justify-center text-zinc-500 text-xl font-normal font-['Craftwork_Grotesk']">Ім’я*</div>
        <div class="w-96 h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
    </div>
    <div class="inline-flex flex-col justify-start items-start gap-2.5 my-1">
        <div class="self-stretch justify-center text-zinc-500 text-xl font-normal font-['Craftwork_Grotesk']">E-mail*</div>
        <div class="w-96 h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
    </div>
    <div class="inline-flex flex-col justify-start items-start gap-2.5 my-1">
        <div class="self-stretch justify-center text-zinc-500 text-xl font-normal font-['Craftwork_Grotesk']">Нік в Telegram*</div>
        <div class="w-96 h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
    </div>
    <div class="inline-flex flex-col justify-start items-start gap-2.5 my-1">
        <div class="justify-center text-white text-xl font-normal font-['Craftwork_Grotesk']">На яку позицію відгукуєтесь?*</div>
        <div class="flex flex-col justify-start items-start gap-[5px]">
            <div class="w-full flex flex-row justify-between">
                <div class="w-72 h-8 justify-center text-zinc-500 text-xl font-normal font-['Craftwork_Grotesk']">Media Buyer</div>
                <img src="./images/Vector 16.svg" />
            </div>
            <div class="w-96 h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
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
                    <div class="w-32 h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-white inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border bg-fuchsia-500"></div>
                            <div class="justify-center text-white text-xl font-normal font-['Craftwork_Grotesk']">Instagram</div>
                        </div>
                    </div>
                    <div class="w-32 h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border border-neutral-400"></div>
                            <div class="justify-center text-neutral-400 text-xl font-normal font-['Craftwork_Grotesk']">Реклама</div>
                        </div>
                    </div>
                </div>
                <div class="inline-flex justify-start items-center gap-3.5">
                    <div class="w-40 h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border border-neutral-400"></div>
                            <div class="justify-center text-neutral-400 text-xl font-normal font-['Craftwork_Grotesk'] text-nowrap">Від знайомих</div>
                        </div>
                    </div>
                    <div class="w-20 h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border border-neutral-400"></div>
                            <div class="justify-center text-neutral-400 text-xl font-normal font-['Craftwork_Grotesk']">Інше</div>
                        </div>
                    </div>
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
            <div class="text-center justify-center text-white text-xl font-bold font-['Craftwork_Grotesk']">ВІДГУКНУТИСЬ</div>
        </div>
    </div>
</div>
{/if}