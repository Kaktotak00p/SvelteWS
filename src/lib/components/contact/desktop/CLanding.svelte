<script>
	import CardsD from "./CardsD.svelte";


</script>
<div class="w-[1400px] h-[600px] relative bg-[#020202] overflow-hidden mx-auto mt-20 mb-8 ">
  <div class="text-center text-white text-[45px] font-[900] font-['Craftwork_Grotesk'] uppercase w-full text-nowrap">Хочеш  нарешті  знайти  нормальну тіму?</div>
  <img src="/images/timu.svg" class="right-[130px] absolute" />
  <div class="flex flex-row justify-center items-center ">
    <div class="relative">
      <img src="/images/office.jpg" class="w-[573px] h-[376px] mx-auto rounded-[8px] shadow-[3.1840412616729736px_3.1840412616729736px_0px_0px_rgba(255,65,223,1.00)]"  />
      <div class="w-[100.99px] origin-top-left rotate-[-12.08deg] text-center justify-start text-[#bdfd02] font-['Caveat'] font-[400] text-xs absolute left-[360px] top-[300px]">ти під час пошуку роботи</div>
      <img src="/images/arrow.svg" class="absolute left-[360px] top-[220px]" />
    </div>
    <div>
      <CardsD />
    </div>
  </div>
</div>