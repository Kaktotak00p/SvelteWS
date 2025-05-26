<script>
	import ContactForm from "./ContactForm.svelte";

    let isOpen = false;
</script>

<div class="flex flex-col h-[655px] mb-24" id="landing">
    <div class="w-full h-full relative bg-[#020202] overflow-hidden px-10">
        <div class="absolute top-0 -left-[10%] z-[1] h-full bg-transparent border border-[#CAFF11] min-w-[120%] flex flex-col justify-center items-center">
            <img src="/images/TRAFFHUB.png" class="w-full">
        </div>
        <div class="relative"></div>
        <div class="relative z-[2] w-full h-full min-w-full min-h-full flex justify-between items-center">
            <div class="relative w-[679px] h-[430px]">
                <div class="absolute w-[679px] h-[320px] left-0 top-0">
                    <div class="absolute left-[136px] top-0">
                        <span class="text-white text-[50px] font-[600] font-['Craftwork_Grotesk'] uppercase">медіабаїнгова</span>
                    </div>
                    <div class="absolute left-0 top-[60px]">
                        <span class="text-white text-[50px] font-[600] font-['Craftwork_Grotesk'] uppercase">компанія</span>
                    </div>
                    <div class="absolute left-[140px] top-[200px] flex justify-start items-center gap-10">
                        <div><span class="text-white text-[50px] font-[600] font-['Craftwork_Grotesk'] uppercase">залив із</span></div>
                        <div><span class="text-white text-[50px] font-[600] font-['Craftwork_Grotesk'] uppercase">сенсом</span></div>
                    </div>
                    <div class="absolute left-0 top-[260px] flex justify-start items-center gap-[54px]">
                        <div class="flex justify-start items-center gap-[30px]">
                            <div><span class="text-white text-[50px] font-[600] font-['Craftwork_Grotesk'] uppercase">команда</span></div>
                            <div class="text-right"><span class="text-white text-[50px] font-[600] font-['Craftwork_Grotesk'] uppercase">3</span></div>
                        </div>
                        <div><span class="text-white text-[50px] font-[600] font-['Craftwork_Grotesk'] uppercase">драйвом</span></div>
                    </div>
                    <div class="absolute left-[140px] top-[130px]">
                        <span class="text-white text-[50px] font-[600] font-['Craftwork_Grotesk'] uppercase">///</span>
                    </div>
                </div>
                <button class="absolute left-0 top-[370px] h-[60px] px-[21px] py-[14px] bg-[#FF41DF] rounded-[4px] flex justify-center items-center gap-[10px]" 
                        on:click={() => {isOpen = true}}>
                    <div class="flex flex-col justify-center text-nowrap">
                        <span class="text-white text-[26px] font-[700] font-['Craftwork_Grotesk']">ВІДГУКНУТИСЬ НА ВАКАНСІЮ</span>
                    </div>
                </button>
            </div>


            <div class="frame--1">
                <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_span">T</span></div>
                <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_01"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_01_span">r</span></div>
                <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_02"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_02_span">a</span></div>
                <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_03"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_03_span">f</span></div>
                <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_04"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_04_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_05"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_05_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_06"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_06_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_07"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_07_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_08"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_08_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_09"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_09_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_10"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_10_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_11"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_11_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_12"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_12_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_13"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_13_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_14"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_14_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_15"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_15_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_16"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_16_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_17"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_17_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_18"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_18_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_19"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_19_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_20"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_20_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_21"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_21_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_22"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_22_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_23"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_23_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_24"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_24_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_25"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_25_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_26"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_26_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_27"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_27_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_28"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_28_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_29"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_29_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_30"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_30_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_31"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_31_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_32"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_32_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_33"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_33_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_34"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_34_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_35"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_35_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_36"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_36_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_37"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_37_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_38"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_38_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_39"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_39_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_40"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_40_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_41"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_41_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_42"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_42_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_43"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_43_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_44"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_44_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_45"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_45_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_46"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_46_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_47"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_47_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_48"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_48_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_49"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_49_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_50"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_50_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_51"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_51_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_52"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_52_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_53"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_53_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_54"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_54_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_55"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_55_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_56"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_56_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_57"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_57_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_58"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_58_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_59"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_59_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_60"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_60_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_61"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_61_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_62"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_62_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_63"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_63_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_64"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_64_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_65"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_65_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_66"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_66_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_67"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_67_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_68"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_68_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_69"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_69_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_70"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_70_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_71"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_71_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_72"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_72_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_73"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_73_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_74"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_74_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_75"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_75_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_76"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_76_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_77"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_77_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_78"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_78_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_79"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_79_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_80"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_80_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_81"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_81_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_82"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_82_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_83"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_83_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_84"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_84_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_85"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_85_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_86"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_86_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_87"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_87_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_88"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_88_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_89"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_89_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_90"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_90_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_91"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_91_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_92"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_92_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_93"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_93_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_94"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_94_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_95"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_95_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_96"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_96_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_97"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_97_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_98"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_98_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_99"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_99_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_100"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_100_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_101"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_101_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_102"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_102_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_103"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_103_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_104"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_104_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_105"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_105_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_106"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_106_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_107"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_107_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_108"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_108_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_109"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_109_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_110"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_110_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_111"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_111_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_112"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_112_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_113"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_113_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_114"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_114_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_115"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_115_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_116"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_116_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_117"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_117_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_118"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_118_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_119"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_119_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_120"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_120_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_121"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_121_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_122"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_122_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_123"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_123_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_124"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_124_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_125"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_125_span"> </span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_126"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_126_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_127"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_127_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_128"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_128_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_129"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_129_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_130"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_130_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_131"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_131_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_132"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_132_span">u</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_133"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_133_span">b</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_134"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_134_span">T</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_135"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_135_span">r</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_136"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_136_span">a</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_137"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_137_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_138"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_138_span">f</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_139"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_139_span">H</span></div>
            <div class="copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_140"><span class="copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_140_span">u</span></div>
            <img class="rectangle--1" src="/images/1ff360105e966717442a58e5236d152dfefc9687.png" />
        </div>
    </div>
</div>
</div>

<ContactForm isOpen={isOpen} onClose={() => (isOpen = false)} />
<style>

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub {
    left: 452.17px;
    top: 261.79px;
    position: absolute;
    transform: rotate(92deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_01_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_01 {
    left: 451.69px;
    top: 275.85px;
    position: absolute;
    transform: rotate(94deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_02_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_02 {
    left: 451.29px;
    top: 281.77px;
    position: absolute;
    transform: rotate(96deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_03_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_03 {
    left: 450.11px;
    top: 292.27px;
    position: absolute;
    transform: rotate(99deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_04_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_04 {
    left: 448.81px;
    top: 300.79px;
    position: absolute;
    transform: rotate(101deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_05_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_05 {
    left: 447.23px;
    top: 309.30px;
    position: absolute;
    transform: rotate(104deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_06_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_06 {
    left: 443.98px;
    top: 322.41px;
    position: absolute;
    transform: rotate(107deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_07_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_07 {
    left: 440.88px;
    top: 332.76px;
    position: absolute;
    transform: rotate(110deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_08_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_08 {
    left: 436.52px;
    top: 344.66px;
    position: absolute;
    transform: rotate(112deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_09_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_09 {
    left: 434.58px;
    top: 349.64px;
    position: absolute;
    transform: rotate(114deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_10_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_10 {
    left: 428.89px;
    top: 361.93px;
    position: absolute;
    transform: rotate(117deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_11_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_11 {
    left: 426px;
    top: 367.65px;
    position: absolute;
    transform: rotate(119deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_12_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_12 {
    left: 420.73px;
    top: 377.03px;
    position: absolute;
    transform: rotate(122deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_13_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_13 {
    left: 416.33px;
    top: 384.16px;
    position: absolute;
    transform: rotate(124deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_14_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_14 {
    left: 411.66px;
    top: 391.22px;
    position: absolute;
    transform: rotate(126deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_15_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_15 {
    left: 403.42px;
    top: 402.25px;
    position: absolute;
    transform: rotate(130deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_16_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_16 {
    left: 396.66px;
    top: 410.43px;
    position: absolute;
    transform: rotate(133deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_17_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_17 {
    left: 388.14px;
    top: 419.60px;
    position: absolute;
    transform: rotate(135deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_18_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_18 {
    left: 384.39px;
    top: 423.46px;
    position: absolute;
    transform: rotate(137deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_19_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_19 {
    left: 374.42px;
    top: 432.58px;
    position: absolute;
    transform: rotate(140deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_20_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_20 {
    left: 369.38px;
    top: 436.90px;
    position: absolute;
    transform: rotate(142deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_21_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_21 {
    left: 361.17px;
    top: 443.29px;
    position: absolute;
    transform: rotate(144deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_22_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_22 {
    left: 354.33px;
    top: 448.20px;
    position: absolute;
    transform: rotate(146deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_23_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_23 {
    left: 347.10px;
    top: 453.07px;
    position: absolute;
    transform: rotate(149deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_24_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_24 {
    left: 335.41px;
    top: 459.95px;
    position: absolute;
    transform: rotate(152deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_25_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_25 {
    left: 325.99px;
    top: 464.91px;
    position: absolute;
    transform: rotate(155deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_26_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_26 {
    left: 314.59px;
    top: 470.08px;
    position: absolute;
    transform: rotate(158deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_27_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_27 {
    left: 309.54px;
    top: 472.23px;
    position: absolute;
    transform: rotate(160deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_28_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_28 {
    left: 296.78px;
    top: 476.79px;
    position: absolute;
    transform: rotate(162deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_29_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_29 {
    left: 290.62px;
    top: 478.76px;
    position: absolute;
    transform: rotate(165deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_30_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_30 {
    left: 280.48px;
    top: 481.49px;
    position: absolute;
    transform: rotate(167deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_31_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_31 {
    left: 272.23px;
    top: 483.37px;
    position: absolute;
    transform: rotate(169deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_32_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_32 {
    left: 263.78px;
    top: 485.01px;
    position: absolute;
    transform: rotate(172deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_33_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_33 {
    left: 250.26px;
    top: 486.83px;
    position: absolute;
    transform: rotate(175deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_34_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_34 {
    left: 239.69px;
    top: 487.73px;
    position: absolute;
    transform: rotate(178deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_35_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_35 {
    left: 226.34px;
    top: 488.07px;
    position: absolute;
    transform: rotate(-180deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_36_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_36 {
    left: 220.83px;
    top: 488.09px;
    position: absolute;
    transform: rotate(-177deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_37_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_37 {
    left: 207.35px;
    top: 487.31px;
    position: absolute;
    transform: rotate(-175deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_38_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_38 {
    left: 200.91px;
    top: 486.72px;
    position: absolute;
    transform: rotate(-172deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_39_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_39 {
    left: 190.50px;
    top: 485.30px;
    position: absolute;
    transform: rotate(-170deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_40_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_40 {
    left: 182.17px;
    top: 483.83px;
    position: absolute;
    transform: rotate(-168deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_41_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_41 {
    left: 173.76px;
    top: 482.06px;
    position: absolute;
    transform: rotate(-165deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_42_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_42 {
    left: 160.62px;
    top: 478.48px;
    position: absolute;
    transform: rotate(-162deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_43_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_43 {
    left: 150.50px;
    top: 475.19px;
    position: absolute;
    transform: rotate(-159deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_44_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_44 {
    left: 138.85px;
    top: 470.62px;
    position: absolute;
    transform: rotate(-157deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_45_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_45 {
    left: 133.81px;
    top: 468.52px;
    position: absolute;
    transform: rotate(-154deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_46_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_46 {
    left: 121.67px;
    top: 462.56px;
    position: absolute;
    transform: rotate(-152deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_47_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_47 {
    left: 116px;
    top: 459.54px;
    position: absolute;
    transform: rotate(-150deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_48_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_48 {
    left: 107.03px;
    top: 454.23px;
    position: absolute;
    transform: rotate(-147deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_49_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_49 {
    left: 99.82px;
    top: 449.57px;
    position: absolute;
    transform: rotate(-145deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_50_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_50 {
    left: 92.84px;
    top: 444.72px;
    position: absolute;
    transform: rotate(-142deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_51_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_51 {
    left: 82.04px;
    top: 436.29px;
    position: absolute;
    transform: rotate(-139deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_52_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_52 {
    left: 74.02px;
    top: 429.36px;
    position: absolute;
    transform: rotate(-136deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_53_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_53 {
    left: 65.05px;
    top: 420.65px;
    position: absolute;
    transform: rotate(-134deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_54_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_54 {
    left: 61.29px;
    top: 416.85px;
    position: absolute;
    transform: rotate(-132deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_55_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_55 {
    left: 52.42px;
    top: 406.72px;
    position: absolute;
    transform: rotate(-129deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_56_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_56 {
    left: 48.17px;
    top: 401.53px;
    position: absolute;
    transform: rotate(-127deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_57_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_57 {
    left: 42px;
    top: 393.25px;
    position: absolute;
    transform: rotate(-125deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_58_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_58 {
    left: 37.27px;
    top: 386.36px;
    position: absolute;
    transform: rotate(-122deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_59_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_59 {
    left: 32.48px;
    top: 378.90px;
    position: absolute;
    transform: rotate(-120deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_60_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_60 {
    left: 25.94px;
    top: 367.24px;
    position: absolute;
    transform: rotate(-117deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_61_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_61 {
    left: 21.18px;
    top: 357.70px;
    position: absolute;
    transform: rotate(-114deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_62_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_62 {
    left: 16.21px;
    top: 346.09px;
    position: absolute;
    transform: rotate(-111deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_63_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_63 {
    left: 14.21px;
    top: 341.13px;
    position: absolute;
    transform: rotate(-109deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_64_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_64 {
    left: 9.90px;
    top: 328.22px;
    position: absolute;
    transform: rotate(-106deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_65_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_65 {
    left: 8.06px;
    top: 321.99px;
    position: absolute;
    transform: rotate(-104deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_66_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_66 {
    left: 5.56px;
    top: 311.88px;
    position: absolute;
    transform: rotate(-102deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_67_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_67 {
    left: 3.83px;
    top: 303.48px;
    position: absolute;
    transform: rotate(-99deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_68_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_68 {
    left: 2.47px;
    top: 295.63px;
    position: absolute;
    transform: rotate(-97deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_69_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_69 {
    left: 0.90px;
    top: 282.03px;
    position: absolute;
    transform: rotate(-94deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_70_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_70 {
    left: 0.20px;
    top: 271.60px;
    position: absolute;
    transform: rotate(-91deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_71_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_71 {
    left: 0.11px;
    top: 257.46px;
    position: absolute;
    transform: rotate(-88deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_72_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_72 {
    left: 0.18px;
    top: 252.69px;
    position: absolute;
    transform: rotate(-86deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_73_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_73 {
    left: 1.25px;
    top: 238.73px;
    position: absolute;
    transform: rotate(-83deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_74_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_74 {
    left: 2px;
    top: 232.07px;
    position: absolute;
    transform: rotate(-81deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_75_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_75 {
    left: 3.63px;
    top: 221.73px;
    position: absolute;
    transform: rotate(-79deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_76_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_76 {
    left: 5.09px;
    top: 214.32px;
    position: absolute;
    transform: rotate(-77deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_77_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_77 {
    left: 7.26px;
    top: 204.96px;
    position: absolute;
    transform: rotate(-74deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_78_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_78 {
    left: 11.01px;
    top: 192.24px;
    position: absolute;
    transform: rotate(-71deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_79_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_79 {
    left: 14.58px;
    top: 182.01px;
    position: absolute;
    transform: rotate(-68deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_80_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_80 {
    left: 19.05px;
    top: 171.25px;
    position: absolute;
    transform: rotate(-66deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_81_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_81 {
    left: 21.56px;
    top: 165.55px;
    position: absolute;
    transform: rotate(-63deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_82_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_82 {
    left: 27.75px;
    top: 153.57px;
    position: absolute;
    transform: rotate(-60deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_83_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_83 {
    left: 30.79px;
    top: 148.12px;
    position: absolute;
    transform: rotate(-58deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_84_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_84 {
    left: 36px;
    top: 139.68px;
    position: absolute;
    transform: rotate(-56deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_85_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_85 {
    left: 41.30px;
    top: 131.84px;
    position: absolute;
    transform: rotate(-54deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_86_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_86 {
    left: 46.01px;
    top: 125.30px;
    position: absolute;
    transform: rotate(-51deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_87_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_87 {
    left: 54.89px;
    top: 114.42px;
    position: absolute;
    transform: rotate(-48deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_88_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_88 {
    left: 61.93px;
    top: 112.25px;
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_89_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_89 {
    left: 70.94px;
    top: 97.70px;
    position: absolute;
    transform: rotate(-43deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_90_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_90 {
    left: 74.40px;
    top: 94.38px;
    position: absolute;
    transform: rotate(-40deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_91_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_91 {
    left: 84.59px;
    top: 85.79px;
    position: absolute;
    transform: rotate(-38deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_92_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_92 {
    left: 89.40px;
    top: 81.97px;
    position: absolute;
    transform: rotate(-36deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_93_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_93 {
    left: 98.56px;
    top: 75.40px;
    position: absolute;
    transform: rotate(-33deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_94_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_94 {
    left: 105.39px;
    top: 70.90px;
    position: absolute;
    transform: rotate(-31deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_95_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_95 {
    left: 112.26px;
    top: 66.64px;
    position: absolute;
    transform: rotate(-28deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_96_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_96 {
    left: 124.87px;
    top: 59.86px;
    position: absolute;
    transform: rotate(-25deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_97_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_97 {
    left: 134.66px;
    top: 55.22px;
    position: absolute;
    transform: rotate(-22deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_98_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_98 {
    left: 146.72px;
    top: 50.38px;
    position: absolute;
    transform: rotate(-20deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_99_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_99 {
    left: 151.49px;
    top: 48.56px;
    position: absolute;
    transform: rotate(-18deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_100_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_100 {
    left: 164.70px;
    top: 44.48px;
    position: absolute;
    transform: rotate(-15deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_101_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_101 {
    left: 169.48px;
    top: 43.13px;
    position: absolute;
    transform: rotate(-13deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_102_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_102 {
    left: 181.21px;
    top: 40.48px;
    position: absolute;
    transform: rotate(-10deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_103_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_103 {
    left: 188.23px;
    top: 39.17px;
    position: absolute;
    transform: rotate(-8deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_104_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_104 {
    left: 197.13px;
    top: 37.79px;
    position: absolute;
    transform: rotate(-6deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_105_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_105 {
    left: 211px;
    top: 36.49px;
    position: absolute;
    transform: rotate(-2deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_106_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_106 {
    left: 222.34px;
    top: 36px;
    position: absolute;
    transform: rotate(1deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_107_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_107 {
    left: 234.57px;
    top: 36.20px;
    position: absolute;
    transform: rotate(3deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_108_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_108 {
    left: 240.37px;
    top: 36.40px;
    position: absolute;
    transform: rotate(5deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_109_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_109 {
    left: 252.96px;
    top: 37.61px;
    position: absolute;
    transform: rotate(8deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_110_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_110 {
    left: 259.74px;
    top: 38.48px;
    position: absolute;
    transform: rotate(10deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_111_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_111 {
    left: 270px;
    top: 40.28px;
    position: absolute;
    transform: rotate(12deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_112_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_112 {
    left: 278.44px;
    top: 42.11px;
    position: absolute;
    transform: rotate(15deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_113_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_113 {
    left: 286.70px;
    top: 44.17px;
    position: absolute;
    transform: rotate(17deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_114_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_114 {
    left: 300.66px;
    top: 48.60px;
    position: absolute;
    transform: rotate(21deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_115_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_115 {
    left: 310.86px;
    top: 52.42px;
    position: absolute;
    transform: rotate(24deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_116_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_116 {
    left: 321.25px;
    top: 56.99px;
    position: absolute;
    transform: rotate(26deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_117_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_117 {
    left: 327.09px;
    top: 59.73px;
    position: absolute;
    transform: rotate(28deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_118_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_118 {
    left: 338.90px;
    top: 66.17px;
    position: absolute;
    transform: rotate(31deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_119_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_119 {
    left: 344.24px;
    top: 69.30px;
    position: absolute;
    transform: rotate(33deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_120_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_120 {
    left: 352.50px;
    top: 74.64px;
    position: absolute;
    transform: rotate(35deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_121_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_121 {
    left: 360.35px;
    top: 80.21px;
    position: absolute;
    transform: rotate(37deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_122_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_122 {
    left: 366.74px;
    top: 85.03px;
    position: absolute;
    transform: rotate(40deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_123_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_123 {
    left: 377.46px;
    top: 94.17px;
    position: absolute;
    transform: rotate(43deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_124_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_124 {
    left: 385.13px;
    top: 101.39px;
    position: absolute;
    transform: rotate(46deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_125_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_125 {
    left: 393.83px;
    top: 110.59px;
    position: absolute;
    transform: rotate(49deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_126_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_126 {
    left: 397.11px;
    top: 114.17px;
    position: absolute;
    transform: rotate(51deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_127_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_127 {
    left: 405.51px;
    top: 124.59px;
    position: absolute;
    transform: rotate(53deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_128_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_128 {
    left: 409.25px;
    top: 129.54px;
    position: absolute;
    transform: rotate(55deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_129_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_129 {
    left: 415.58px;
    top: 138.79px;
    position: absolute;
    transform: rotate(58deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_130_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_130 {
    left: 419.96px;
    top: 145.79px;
    position: absolute;
    transform: rotate(60deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_131_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_131 {
    left: 424.13px;
    top: 152.89px;
    position: absolute;
    transform: rotate(63deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_132_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_132 {
    left: 430.57px;
    top: 165.58px;
    position: absolute;
    transform: rotate(66deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_133_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_133 {
    left: 434.98px;
    top: 175.45px;
    position: absolute;
    transform: rotate(69deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_134_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_134 {
    left: 439.30px;
    top: 186.66px;
    position: absolute;
    transform: rotate(72deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_135_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_135 {
    left: 443.41px;
    top: 199.78px;
    position: absolute;
    transform: rotate(75deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_136_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_136 {
    left: 445.16px;
    top: 206.12px;
    position: absolute;
    transform: rotate(77deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_137_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_137 {
    left: 447.48px;
    top: 216.30px;
    position: absolute;
    transform: rotate(79deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_138_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_138 {
    left: 449.06px;
    top: 224.83px;
    position: absolute;
    transform: rotate(82deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_139_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_139 {
    left: 450.39px;
    top: 233.57px;
    position: absolute;
    transform: rotate(84deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.copytraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhubtraffhub_140_span {
    color: white;
    font-size: 20px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    word-wrap: break-word;
}

.copy-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhub-traffhubtraffhubtraffhubtraffhubtraffhub_140 {
    left: 451.60px;
    top: 246.40px;
    position: absolute;
    transform: rotate(87deg);
    transform-origin: top left;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.rectangle--1 {
    width: 452px;
    height: 567px;
    left: 0px;
    top: 44px;
    position: absolute;
    box-shadow: 4px 4px 24px -42px rgba(0, 0, 0, 0.35);
    border-radius: 40px;
}

.frame--1 {
    width: 452.17px;
    height: 567px;
    position: relative;
}
</style>