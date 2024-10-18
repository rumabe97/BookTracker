export function cleanParams(dto: any) {
    return Object.fromEntries(
        Object.entries(dto).filter(([_, value]) => value !== null && value !== undefined)
    );
}
