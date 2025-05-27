import { writable } from 'svelte/store';

export const DeviceType = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    DESKTOP: 'desktop'    
};

export const device = writable(DeviceType.DESKTOP);