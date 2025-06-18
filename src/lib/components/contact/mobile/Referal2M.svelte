<script>
	import ReferalFormMobile from "$lib/components/mobile/ReferalFormMobile.svelte";


    let isOpen = false;
</script>

<div class="w-full  relative bg-[#020202] overflow-hidden">
    <div class="w-[374px] h-[108px] inline-flex justify-start items-center px-[25px] text-nowrap">
        <div class="justify-start text-white text-[26px] font-normal font-['Craftwork_Grotesk'] uppercase">[Що буде?]</div>
        <img class="w-[88px] h-[88px] rotate-[225deg] " src="/images/arrowWhite.png" />
        <div class="justify-start text-white text-[26px] font-black font-['Craftwork_Grotesk'] uppercase">ГРОШІ!</div>
    </div>
    <div class="flex flex-col justify-center px-[25px] w-full gap-[10px]">
        <div class="w-full h-[171px] bg-[#bdfd02] rounded-md border-1 border-black relative flex flex-col items-center">
            <div class="w-[234px] inline-flex flex-col justify-start items-center">
                <img src="/images/Vector 1.svg" class="absolute top-[-5px] right-[-5px]" />
                <div class="text-center justify-start text-[#111111] text-[78px] font-black font-['Craftwork_Grotesk'] uppercase">$200</div>
                <div class="w-[257px] text-center justify-start text-[#111111] text-lg font-normal font-['Craftwork_Grotesk'] leading-[18px]">фіксована виплата після випробовувального (1 місяць)</div>
            </div>
        </div>
        <div class="text-[#bdfd02] text-[78px] font-black font-['Craftwork_Grotesk'] uppercase mx-auto">+</div>
        <div class="w-full h-[171px] bg-[#bdfd02] rounded-md border-1 border-black relative flex flex-col items-center">
            <div class="w-[234px inline-flex flex-col justify-start items-center">
                <img src="/images/Vector 1.svg" class="absolute top-[-5px] right-[-5px]" />
                <div class="self-stretch text-center justify-start text-[#111111] text-[78px] font-black font-['Craftwork_Grotesk'] uppercase">5%</div>
                <div class="w-[233px] text-center justify-start text-[#111111] text-lg font-normal font-['Craftwork_Grotesk'] leading-[18px]">від чистого профіту байера з урахуванням всіх костів</div>
                <div class="w-[234px] h-[18px] top-[170px] absolute text-center justify-start text-[#a0a0a0] text-lg font-normal font-['Craftwork_Grotesk'] leading-[18px] pt-1">(протягом 5 місяців)</div>
            </div>
        </div>
    </div>
    <div class="left-[25px] justify-start text-white text-[26px] font-normal font-['Craftwork_Grotesk'] uppercase px-[25px] py-5">ПРИКЛАД:</div>
    <div class="relative w-[363px] items-center flex flex-col mx-auto">
        <img src="/images/Vector 5 Dark.svg" class="absolute top-[-5px] right-[-5px] z-10">
        <img src="/images/star1.svg" class="absolute right-[5px] bottom-[5px] w-[55px] h-[55px] z-10" >
        <div class="text-center justify-start relative z-10 pt-2">
            <span class="text-black text-[26px] font-bold font-['Craftwork_Grotesk'] uppercase">Чистий профіт - кости <br>команди = </span><span class="text-[#ff41df] text-[26px] font-black font-['Craftwork_Grotesk'] uppercase">$5000  </span>
        </div>
        <div class="text-center justify-start text-[#a0a0a0] text-lg font-[36px] font-['Craftwork_Grotesk'] leading-[18px] relative z-10">(середній дохід баєра)</div>
        <div class="text-center justify-start relative z-10 pt-6 pb-[35px]"><span class="text-black text-[40px] font-bold font-['Craftwork_Grotesk'] uppercase">5% від $5000 = <br></span><span class="text-[#ff41df] text-[40px] font-black font-['Craftwork_Grotesk'] uppercase">$250 ТВОЇХ!</span></div>
        <img src="/images/lineL.svg" class="w-[624px] h-1 z-10">
        <div class="justify-start text-neutral-500 text-[16px] font-['Craftwork_Grotesk'] leading-[18px] relative z-10 pt-4 pb-20">+ $250 щомісяця протягом 5 місяців = $1250 </div>
        <img src="/images/cardBigM.svg" class="absolute">
    </div>
    <div class="w-[70%] flex flex-col justify-center items-center my-10 mx-auto">
        <button on:click={()=>{isOpen=true}} class="h-[60px] px-[21px] py-3.5 bg-[#ff41df] rounded-sm inline-flex justify-center items-center">
            <div class="justify-center text-white text-[22px] font-bold font-['Craftwork_Grotesk'] uppercase text-nowrap">Залишити кандідата</div>
        </button>
    </div>
</div>

<ReferalFormMobile
    onClose={() => isOpen = false}
    isOpen={isOpen}/>