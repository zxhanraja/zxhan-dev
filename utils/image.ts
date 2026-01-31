/**
 * Utility to generate optimized ImageKit URLs
 * @param url Original ImageKit URL
 * @param width Desired width
 * @param quality Quality (default 80)
 * @returns Optimized URL
 */
export const getOptimizedImage = (url: string, width?: number, quality: number = 80): string => {
    if (!url || !url.includes('imagekit.io')) return url;

    const separator = url.includes('?') ? '&' : '?';
    let transformations = `tr=q-${quality},f-auto`;

    if (width) {
        transformations += `,w-${width}`;
    }

    return `${url}${separator}${transformations}`;
};
