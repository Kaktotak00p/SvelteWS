<script>
    export let isOpen = false;
    export let onClose = () => {};

    let source = "";
    let isDropdownOpen = false;
    let selectedPositionDefault = "Обрати";
    let selectedPosition = selectedPositionDefault;
    let selectedFile = null;
    let fileInputRef;
    let fileName = "Choose File";

    let name = "";
    let email = "";
    let telegram = "";
    let reasons = "";

    const positions = [
        "Affiliate Manager",
        "Team Lead of Media Buying (FB)",
        "Middle / Senior Media Buyer (FB)",
        "Motion Designer"
    ];

    const sources = [
        "Instagram",
        "Реклама",
        "Від знайомих",
        "Інше"
    ];

    function setSource(value) {
        source = value;
    }

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }

    function selectPosition(position) {
        selectedPosition = position;
        isDropdownOpen = false;
    }

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
            selectedFile = file;
            fileName = file.name;
        }
    }

    async function handleSubmit() {
        if (!name || !email || !telegram || selectedPosition==selectedPositionDefault || !source || !reasons) {
            alert("Please fill in all required fields.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("telegram", telegram);
        formData.append("position", selectedPosition);
        formData.append("source", source);
        formData.append("reasons", reasons);
        if(selectedFile) {
            formData.append("resume", selectedFile);
        }
        try {
            const response = await fetch("/api/apply", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                alert("Form submitted successfully!");
                onClose(); // Close the modal after submission
            } else {
                throw new Error(result.message || "Failed to submit form");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting your form. Please try again later.");
            return;
        }
    }
</script>
{#if isOpen}


<div class="fixed inset-0 bg-black overflow-x-hidden overflow-y-auto z-40 mx-auto">
<div class="w-full h-full fixed bg-black overflow-hidden p-2">
    <div class="w-[1914px] h-[233px] relative">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-0 top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[953px] top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1914px] top-0 absolute  blur-[17px]">
    </div>
    <div class="w-[1914px] h-[233px] relative">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] -left-[317px] top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[636px] top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1597px] top-0 absolute  blur-[17px]">
    </div>
    <div class="w-[1915px] h-[233px] relative">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-0 top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[953px] top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1914px] top-0 absolute  blur-[17px]">
    </div>
    <div class="w-[1914px] h-[233px] relative">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] -left-[317px] top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[636px] top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1597px] top-0 absolute  blur-[17px]">
    </div>
    <div class="w-[1914px] h-[233px] relative">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-0 top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[953px] top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1914px] top-0 absolute  blur-[17px]">
    </div>
    <div class="w-[1914px] h-[233px] relative">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] -left-[317px] top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[636px] top-0 absolute  blur-[17px]">
        <img src="/images/TRAFFHUB.png" class="w-[961px] h-[233px] left-[1597px] top-0 absolute  blur-[17px]">
    </div>
</div>
    <button on:click={() => onClose()} class="absolute top-[41px] right-5 invert">
        <img src="/images/cross.svg" alt="logo">
    </button>
<div class="w-[680px] h-fit my-32 relative inset-0 bg-black overflow-y-auto overflow-x-hidden z-40 mx-auto rounded-[30px] shadow-[2px_2px_34px_0px_rgba(255,65,223,0.80)] pt-10 ">
    <form>

        <div class=" w-fit mx-8 inline-flex flex-col justify-start items-center gap-14 pb-10">
            <div class="w-full self-stretch flex flex-col justify-center items-start gap-12">
                <input 
                id="name"
                type="text"
            placeholder="Ім'я*"
            bind:value={name}
            class="w-full bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            />
            <input 
            id="name"
            type="text"
            placeholder="E-mail*"
            bind:value={email}
            class="w-full bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            />
            <input 
            id="name"
            type="text"
            placeholder="Нік в Telegram*"
            bind:value={telegram}
            class="w-full bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border-0 border-b border-slate-600 focus:border-white focus:outline-none"
            />
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">На яку позицію відгукуєтесь?*</div>
                <div class="self-stretch flex flex-col justify-start items-start gap-[5px]">
                    <div class="w-full flex flex-col justify-start items-start gap-[5px] relative">
            <button 
            on:click={toggleDropdown} 
                class="w-full flex flex-row justify-between cursor-pointer"
                >
                <div class="w-fit h-8 {selectedPosition === 'Обрати' ? 'text-zinc-500' : 'text-white'} text-xl font-normal font-['Craftwork_Grotesk']">{selectedPosition}</div>
                <img src="./images/Vector 16.svg" class:rotate-180={isDropdownOpen} />
            </button>
            <div class="w-full h-0 rounded outline outline-1 outline-offset-[-0.50px] outline-white"></div>
            
            {#if isDropdownOpen}
            <div class="absolute top-full left-0 inline-flex flex-col justify-start items-start gap-[5px] w-full bg-[#9c9c9c]/40 backdrop-blur z-40 rounded-b-[20px] px-5 pb-1">
                {#each positions as position, i}
                    <button 
                    on:click={() => selectPosition(position)}
                        class="self-stretch h-8 justify-center text-white text-xl font-normal font-['Craftwork_Grotesk'] w-full text-left hover:color-[#FF41df] "
                    >
                        {position}
                    </button>
                    {#if i < positions.length - 1}
                    <div class="w-full h-0 outline outline-[1px] outline-white"></div>
                    {/if}
                {/each}
            </div>
            {/if}
        </div>
                </div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">Резюме/портфоліо*</div>
                <div class="inline-flex justify-start items-center gap-5">
                    <!-- <div class="w-16 h-16 relative bg-white/0 border border-[#FF41df] rounded-[5px] flex justify-center items-center">
                        <img src="/images/fileIcon.svg">
                    </div> -->
                    <div class="w-80 inline-flex flex-col justify-start items-start gap-2.5">
                        <input 
                            type="file" 
                            bind:this={fileInputRef}
                            on:change={handleFileSelect}
                            accept=".jpg,.pdf"
                            class="hidden"
                        />
                        <div class="self-stretch p-2.5 bg-neutral-700 rounded-[5px] inline-flex justify-between items-center">
                            <button 
                                on:click={() => fileInputRef.click()} 
                                class="{selectedFile ? 'w-full' : ''} px-5 py-2.5 rounded-[5px] outline outline-1 outline-offset-[-0.50px] outline-[#BDFD00] flex justify-center items-center gap-2.5"
                            >
                                <div class="flex justify-center items-center gap-3.5">
                                    <div class="justify-start {selectedFile ? 'text-[#FF41df]' : 'text-[#BDFD00]'} text-base font-medium font-['Craftwork_Grotesk'] leading-snug truncate max-w-[200px]">
                                        {fileName}
                                    </div>
                                </div>
                            </button>
                            {#if !selectedFile}
                            <div class="flex justify-center items-center gap-2.5">
                                <div class="justify-start text-zinc-400 text-base font-normal font-['Inter'] leading-snug mr-[70px]">JPG, PDF</div>
                            </div>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
                <div class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">Звідки про нас дізнались*</div>
                <div class="self-stretch inline-flex justify-start items-center gap-3.5">
                {#each sources as item}
                {#if item === source}
                    <div class="w-fit h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-white inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <img src="/images/selected.svg"/>
                            <div class="justify-center text-white text-xl font-normal font-['Craftwork_Grotesk'] text-nowrap">{item}</div>
                        </div>
                    </div>
                {:else}
                    <button on:click={() => setSource(item)} class="w-fit h-8 px-[5px] py-1 rounded outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-start gap-2.5">
                        <div class="inline-flex justify-start items-center gap-1.5">
                            <div class="w-5 h-5 rounded-full border border-neutral-400"></div>
                            <div class="justify-center text-neutral-400 text-xl font-normal font-['Craftwork_Grotesk'] text-nowrap">{item}</div>
                        </div>
                    </button>
                    {/if}
                {/each}
                </div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
            <label for="reasons" class="self-stretch justify-center text-white text-2xl font-normal font-['Craftwork_Grotesk']">
                3 причини, щоб дати тобі джоб-оффер від TraffHub
            </label>
            <textarea 
                id="reasons"
                class="w-full min-h-[120px] bg-transparent text-white text-2xl font-normal font-['Craftwork_Grotesk'] border border-slate-600 rounded-[5px] p-3 focus:border-white focus:outline-none resize-y"
                bind:value={reasons}
                ></textarea>
        </div>
            <button class="w-64 h-14 px-5 py-3.5 bg-[#FF41df] rounded inline-flex justify-center items-center gap-2.5 mx-auto" 
            on:click={handleSubmit}
            >
                <span class="w-56 self-stretch justify-center text-white text-2xl font-bold font-['Craftwork_Grotesk']">ВІДГУКНУТИСЬ</span>
            </button>
        </div>
    </div>
</form>
</div>
<div class="left-[35px] top-[43px] absolute justify-start text-white text-4xl font-normal font-['Craftwork_Grotesk'] uppercase">//:відгукнутись на вакансію</div>
</div>

{/if}