export function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
export function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
export function isIOS() {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
//# sourceMappingURL=ARUtils.js.map