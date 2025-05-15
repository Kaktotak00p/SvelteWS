<script>
    export let isOpen = false;
    export let onClose = () => {};
</script>
{#if isOpen}


<div class="fixed inset-0 bg-black overflow-hidden z-40 mx-auto">
<div class="w-[1440px] h-[1028px] fixed inset-0 bg-black overflow-hidden z-40 mx-auto">
    <button on:click={() => onClose()} class="absolute top-5 right-5 invert">
        <img src="/images/cross.svg" alt="logo">
    </button>
    <div class="w-[539px] left-[174px] top-[133px] absolute inline-flex flex-col justify-start items-start gap-14">
        <div class="self-stretch flex flex-col justify-start items-start gap-10">
            <div class="self-stretch flex flex-col justify-start items-start gap-[5px]">
                <div class="self-stretch justify-center text-zinc-500 text-2xl font-normal font-['Craftwork_Grotesk']">Ім’я*</div>
                <div class="w-[539px] h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-[5px]">
                <div class="self-stretch justify-center text-zinc-500 text-2xl font-normal font-['Craftwork_Grotesk']">E-mail*</div>
                <div class="w-[539px] h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-[5px]">
                <div class="self-stretch justify-center text-zinc-500 text-2xl font-normal font-['Craftwork_Grotesk']">Нік в Telegram*</div>
                <div class="w-[539px] h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">На яку позицію відгукуєтесь?*</div>
                <div class="self-stretch flex flex-col justify-start items-start gap-[5px]">
            <div class="w-full flex flex-row justify-between">
                <div class="w-72 h-8 justify-center text-zinc-500 text-xl font-normal font-['Craftwork_Grotesk']">Media Buyer</div>
                <img src="./images/Vector 16.svg" />
            </div>
            <div class="w-[539px] h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
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
                    <div class="w-36 h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-white inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border border-white"></div>
                            <div class="w-3.5 h-3.5 bg-fuchsia-500 rounded-full"></div>
                            <div class="justify-center text-white text-xl font-normal font-['Craftwork_Grotesk']">Instagram</div>
                        </div>
                    </div>
                    <div class="w-32 h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border border-neutral-400"></div>
                            <div class="justify-center text-neutral-400 text-xl font-normal font-['Craftwork_Grotesk']">Реклама</div>
                        </div>
                    </div>
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
    <div class="w-64 h-14 px-5 py-3.5 left-[1041px] top-[778px] absolute bg-fuchsia-500 rounded inline-flex justify-center items-center gap-2.5">
        <div class="w-56 self-stretch justify-center text-white text-2xl font-bold font-['Craftwork_Grotesk']">ВІДГУКНУТИСЬ</div>
    </div>
    <div class="w-96 h-96 left-[855px] top-[159px] absolute bg-zinc-300"></div>
    <div class="left-[35px] top-[43px] absolute justify-start text-white text-4xl font-normal font-['Craftwork_Grotesk'] uppercase">//:відгукнутись на вакансію</div>
</div>
</div>

{/if}