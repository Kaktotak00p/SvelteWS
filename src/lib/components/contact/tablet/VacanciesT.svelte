<script>
    const vacancies = [
        {
            id: '001',
            title: 'Affiliate Manager',
            location: 'Київ, віддалено',
        },
        {
            id: '002',
            title: 'Senior Frontend Developer',
            location: 'Київ, віддалено',
        },
        {
            id: '003',
            title: 'Product Manager',
            location: 'Київ, віддалено',
        },
    ];   
</script>
<div class="w-full flex flex-col justify-center items-center py-5">
    <div class="justify-start text-white text-[32px] font-normal font-['Craftwork_Grotesk'] uppercase w-full px-10">//:вакансії</div>
   <div class="w-full px-20 py-20">
    {#each vacancies as vacancy}
       <div class="w-full inline-flex justify-between items-center">
           <div class="flex justify-start items-end gap-2.5">
               <div class="justify-start"><span class="text-[#bdfd00] text-lg font-normal font-['Inter']">{vacancy.id}</span><span class="text-white text-lg font-normal font-['Inter']"> </span></div>
               <div class="justify-start text-white text-lg font-bold font-['Craftwork_Grotesk'] uppercase">{vacancy.title}</div>
            </div>
            <div class="w-[328px] flex justify-between items-center">
                <div class="justify-start text-white text-lg font-normal font-['Craftwork_Grotesk']">{vacancy.location}</div>
                <div class="size- flex justify-start items-center gap-[5px]">
                    <img class="size-[35px] origin-center scale-x-[-1]" src="/images/arrowPink.png" />
                    <button class="justify-start text-[#bdfd02] text-lg font-normal font-['Cabinet_Grotesk']">[відгукнутись]</button>
                </div>
            </div>
        </div>
    {/each}
    </div> 
    <img class="w-[465px] h-[396px] rounded-[10px] shadow-[4px_4px_0px_0px_rgba(255,65,223,1.00)]" src="/images/office1.jpg" />
</div>