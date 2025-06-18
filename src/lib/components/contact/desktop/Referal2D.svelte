<script>
	import ReferalForm from "$lib/components/desktop/ReferalForm.svelte";


    let isOpen = false;
</script>


<div class="w-[1440px] h-[781px] relative bg-[#020202] overflow-hidden mx-auto">
    <div class="pl-[174px] w-[374px] h-[108px] inline-flex justify-start items-center text-nowrap">
        <div class="justify-start text-white text-[26px] font-normal font-['Craftwork_Grotesk'] uppercase">[Що буде?]</div>
        <img class="w-[88px] h-[88px] rotate-[225deg] " src="/images/arrowWhite.png" />
        <div class="justify-start text-white text-[26px] font-black font-['Craftwork_Grotesk'] uppercase">ГРОШІ!</div>
    </div>
    <div class="flex flex-row justify-center px-[25px] w-full gap-[40px]">
        
        <div class="w-[342px] h-[171px] bg-[#bdfd02] rounded-md border-1 border-black relative">
            <div class="w-[234px] inline-flex flex-col justify-start items-center mx-[50px]">
                <img src="/images/Vector 1.svg" class="absolute top-[-5px] right-[-5px]" />
                <div class="text-center justify-start text-[#111111] text-[78px] font-black font-['Craftwork_Grotesk'] uppercase">$200</div>
                <div class="w-[257px] text-center justify-start text-[#111111] text-lg font-normal font-['Craftwork_Grotesk'] leading-[18px]">фіксована виплата після випробовувального (1 місяць)</div>
            </div>
        </div>
        <div class="w-[53px] h-[94px] justify-start text-[#bdfd02] text-[78.22px] font-black font-['Craftwork_Grotesk'] uppercase">+</div>
        <div class="w-[342px] h-[171px] bg-[#bdfd02] rounded-md border-1 border-black relative">
            <div class="w-[234px] inline-flex flex-col justify-start items-center mx-[50px]">
                <img src="/images/Vector 1.svg" class="absolute top-[-5px] right-[-5px]" />
                <div class="self-stretch text-center justify-start text-[#111111] text-[78px] font-black font-['Craftwork_Grotesk'] uppercase">5%</div>
                <div class="w-[233px] text-center justify-start text-[#111111] text-lg font-normal font-['Craftwork_Grotesk'] leading-[18px]">від чистого профіту байера з урахуванням всіх костів</div>
                <div class="w-[234px] h-[18px] top-[170px] absolute text-center justify-start text-[#a0a0a0] text-lg font-normal font-['Craftwork_Grotesk'] leading-[18px] pt-1">(протягом 5 місяців)</div>
            </div>
        </div>
    </div>
    <div class=" pl-[174px] justify-start text-white text-[26px] font-normal font-['Craftwork_Grotesk'] uppercase py-5">ПРИКЛАД:</div>
    <div class=" relative items-center flex flex-col w-[722px] h-[289px] mx-auto">
        <img src="/images/Vector 5 Dark.svg" class="absolute top-[-5px] right-[-5px] z-10">
        <img src="/images/star1.svg" class="absolute right-[5px] bottom-[5px] w-[55px] h-[55px] z-10" >
        <div class="text-center justify-start relative z-10 pt-10">
            <span class="text-black text-[26px] font-bold font-['Craftwork_Grotesk'] uppercase">Чистий профіт - кости команди = </span><span class="text-[#ff41df] text-[26px] font-black font-['Craftwork_Grotesk'] uppercase">$5000  </span>
        </div>
        <div class="text-center justify-start text-[#a0a0a0] text-lg font-normal font-['Craftwork_Grotesk'] leading-[18px] relative z-10">(середній дохід баєра)</div>
        <div class="text-center justify-start relative z-10 pt-10 pb-[10px]"><span class="text-black text-[40px] font-bold font-['Craftwork_Grotesk'] uppercase">5% від $5000 = </span><span class="text-[#ff41df] text-[40px] font-black font-['Craftwork_Grotesk'] uppercase">$250 ТВОЇХ!</span></div>
        <img src="/images/lineL.svg" class="w-[624px] h-1 z-10">
        <div class="justify-start text-neutral-500 text-lg font-normal font-['Craftwork_Grotesk'] leading-[18px] relative z-10 pt-4">+ $250 щомісяця протягом 5 місяців = $1250 </div>
        <img src="/images/cardBig.svg" class="absolute">
    </div>
    <div class="w-full flex flex-col justify-center items-center mt-10">
        <button on:click={()=>{isOpen=true;}} class="h-[60px] px-[21px] py-3.5 bg-[#ff41df] rounded-sm inline-flex justify-center items-center">
            <div class="justify-center text-white text-[26px] font-bold font-['Craftwork_Grotesk'] uppercase">Залишити кандидата</div>
        </button>
    </div>
</div>

<ReferalForm
    onClose={() => isOpen = false}
    isOpen={isOpen}/>