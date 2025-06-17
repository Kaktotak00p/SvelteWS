<script>
	import CounterLogic from "../counterLogic.svelte";

</script>

<div class="section-small" id="who">
	<div class="frame-80">
		<div class="mx-auto w-[1370px]"><span class="fspan">//:ХТО МИ</span></div>
		<div class="frame-93">
			<div class="frame-91">
				<div class="frame-62">
					<div><span class="traffhub_span text-nowrap">TraffHub – це компанія</span></div>
					<img class="image" src="/images/advantages1.png" />
					<div><span class="igaming_span text-nowrap">у сфери iGaming</span></div>
				</div>
				<div class="frame-63">
					<div class="frame-61">
						<div>
							<span class="fspan_01 text-nowrap">З нами ти можеш вийти за межі стандартів,</span>
						</div>
						<img class="image_01" src="/images/advantages2.png" />
					</div>
					<div class="frame-60">
						<img class="image_03" src="/images/advantages3.png" />
						<div class="image_04"></div>
						<div><span class="fspan_02 text-nowrap">підкорити нові вершини</span></div>
					</div>
					<div class="frame-59">
						<div>
							<span class="fspan_03 text-nowrap">
								і працювати з командою, яка надихає результатами</span
							>
						</div>
						<img class="image_05" src="/images/advantages4.png" />
					</div>
				</div>
			</div>
			<div
				class="flex h-28 flex-col items-center justify-center gap-2.5 self-stretch text-nowrap py-3.5"
			>
				<img src="/images/Union.svg" class=" absolute z-0 object-cover" />
				<div class="size- inline-flex items-center justify-start gap-[70px]">
					<div class="size- inline-flex flex-col items-start justify-start">
						<div class="justify-start font-['Craftwork_Grotesk'] text-4xl font-medium text-white">
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
							class="w-[145px] justify-start font-['Craftwork_Grotesk'] text-4xl font-medium text-white"
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
						<div class="justify-start font-['Craftwork_Grotesk'] text-4xl font-medium text-white">
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
	</div>
</div>

<style>
	.section-small {
		min-height: 600px;
	}

	.fspan {
		color: white;
		letter-spacing: -0.04em;
		font-size: 36px;
		font-family: Craftwork Grotesk;
		font-weight: 400;
		text-transform: uppercase;
		word-wrap: break-word;
	}

	.traffhub_span {
		color: white;
		font-size: 28px;
		letter-spacing: -0.04em;
		font-family: Craftwork Grotesk;
		font-weight: 700;
		text-transform: uppercase;
		word-wrap: break-word;
	}

	.image {
		width: 384px;
		height: 34px;
	}

	.igaming_span {
		color: white;
		font-size: 28px;
		font-family: Craftwork Grotesk;
		font-weight: 700;
		text-transform: uppercase;
		word-wrap: break-word;
	}

	.fspan_01 {
		color: white;
		letter-spacing: -0.04em;
		font-size: 28px;
		font-family: Craftwork Grotesk;
		font-weight: 600;
		text-transform: uppercase;
		word-wrap: break-word;
	}

	.image_01 {
		width: 342px;
		height: 34px;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
	}

	.image_03 {
		width: 677px;
		height: 34px;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
	}

	.image_04 {
		width: 677px;
		height: 34px;
		mix-blend-mode: overlay;
		background: rgba(255, 65, 223, 0.7);
	}

	.fspan_02 {
		color: white;
		font-size: 28px;
		letter-spacing: -0.04em;
		font-family: Craftwork Grotesk;
		font-weight: 600;
		text-transform: uppercase;
		word-wrap: break-word;
	}

	.fspan_03 {
		color: white;
		letter-spacing: -0.04em;
		font-size: 28px;
		font-family: Craftwork Grotesk;
		font-weight: 600;
		text-transform: uppercase;
		word-wrap: break-word;
	}

	.image_05 {
		width: 169px;
		height: 34px;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
	}

	.frame-62 {
		align-self: stretch;
		justify-content: space-between;
		align-items: center;

		display: inline-flex;
	}

	.frame-61 {
		align-self: stretch;
		justify-content: space-between;
		align-items: center;
		display: inline-flex;
	}

	.frame-60 {
		align-self: stretch;
		justify-content: space-between;
		align-items: center;
		display: inline-flex;
	}

	.frame-59 {
		align-self: stretch;
		justify-content: space-between;
		align-items: center;
		display: inline-flex;
	}

	.frame-63 {
		align-self: stretch;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
		gap: 20px;
		display: flex;
	}

	.frame-91 {
		width: 1093px;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
		gap: 50px;
		display: flex;
	}

	.frame-93 {
		width: 100%;
		left: 0px;
		top: 123px;
		position: absolute;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 80px;
		display: inline-flex;
	}

	.frame-80 {
		width: 100%;
		height: 100%;
		position: relative;
	}
</style>
