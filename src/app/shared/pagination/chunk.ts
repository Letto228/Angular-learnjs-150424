export function chunk<T>(array: T[] | null | undefined, chunkSize: number): T[][] {
    if (!array?.length) {
        return [];
    }

    const groupsLength = Math.ceil(array.length / chunkSize);

    return Array.from({length: groupsLength}, (_, index) => {
        const start = index * chunkSize;
        const end = start + chunkSize;

        return array.slice(start, end);
    });
}
