// source https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
export const isIOS = () => {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}


export const isARSupported = (resolve, reject) => {
    if (!navigator?.xr?.isSessionSupported) {
        reject?.();
        return;
    }
    navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        supported ? resolve() : reject?.(supported);
    }).catch((e) => {
        console.warn(e)
        reject?.(e)
    });
}
