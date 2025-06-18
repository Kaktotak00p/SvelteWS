<script>

	import CounterLogic from "../counterLogic.svelte";

</script>
<div class="inline-flex w-full flex-col items-center justify-center gap-[50px]" id="who">
	<div class="flex w-full flex-col items-center justify-center gap-2.5">
		<div class="inline-flex w-[700px] items-center justify-center gap-[25px]">
			<div class="justify-start font-['Craftwork_Grotesk'] text-2xl font-bold uppercase text-white">
				TraffHub – це компанія у Сфері iGaming
			</div>
		</div>
		<img class="h-[60px] w-[785px]" src="/images/advantages1t.png" />
	</div>
	<div class="flex flex-col items-center justify-center gap-5 w-[770px] text-nowrap">
		<div class="inline-flex w-full items-center justify-between">
			<div
				class="justify-start font-['Craftwork_Grotesk'] text-2xl font-semibold uppercase text-white"
			>
				З нами ти можеш вийти за межі стандартів,
			</div>
			<img class="h-[34px] w-[137px] bg-black/20" src="/images/advantages2t.png" />
		</div>
		<div class="inline-flex w-full items-center justify-between gap-6">
			<img class="h-[34px] w-[390px]" src="/images/advantages3t.png" />
			<div
				class="justify-start font-['Craftwork_Grotesk'] text-2xl font-semibold uppercase text-white"
			>
				підкорити нові вершини
			</div>
		</div>
		<div
			class="w-fit justify-center font-['Craftwork_Grotesk'] text-2xl font-semibold uppercase text-white"
		>
			і працювати з командою, яка надихає результатами
		</div>
	</div>
	<div class="h-[200px] w-full">
		<img src="/images/leftCont.svg" class="absolute left-4 h-[200px]"/>
		<img src="/images/rightCont.svg" class="absolute right-4 h-[200px]"/>
		<!-- <img src="/images/UnionT.svg" class="absolute z-0 object-cover object-fill px-4" /> -->
		<div class="inline-flex w-full items-center justify-around pt-10">
			<div class="size- inline-flex flex-col items-start justify-start">
				<div class="justify-start font-['Craftwork_Grotesk'] text-3xl font-medium text-white">
					<CounterLogic />	
				</div>
				<div
					class="justify-start self-stretch font-['Craftwork_Grotesk'] text-xl font-semibold text-white"
				>
					FTD
				</div>
			</div>
			<div
				class="h-[92px] w-0 rounded-sm outline outline-[3px] outline-offset-[-1.50px] outline-[#bdfd02]"
			></div>
			<div class="inline-flex h-[92px] w-[145px] flex-col items-start justify-center">
				<div
					class="w-[145px] justify-start font-['Craftwork_Grotesk'] text-3xl font-medium text-white"
				>
					iGaming
				</div>
				<div
					class="justify-start self-stretch font-['Craftwork_Grotesk'] text-xl font-semibold text-white"
				>
					вертикаль
				</div>
			</div>
			<div
				class="h-[92px] w-0 rounded-sm outline outline-[3px] outline-offset-[-1.50px] outline-[#bdfd02]"
			></div>
			<div class="inline-flex h-[92px] flex-col items-start justify-center">
				<div class="justify-start font-['Craftwork_Grotesk'] text-3xl font-medium text-white">
					FB |ASO |IN-APP
				</div>
				<div
					class="justify-start self-stretch font-['Craftwork_Grotesk'] text-xl font-semibold text-white"
				>
					джерела
				</div>
			</div>
		</div>
	</div>
</div>
