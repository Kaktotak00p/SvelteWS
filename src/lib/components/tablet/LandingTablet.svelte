<script>
	import ContactForm from '../desktop/ContactForm.svelte';
	import ContactFormTablet from './ContactFormTablet.svelte';
	import ContactFormMobile from './ContactFormTablet.svelte';
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

<div class="relative h-[505px] w-full overflow-hidden bg-[#020202] mt-[-5px]">
		<div class="absolute right-[-10%] top-[0px] h-[485px] w-[120%] border border-[#caff11]"></div>
	<div class="flex h-full w-full flex-row justify-between items-end">
		<div class="">
			<div
				class="absolute left-[152px] top-[107px] justify-start font-['Craftwork_Grotesk'] text-[38px] font-semibold uppercase text-white"
			>
				медіабаїнгова
			</div>
			<div
				class="absolute left-[25px] top-[155px] justify-start font-['Craftwork_Grotesk'] text-[38px] font-semibold uppercase text-white"
			>
				компанія
			</div>
			<div
				class="size- absolute left-[92px] top-[271px] inline-flex items-center justify-start gap-10"
			>
				<div
					class="justify-start font-['Craftwork_Grotesk'] text-[38px] font-semibold uppercase text-white"
				>
					залив із
				</div>
				<div
					class="justify-start font-['Craftwork_Grotesk'] text-[38px] font-semibold uppercase text-white"
				>
					сенсом
				</div>
			</div>
			<div
				class="size- absolute left-[25px] top-[319px] inline-flex items-center justify-start gap-[54px]"
			>
				<div class="size- flex items-center justify-start gap-[30px]">
					<div
						class="justify-start font-['Craftwork_Grotesk'] text-[38px] font-semibold uppercase text-white"
					>
						команда
					</div>
					<div
						class="justify-start text-right font-['Craftwork_Grotesk'] text-[38px] font-semibold uppercase text-white"
					>
						3
					</div>
				</div>
				<div
					class="justify-start font-['Craftwork_Grotesk'] text-[38px] font-semibold uppercase text-white"
				>
					драйвом
				</div>
			</div>
			<div
				class="absolute left-[165px] top-[213px] justify-start font-['Craftwork_Grotesk'] text-[38px] font-semibold uppercase text-white"
			>
				///
			</div>
			<div
				class="absolute left-[25px] top-[395px] inline-flex h-[60px] items-center justify-center gap-2.5 rounded-md bg-[#ff41df] px-[21px] py-3.5"
			>
				<button on:click={() => {isOpen = true}} class="justify-center font-['Craftwork_Grotesk'] text-[22px] font-bold text-white">
					ВІДГУКНУТИСЬ НА ВАКАНСІЮ
				</button>
			</div>
		</div>
		<div class="relative h-[419px] w-[361px] mb-[20px] translate-x-[60px]">
			<div
				class="absolute left-[299.01px] top-[149.31px] origin-top-left rotate-[91.55deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[298.69px] top-[158.60px] origin-top-left rotate-[94.20deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[298.42px] top-[162.52px] origin-top-left rotate-[96.18deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[297.64px] top-[169.46px] origin-top-left rotate-[98.61deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[296.78px] top-[175.10px] origin-top-left rotate-[100.80deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[295.74px] top-[180.72px] origin-top-left rotate-[103.64deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[293.59px] top-[189.39px] origin-top-left rotate-[106.68deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[291.54px] top-[196.23px] origin-top-left rotate-[109.71deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[288.66px] top-[204.10px] origin-top-left rotate-[112.07deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[287.37px] top-[207.39px] origin-top-left rotate-[114.42deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[283.61px] top-[215.52px] origin-top-left rotate-[116.98deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[281.70px] top-[219.30px] origin-top-left rotate-[119.09deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[278.22px] top-[225.51px] origin-top-left rotate-[121.63deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[275.31px] top-[230.22px] origin-top-left rotate-[123.73deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[272.22px] top-[234.89px] origin-top-left rotate-[126.45deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[266.77px] top-[242.19px] origin-top-left rotate-[129.58deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[262.30px] top-[247.59px] origin-top-left rotate-[132.50deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[256.67px] top-[253.66px] origin-top-left rotate-[134.79deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[254.19px] top-[256.21px] origin-top-left rotate-[137.08deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[247.60px] top-[262.24px] origin-top-left rotate-[139.58deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[244.26px] top-[265.09px] origin-top-left rotate-[141.88deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[238.83px] top-[269.33px] origin-top-left rotate-[144.18deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[234.31px] top-[272.57px] origin-top-left rotate-[146.27deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[229.53px] top-[275.79px] origin-top-left rotate-[149.22deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[221.80px] top-[280.34px] origin-top-left rotate-[152.18deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[215.57px] top-[283.62px] origin-top-left rotate-[155.15deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[208.03px] top-[287.04px] origin-top-left rotate-[157.50deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[204.69px] top-[288.46px] origin-top-left rotate-[159.86deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[196.25px] top-[291.48px] origin-top-left rotate-[162.45deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[192.18px] top-[292.78px] origin-top-left rotate-[164.62deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[185.48px] top-[294.59px] origin-top-left rotate-[167.02deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[180.02px] top-[295.83px] origin-top-left rotate-[169.20deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[174.44px] top-[296.91px] origin-top-left rotate-[172.05deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[165.49px] top-[298.12px] origin-top-left rotate-[175.14deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[158.50px] top-[298.71px] origin-top-left rotate-[178.01deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[149.68px] top-[298.93px] origin-top-left rotate-[-179.56deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[146.03px] top-[298.94px] origin-top-left rotate-[-177.13deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[137.12px] top-[298.43px] origin-top-left rotate-[-174.70deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[132.86px] top-[298.04px] origin-top-left rotate-[-172.49deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[125.98px] top-[297.10px] origin-top-left rotate-[-170.08deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[120.47px] top-[296.13px] origin-top-left rotate-[-167.89deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[114.91px] top-[294.96px] origin-top-left rotate-[-165.05deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[106.22px] top-[292.59px] origin-top-left rotate-[-162.02deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[99.53px] top-[290.42px] origin-top-left rotate-[-159deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[91.82px] top-[287.40px] origin-top-left rotate-[-156.65deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[88.49px] top-[286.01px] origin-top-left rotate-[-154.30deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[80.46px] top-[282.07px] origin-top-left rotate-[-151.75deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[76.71px] top-[280.07px] origin-top-left rotate-[-149.64deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[70.78px] top-[276.55px] origin-top-left rotate-[-147.32deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[66.02px] top-[273.48px] origin-top-left rotate-[-145.01deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[61.40px] top-[270.27px] origin-top-left rotate-[-142.29deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[54.26px] top-[264.69px] origin-top-left rotate-[-139.16deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[48.96px] top-[260.11px] origin-top-left rotate-[-136.25deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[43.02px] top-[254.35px] origin-top-left rotate-[-133.96deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[40.54px] top-[251.84px] origin-top-left rotate-[-131.67deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[34.67px] top-[245.14px] origin-top-left rotate-[-129.17deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[31.86px] top-[241.71px] origin-top-left rotate-[-126.87deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[27.78px] top-[236.23px] origin-top-left rotate-[-124.57deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[24.65px] top-[231.68px] origin-top-left rotate-[-122.47deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[21.48px] top-[226.75px] origin-top-left rotate-[-119.52deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[17.16px] top-[219.03px] origin-top-left rotate-[-116.55deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[14.01px] top-[212.73px] origin-top-left rotate-[-113.57deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[10.72px] top-[205.05px] origin-top-left rotate-[-111.21deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[9.40px] top-[201.77px] origin-top-left rotate-[-108.84deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[6.55px] top-[193.23px] origin-top-left rotate-[-106.25deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[5.34px] top-[189.12px] origin-top-left rotate-[-104.07deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[3.68px] top-[182.43px] origin-top-left rotate-[-101.67deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[2.54px] top-[176.87px] origin-top-left rotate-[-99.48deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[1.64px] top-[171.68px] origin-top-left rotate-[-96.85deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[0.60px] top-[162.69px] origin-top-left rotate-[-93.76deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[0.14px] top-[155.79px] origin-top-left rotate-[-90.88deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[0.08px] top-[146.44px] origin-top-left rotate-[-88.23deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[0.12px] top-[143.29px] origin-top-left rotate-[-86.02deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[0.83px] top-[134.06px] origin-top-left rotate-[-83.37deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[1.33px] top-[129.66px] origin-top-left rotate-[-81.18deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[2.41px] top-[122.81px] origin-top-left rotate-[-78.76deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[3.37px] top-[117.92px] origin-top-left rotate-[-76.80deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[4.81px] top-[111.72px] origin-top-left rotate-[-73.75deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[7.29px] top-[103.31px] origin-top-left rotate-[-70.72deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[9.65px] top-[96.55px] origin-top-left rotate-[-67.72deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[12.60px] top-[89.43px] origin-top-left rotate-[-65.58deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[14.26px] top-[85.66px] origin-top-left rotate-[-63.02deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[18.36px] top-[77.75px] origin-top-left rotate-[-60.48deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[20.37px] top-[74.14px] origin-top-left rotate-[-58.37deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[23.81px] top-[68.56px] origin-top-left rotate-[-56.06deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[27.32px] top-[63.38px] origin-top-left rotate-[-53.76deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[30.43px] top-[59.05px] origin-top-left rotate-[-51.04deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[36.30px] top-[51.86px] origin-top-left rotate-[-47.91deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[40.96px] top-[46.68px] origin-top-left -rotate-45 justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[46.92px] top-[40.80px] origin-top-left rotate-[-42.71deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[49.20px] top-[38.60px] origin-top-left rotate-[-40.42deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[55.94px] top-[32.92px] origin-top-left rotate-[-37.91deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[59.12px] top-[30.40px] origin-top-left rotate-[-35.82deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[65.18px] top-[26.05px] origin-top-left rotate-[-33.31deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[69.69px] top-[23.08px] origin-top-left rotate-[-31.20deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[74.24px] top-[20.26px] origin-top-left rotate-[-28.46deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[82.58px] top-[15.78px] origin-top-left rotate-[-25.27deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[89.05px] top-[12.71px] origin-top-left rotate-[-22.28deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[97.02px] top-[9.51px] origin-top-left rotate-[-19.92deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[100.18px] top-[8.30px] origin-top-left rotate-[-17.55deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[108.91px] top-[5.61px] origin-top-left rotate-[-14.95deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[112.08px] top-[4.71px] origin-top-left rotate-[-12.98deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[119.84px] top-[2.96px] origin-top-left rotate-[-10.36deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[124.47px] top-[2.09px] origin-top-left rotate-[-8.39deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[130.36px] top-[1.18px] origin-top-left rotate-[-5.52deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[139.53px] top-[0.33px] origin-top-left rotate-[-2.43deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[147.03px] top-0 origin-top-left rotate-[0.66deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[155.12px] top-[0.13px] origin-top-left rotate-[2.87deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[158.95px] top-[0.26px] origin-top-left rotate-[5.30deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[167.28px] top-[1.06px] origin-top-left rotate-[7.73deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[171.77px] top-[1.64px] origin-top-left rotate-[9.92deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[178.54px] top-[2.83px] origin-top-left rotate-[12.33deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[184.13px] top-[4.04px] origin-top-left rotate-[14.51deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[189.59px] top-[5.40px] origin-top-left rotate-[17.33deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[198.82px] top-[8.33px] origin-top-left rotate-[20.57deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[205.56px] top-[10.86px] origin-top-left rotate-[23.57deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[212.43px] top-[13.88px] origin-top-left rotate-[25.70deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[216.30px] top-[15.69px] origin-top-left rotate-[28.25deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[224.11px] top-[19.95px] origin-top-left rotate-[30.78deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[227.64px] top-[22.02px] origin-top-left rotate-[32.89deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[233.10px] top-[25.55px] origin-top-left rotate-[35.20deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[238.29px] top-[29.23px] origin-top-left rotate-[37.50deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[242.52px] top-[32.42px] origin-top-left rotate-[40.21deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[249.60px] top-[38.46px] origin-top-left rotate-[43.33deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[254.68px] top-[43.24px] origin-top-left rotate-[46.25deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[260.43px] top-[49.32px] origin-top-left rotate-[48.54deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			></div>
			<div
				class="absolute left-[262.60px] top-[51.69px] origin-top-left rotate-[50.83deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[268.15px] top-[58.58px] origin-top-left rotate-[53.34deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[270.63px] top-[61.86px] origin-top-left rotate-[55.43deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[274.81px] top-[67.97px] origin-top-left rotate-[57.95deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[277.71px] top-[72.60px] origin-top-left rotate-[60.06deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[280.46px] top-[77.30px] origin-top-left rotate-[62.81deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[284.72px] top-[85.68px] origin-top-left rotate-[66deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
			<div
				class="absolute left-[287.64px] top-[92.21px] origin-top-left rotate-[69deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				b
			</div>
			<div
				class="absolute left-[290.50px] top-[99.63px] origin-top-left rotate-[72.24deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				T
			</div>
			<div
				class="absolute left-[293.21px] top-[108.30px] origin-top-left rotate-[74.84deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				r
			</div>
			<div
				class="absolute left-[294.37px] top-[112.49px] origin-top-left rotate-[77.02deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				a
			</div>
			<div
				class="absolute left-[295.90px] top-[119.22px] origin-top-left rotate-[79.42deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[296.95px] top-[124.86px] origin-top-left rotate-[81.61deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				f
			</div>
			<div
				class="absolute left-[297.83px] top-[130.65px] origin-top-left rotate-[84.48deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				H
			</div>
			<div
				class="absolute left-[298.63px] top-[139.13px] origin-top-left rotate-[87.35deg] justify-center font-['Craftwork_Grotesk'] text-sm font-normal text-white"
			>
				u
			</div>
	<img
		class="h-[419px] w-[361px] absolute top-[-1px] left-[-40px]"
		src="/images/1ff360105e966717442a58e5236d152dfefc9687.png"
	/>
		</div>
	</div>
</div>
<ContactForm isOpen={isOpen} onClose={() => (isOpen = false)} />
