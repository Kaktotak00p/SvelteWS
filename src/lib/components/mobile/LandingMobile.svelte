<script>
	import ContactFormMobile from "./ContactFormMobile.svelte";

	import {page } from '$app/state';
	import {onMount} from 'svelte';

	onMount(() => {
		const section = new URLSearchParams(window.location.search).get('section');
		if (section) {
			const targetSection = document.getElementById(section);
			if (targetSection) {
				targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	});
    let isOpen = false;
</script>
<div class="w-full h-[972px] relative bg-black overflow-hidden mx-auto" id="landing">
    <div class="left-[10px] top-[68px] absolute justify-start font-[600] text-white text-4xl font-semibold font-['Craftwork_Grotesk'] uppercase">медіабаїнгова</div>
    <div class="right-[10px] top-[111px] absolute justify-start font-[600] text-white text-4xl font-semibold font-['Craftwork_Grotesk'] uppercase">компанія</div>
    <div class="w-96 h-[455.18px] left-1/2 -translate-x-1/2 top-[145.33px] absolute mx-auto">
        <div class="left-[363px] top-[210.17px] absolute origin-top-left rotate-[91.55deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[362.61px] top-[221.45px] absolute origin-top-left rotate-[94.20deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[362.29px] top-[226.20px] absolute origin-top-left rotate-[96.18deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[361.35px] top-[234.64px] absolute origin-top-left rotate-[98.61deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[360.30px] top-[241.47px] absolute origin-top-left rotate-[100.80deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[359.03px] top-[248.31px] absolute origin-top-left rotate-[103.64deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[356.43px] top-[258.83px] absolute origin-top-left rotate-[106.68deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[353.94px] top-[267.13px] absolute origin-top-left rotate-[109.71deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[350.44px] top-[276.69px] absolute origin-top-left rotate-[112.07deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[348.88px] top-[280.69px] absolute origin-top-left rotate-[114.42deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[344.31px] top-[290.56px] absolute origin-top-left rotate-[116.98deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[341.99px] top-[295.14px] absolute origin-top-left rotate-[119.09deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[337.76px] top-[302.68px] absolute origin-top-left rotate-[121.63deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[334.23px] top-[308.40px] absolute origin-top-left rotate-[123.73deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[330.48px] top-[314.07px] absolute origin-top-left rotate-[126.45deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[323.87px] top-[322.92px] absolute origin-top-left rotate-[129.58deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[318.44px] top-[329.49px] absolute origin-top-left rotate-[132.50deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[311.60px] top-[336.85px] absolute origin-top-left rotate-[134.79deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[308.59px] top-[339.95px] absolute origin-top-left rotate-[137.08deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[300.58px] top-[347.28px] absolute origin-top-left rotate-[139.58deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[296.54px] top-[350.74px] absolute origin-top-left rotate-[141.88deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[289.95px] top-[355.87px] absolute origin-top-left rotate-[144.18deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[284.45px] top-[359.82px] absolute origin-top-left rotate-[146.27deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[278.65px] top-[363.72px] absolute origin-top-left rotate-[149.22deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[269.27px] top-[369.25px] absolute origin-top-left rotate-[152.18deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[261.70px] top-[373.22px] absolute origin-top-left rotate-[155.15deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[252.55px] top-[377.38px] absolute origin-top-left rotate-[157.50deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[248.50px] top-[379.10px] absolute origin-top-left rotate-[159.86deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[238.25px] top-[382.77px] absolute origin-top-left rotate-[162.45deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[233.31px] top-[384.34px] absolute origin-top-left rotate-[164.62deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[225.17px] top-[386.54px] absolute origin-top-left rotate-[167.02deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[218.54px] top-[388.05px] absolute origin-top-left rotate-[169.20deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[211.76px] top-[389.37px] absolute origin-top-left rotate-[172.05deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[200.90px] top-[390.83px] absolute origin-top-left rotate-[175.14deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[192.42px] top-[391.54px] absolute origin-top-left rotate-[178.01deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[181.71px] top-[391.82px] absolute origin-top-left rotate-[-179.56deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[177.28px] top-[391.83px] absolute origin-top-left rotate-[-177.13deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[166.46px] top-[391.21px] absolute origin-top-left rotate-[-174.70deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[161.29px] top-[390.74px] absolute origin-top-left rotate-[-172.49deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[152.93px] top-[389.60px] absolute origin-top-left rotate-[-170.08deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[146.25px] top-[388.41px] absolute origin-top-left rotate-[-167.89deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[139.49px] top-[387px] absolute origin-top-left rotate-[-165.05deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[128.94px] top-[384.12px] absolute origin-top-left rotate-[-162.02deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[120.82px] top-[381.48px] absolute origin-top-left rotate-[-159deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[111.47px] top-[377.81px] absolute origin-top-left rotate-[-156.65deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[107.42px] top-[376.12px] absolute origin-top-left rotate-[-154.30deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[97.67px] top-[371.34px] absolute origin-top-left rotate-[-151.75deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[93.12px] top-[368.91px] absolute origin-top-left rotate-[-149.64deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[85.93px] top-[364.65px] absolute origin-top-left rotate-[-147.32deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[80.14px] top-[360.91px] absolute origin-top-left rotate-[-145.01deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[74.53px] top-[357.02px] absolute origin-top-left rotate-[-142.29deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[65.86px] top-[350.25px] absolute origin-top-left rotate-[-139.16deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[59.43px] top-[344.69px] absolute origin-top-left rotate-[-136.25deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[52.22px] top-[337.70px] absolute origin-top-left rotate-[-133.96deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[49.21px] top-[334.64px] absolute origin-top-left rotate-[-131.67deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[42.08px] top-[326.51px] absolute origin-top-left rotate-[-129.17deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[38.67px] top-[322.34px] absolute origin-top-left rotate-[-126.87deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[33.71px] top-[315.70px] absolute origin-top-left rotate-[-124.57deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[29.92px] top-[310.17px] absolute origin-top-left rotate-[-122.47deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[26.08px] top-[304.18px] absolute origin-top-left rotate-[-119.52deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[20.83px] top-[294.82px] absolute origin-top-left rotate-[-116.55deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[17px] top-[287.16px] absolute origin-top-left rotate-[-113.57deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[13.01px] top-[277.84px] absolute origin-top-left rotate-[-111.21deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[11.40px] top-[273.86px] absolute origin-top-left rotate-[-108.84deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[7.95px] top-[263.49px] absolute origin-top-left rotate-[-106.25deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[6.47px] top-[258.50px] absolute origin-top-left rotate-[-104.07deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[4.46px] top-[250.37px] absolute origin-top-left rotate-[-101.67deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[3.08px] top-[243.63px] absolute origin-top-left rotate-[-99.48deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[1.98px] top-[237.33px] absolute origin-top-left rotate-[-96.85deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[0.72px] top-[226.41px] absolute origin-top-left rotate-[-93.76deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[0.16px] top-[218.04px] absolute origin-top-left rotate-[-90.88deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[0.09px] top-[206.69px] absolute origin-top-left rotate-[-88.23deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[0.14px] top-[202.86px] absolute origin-top-left rotate-[-86.02deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[1px] top-[191.65px] absolute origin-top-left rotate-[-83.37deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[1.60px] top-[186.31px] absolute origin-top-left rotate-[-81.18deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[2.92px] top-[178px] absolute origin-top-left rotate-[-78.76deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[4.09px] top-[172.06px] absolute origin-top-left rotate-[-76.80deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[5.83px] top-[164.54px] absolute origin-top-left rotate-[-73.75deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[8.84px] top-[154.33px] absolute origin-top-left rotate-[-70.72deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[11.71px] top-[146.11px] absolute origin-top-left rotate-[-67.72deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[15.29px] top-[137.48px] absolute origin-top-left rotate-[-65.58deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[17.31px] top-[132.90px] absolute origin-top-left rotate-[-63.02deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[22.28px] top-[123.29px] absolute origin-top-left rotate-[-60.48deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[24.72px] top-[118.91px] absolute origin-top-left rotate-[-58.37deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[28.90px] top-[112.14px] absolute origin-top-left rotate-[-56.06deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[33.15px] top-[105.84px] absolute origin-top-left rotate-[-53.76deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[36.94px] top-[100.59px] absolute origin-top-left rotate-[-51.04deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[44.07px] top-[91.86px] absolute origin-top-left rotate-[-47.91deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[49.72px] top-[90.52px] absolute origin-top-left -rotate-45 justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[56.95px] top-[78.43px] absolute origin-top-left rotate-[-42.71deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[59.73px] top-[75.77px] absolute origin-top-left rotate-[-40.42deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[67.91px] top-[68.87px] absolute origin-top-left rotate-[-37.91deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[71.77px] top-[65.81px] absolute origin-top-left rotate-[-35.82deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[79.12px] top-[60.53px] absolute origin-top-left rotate-[-33.31deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[84.61px] top-[56.92px] absolute origin-top-left rotate-[-31.20deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[90.12px] top-[53.50px] absolute origin-top-left rotate-[-28.46deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[100.25px] top-[48.06px] absolute origin-top-left rotate-[-25.27deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[108.10px] top-[44.33px] absolute origin-top-left rotate-[-22.28deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[117.78px] top-[40.44px] absolute origin-top-left rotate-[-19.92deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[121.61px] top-[38.98px] absolute origin-top-left rotate-[-17.55deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[132.22px] top-[35.71px] absolute origin-top-left rotate-[-14.95deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[136.06px] top-[34.62px] absolute origin-top-left rotate-[-12.98deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[145.48px] top-[32.50px] absolute origin-top-left rotate-[-10.36deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[151.11px] top-[31.44px] absolute origin-top-left rotate-[-8.39deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[158.25px] top-[30.34px] absolute origin-top-left rotate-[-5.52deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[169.39px] top-[29.30px] absolute origin-top-left rotate-[-2.43deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[178.49px] top-[28.90px] absolute origin-top-left rotate-[0.66deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[188.31px] top-[29.06px] absolute origin-top-left rotate-[2.87deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[192.96px] top-[29.22px] absolute origin-top-left rotate-[5.30deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[203.08px] top-[30.19px] absolute origin-top-left rotate-[7.73deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[208.52px] top-[30.89px] absolute origin-top-left rotate-[9.92deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[216.75px] top-[32.33px] absolute origin-top-left rotate-[12.33deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[223.53px] top-[33.81px] absolute origin-top-left rotate-[14.51deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[230.16px] top-[35.46px] absolute origin-top-left rotate-[17.33deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[241.37px] top-[39.01px] absolute origin-top-left rotate-[20.57deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[249.56px] top-[42.08px] absolute origin-top-left rotate-[23.57deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[257.90px] top-[45.75px] absolute origin-top-left rotate-[25.70deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[262.59px] top-[47.95px] absolute origin-top-left rotate-[28.25deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[272.07px] top-[53.12px] absolute origin-top-left rotate-[30.78deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[276.36px] top-[55.64px] absolute origin-top-left rotate-[32.89deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[282.98px] top-[59.92px] absolute origin-top-left rotate-[35.20deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[289.28px] top-[64.39px] absolute origin-top-left rotate-[37.50deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[294.42px] top-[68.26px] absolute origin-top-left rotate-[40.21deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[303.02px] top-[75.60px] absolute origin-top-left rotate-[43.33deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[309.18px] top-[81.39px] absolute origin-top-left rotate-[46.25deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[316.17px] top-[88.78px] absolute origin-top-left rotate-[48.54deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']"> </div>
        <div class="left-[318.80px] top-[91.65px] absolute origin-top-left rotate-[50.83deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[325.54px] top-[100.02px] absolute origin-top-left rotate-[53.34deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[328.55px] top-[104px] absolute origin-top-left rotate-[55.43deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[333.62px] top-[111.42px] absolute origin-top-left rotate-[57.95deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[337.14px] top-[117.04px] absolute origin-top-left rotate-[60.06deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[340.49px] top-[122.74px] absolute origin-top-left rotate-[62.81deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[345.66px] top-[132.92px] absolute origin-top-left rotate-[66deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <div class="left-[349.20px] top-[140.85px] absolute origin-top-left rotate-[69deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">b</div>
        <div class="left-[352.67px] top-[149.85px] absolute origin-top-left rotate-[72.24deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">T</div>
        <div class="left-[355.97px] top-[160.39px] absolute origin-top-left rotate-[74.84deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">r</div>
        <div class="left-[357.37px] top-[165.47px] absolute origin-top-left rotate-[77.02deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">a</div>
        <div class="left-[359.23px] top-[173.64px] absolute origin-top-left rotate-[79.42deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[360.51px] top-[180.49px] absolute origin-top-left rotate-[81.61deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">f</div>
        <div class="left-[361.57px] top-[187.51px] absolute origin-top-left rotate-[84.48deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">H</div>
        <div class="left-[362.54px] top-[197.81px] absolute origin-top-left rotate-[87.35deg] justify-center text-white text-base font-normal font-['Craftwork_Grotesk']">u</div>
        <img class="w-96 h-[455.18px] left-0 top-0 absolute rounded-[32.11px] shadow-[3.211174249649048px_3.211174249649048px_19.267047882080078px_-33.71732711791992px_rgba(0,0,0,0.35)]" src="/images/1ff360105e966717442a58e5236d152dfefc9687.png" />
    </div>
    <button on:click={()=>isOpen=true} class="w-[80%] mx-[10%] h-14 px-4 py-3.5 left-0 top-[600px] absolute bg-[#FF41DF] rounded inline-flex justify-center items-center">
        <div class="justify-center text-white text-l font-bold font-['Craftwork_Grotesk'] text-nowrap">ВІДГУКНУТИСЬ НА ВАКАНСІЮ</div>
    </button>
<div class="absolute left-[0px] top-[700px] w-full px-4 pb-8 border-b-[2px] border-[#CAFF11]">
    <div class="w-full inline-flex flex-col font-[600] justify-start items-end gap-[5px]">
        <div class="self-stretch justify-start text-white text-4xl font-semibold font-['Craftwork_Grotesk'] uppercase">залив  із</div>
        <div class="self-stretch text-right justify-start text-white text-4xl font-semibold font-['Craftwork_Grotesk'] uppercase">сенсом</div>
        <div class="self-stretch inline-flex justify-start items-center gap-20">
            <div class="justify-start text-white text-4xl font-semibold font-['Craftwork_Grotesk'] uppercase">команда</div>
            <div class="text-right justify-start text-white text-4xl font-semibold font-['Craftwork_Grotesk'] uppercase">3</div>
        </div>
        <div class="self-stretch text-right justify-start text-white text-4xl font-semibold font-['Craftwork_Grotesk'] uppercase">драйвом</div>
    </div>
</div>
</div>

<ContactFormMobile isOpen={isOpen} onClose={() => (isOpen = false)} />