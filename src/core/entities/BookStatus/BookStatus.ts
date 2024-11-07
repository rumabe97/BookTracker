export enum BookStatus {
    Reading = 'reading',
    Completed = 'completed',
    Pending = 'pending',
    Discarded = 'discarded',
    Wishlist = 'wishlist',
    NoStatus = 'NoStatus'
}

export const statusLabels: Record<BookStatus, string> = {
    [BookStatus.Reading]: "Reading",
    [BookStatus.Completed]: "Completed",
    [BookStatus.Pending]: "Pending",
    [BookStatus.Wishlist]: "Wishlist",
    [BookStatus.Discarded]: "Discarded",
    [BookStatus.NoStatus]: "No status",
};

export const getStatusOptions = () => {
    return Object.values(BookStatus).filter((status) => status !== BookStatus.NoStatus).map((status) => ({
        label: statusLabels[status],
        value: status,
    }));
};
