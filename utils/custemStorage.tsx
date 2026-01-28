
/**Client의 Storage 사용을 간소화*/
export const custemStorage = {
    local: {
        /**찾기 후 생성*/
        get: (key: string, value: any = null) => {
            if (typeof window === 'undefined') return;
            if (localStorage.getItem(key) === null) { custemStorage.local.set(key, value); }
            return JSON.parse(localStorage.getItem(key) as string);
        },
        /**생성*/
        set: (key: string, value: any) => {
            if (typeof window === 'undefined') return;
            const valueToJson = JSON.stringify(value);
            localStorage.setItem(key, valueToJson);
            return localStorage.getItem(key);
        },
        /**단일 삭제*/
        remove: (key: string) => {
            if (typeof window === 'undefined') return;
            localStorage.removeItem(key);
        },
        /**모두 삭제*/
        clear: () => {
            if (typeof window === 'undefined') return;
            localStorage.clear();
        }
    }
}