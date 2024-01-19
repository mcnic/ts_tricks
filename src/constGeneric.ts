declare function useSatuses<T>(statuses: T[]): T;
const loadingStatus = useSatuses(['loading', 'idle']);
// type is 'string'

// with 'const'
declare function useSatuses2<const T>(statuses: T[]): T;
const loadingStatus2 = useSatuses2(['loading', 'idle']);
// type is 'loading' | 'idle'
