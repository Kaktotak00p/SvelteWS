<script>
    import { fade } from 'svelte/transition';

    let vacancies = [
        {
            id: '001',
            title: 'Affiliate Manager',
            location: 'Київ, віддалено',
            description: 'Вмієш будувати стосунки з рекламодавцем та знаєш коли варто проявити характер, а коли – просто вислухати? Якщо ти хочеш впливати, а не просто "вести клієнтів" — ми на тебе чекаємо ✌️',
            requirements: [
                'Досвід роботи на позиції affiliate-менеджера або BizDev — від 1 року',
                'Розуміння, як працює рекламна екосистема Gambling',
                'Вміння вести переговори, аргументувати, аналізувати',
                'Готовність до поїздок (Київ, Варшава — опціонально)',
                'Англійська або інші мови — перевага'
            ],
            benefits: [
                'Конкурентну ЗП + система бонусів',
                'Робочий формат на вибір: віддалено / офіс / гібрид',
                'Інструменти, які дійсно допомагають, а не заважають',
                'Можливість рости в умовах, де цінується ініціатива'
            ],
            isOpen: false
        },
        {
            id: '002',
            title: 'Senior Frontend Developer',
            location: 'Київ, віддалено',
            description: '',
            requirements: [],
            benefits: [],
            isOpen: false
        },
        {
            id: '003',
            title: 'Product Manager',
            location: 'Київ, віддалено',
            description: '',
            requirements: [],
            benefits: [],
            isOpen: false
        },
    ];

    function toggleVacancy(id) {
        vacancies = vacancies.map(v => {
            if (v.id === id) {
                return { ...v, isOpen: !v.isOpen };
            }
            return { ...v, isOpen: false };
        });
    }
</script>

<div class="w-full flex flex-col justify-center items-center py-5">
    <div class="justify-start text-white text-[32px] font-normal font-['Craftwork_Grotesk'] uppercase w-full px-10">//:вакансії</div>
<div class="w-[1400px] flex flex-row justify-center">
    <img class="w-[465px] h-[396px] rounded-[10px] shadow-[4px_4px_0px_0px_rgba(255,65,223,1.00)]" src="/images/office1.jpg" alt="office" />
    <div class="w-full px-10 py-20">
        {#each vacancies as vacancy}
            <div class="w-full">
                <div class="w-full inline-flex justify-between items-center">
                    <div class="flex justify-start items-end gap-2.5">
                        <div class="justify-start">
                            <span class="text-[#bdfd00] text-lg font-normal font-['Inter']">{vacancy.id}</span>
                            <span class="text-white text-lg font-normal font-['Inter']"> </span>
                        </div>
                        <div class="justify-start text-white text-lg font-bold font-['Craftwork_Grotesk'] uppercase">{vacancy.title}</div>
                    </div>
                    <div class="w-[328px] flex justify-between items-center">
                        <div class="justify-start text-white text-lg font-normal font-['Craftwork_Grotesk']">{vacancy.location}</div>
                        <div class="size- flex justify-start items-center gap-[5px]">
                            <button 
                                on:click={() => toggleVacancy(vacancy.id)}>
                            <img class="size-[35px] origin-center scale-x-[-1] transition-transform duration-300" 
                                 class:rotate-180={vacancy.isOpen}
                                 src="/images/arrowPink.png" 
                                 alt="arrow" />
                            </button>
                            <button 
                                on:click={() => {}}
                                class="justify-start text-[#bdfd02] text-lg font-normal font-['Cabinet_Grotesk']">
                                [відгукнутись]
                            </button>
                        </div>
                    </div>
                </div>

                {#if vacancy.isOpen}
                    <div class="w-[90%] inline-flex flex-col justify-start items-start gap-5 my-5 px-2" transition:fade>
                        {#if vacancy.description}
                            <div class="self-stretch justify-start text-white text-lg font-normal font-['Craftwork_Grotesk']">
                                {vacancy.description}
                            </div>
                        {/if}
                        
                        {#if vacancy.requirements.length > 0}
                            <div class="self-stretch flex flex-col justify-start items-start gap-2.5">
                                <div class="self-stretch justify-start text-[#ff41df] text-lg font-bold font-['Craftwork_Grotesk']">Що важливо:</div>
                                <div class="self-stretch justify-start text-white text-lg font-normal font-['Craftwork_Grotesk']">
                                    {#each vacancy.requirements as requirement}
                                        {requirement}<br/>
                                    {/each}
                                </div>
                            </div>
                        {/if}

                        {#if vacancy.benefits.length > 0}
                            <div class="self-stretch flex flex-col justify-start items-start gap-2.5">
                                <div class="self-stretch justify-start text-[#ff41df] text-lg font-bold font-['Craftwork_Grotesk']">Що ми даємо:</div>
                                <div class="self-stretch justify-start text-white text-lg font-normal font-['Craftwork_Grotesk']">
                                    {#each vacancy.benefits as benefit}
                                        {benefit}<br/>
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>
</div>