<script lang="ts">
    export let state: 'normal' | 'hover' | 'active' | 'progress' | 'disable' = 'normal';
    export let text: string;
    export let width: string = 'auto';
    export let height: string = '56px';
    export let onClick: () => void = () => {};

    let isHovered = false;

    const getStateClasses = (buttonState: string, hovered: boolean): string => {
        if (buttonState === 'disable') {
            return 'bg-neutral-400 cursor-not-allowed';
        }
        if (buttonState === 'active') {
            return 'bg-[#A42A8F]';
        }
        if (hovered || buttonState === 'hover') {
            return 'bg-gradient-to-b from-[#ff41df] to-[#752799]';
        }
        return 'bg-[#ff41df] hover:bg-gradient-to-b hover:from-[#ff41df] hover:to-[#752799]';
    };
</script>

<button 
    class="px-5 py-3.5 rounded inline-flex justify-center items-center gap-2.5 {getStateClasses(state, isHovered)}"
    on:click={onClick}
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
    disabled={state === 'disable'}
    style="width: {width}; height: {height};"
>
    {#if state === 'progress'}
        <div class="flex gap-1">
            <div class="w-[2.65px] h-1.5 bg-white"></div>
            <div class="w-[2.65px] h-1.5 bg-white"></div>
            <div class="w-1.5 h-[2.65px] bg-white"></div>
            <div class="w-1.5 h-[2.65px] bg-white"></div>
            <div class="w-1.5 h-1.5 bg-white"></div>
            <div class="w-1.5 h-1.5 bg-white"></div>
            <div class="w-1.5 h-1.5 bg-white"></div>
            <div class="w-1.5 h-1.5 bg-white"></div>
        </div>
    {/if}
    <div class="justify-center text-white text-2xl font-[600] font-['Craftwork_Grotesk']">{text}</div>
</button>

<style>
    button {
        transform-origin: center;
        backface-visibility: hidden;
    }
</style>