export function isMobile(userAgent: string) {
    return userAgent == "" || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}