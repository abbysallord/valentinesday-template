import { useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useGsapContext = (scope) => {
    const ctx = gsap.context(() => { }, scope);
    return ctx;
};
