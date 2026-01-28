/**깊은 복사*/
export const deepCopy = (obj:any) => JSON.parse(JSON.stringify(obj));