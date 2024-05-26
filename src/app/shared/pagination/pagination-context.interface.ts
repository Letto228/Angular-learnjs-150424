export interface PaginationContext<T> {
    $implicit: T[];
    pageIndexes: number;
    chankSize: number;
    appPaginationOf: T[];
    next: () => void;
    back: () => void;
}
