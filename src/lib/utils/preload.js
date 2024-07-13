import { progress } from "$lib/store.js"    

const preloadImages = async (urls) => {
    let loadedImages = 0;

    const promises = urls.map((url) => new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            loadedImages++;
            progress.set((loadedImages / urls.length) * 100);
            resolve(img);
        };
        img.onerror = reject;
    }));

    return Promise.all(promises);
};

export default preloadImages;