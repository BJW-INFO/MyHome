
export interface ProfileProp {
  id: number,
  account: string,
  character: number,
  etc: any | undefined,
}

// 이거 배열로 바꿔줘야됌 타입 -> 배열로바꿔서 접근 
export const contentsSort = (data: any[],type:string): any[] => {
  return [...data].sort((a, b) => {
    // profiles 객체 내부의 값에 접근 (핵심!)
    const accA = a[type]?.account ?? '';
    const accB = b[type]?.account ?? '';

    const getWeight = (val: string) => {
      if (val === 'U') return 0;  // 1등: U
      if (val === '') return 1;   // 2등: 빈 값
      return 2;                   // 3등: 나머지
    };

    const weightA = getWeight(accA);
    const weightB = getWeight(accB);

    if (weightA !== weightB) {
      return weightA - weightB;
    }

    if (accA !== accB) {
      return accA.localeCompare(accB);
    }

    // character도 profiles 안에 있으므로 경로 수정
    return (a.profiles?.character ?? 0) - (b.profiles?.character ?? 0);
  });
};