import { atom } from 'recoil'; 

export const networkAtom = atom({
    key: 'networkAtom',
    default: 102
})


export const jobAtom = atom({
    key: 'jobAtom',
    default: 0
})


export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 12
})

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 0
})