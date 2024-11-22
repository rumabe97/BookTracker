import i18n from "../../../lib/i18n.ts";

export enum BookStatus {
    Reading = 'reading',
    Completed = 'completed',
    Pending = 'pending',
    Discarded = 'discarded',
    Wishlist = 'wishlist',
    NoStatus = 'NoStatus'
}

export const statusLabels: Record<BookStatus, string> = {
    [BookStatus.Reading]: i18n.t('reading', {ns:'statusLabel'}),
    [BookStatus.Completed]: i18n.t('completed', {ns:'statusLabel'}),
    [BookStatus.Pending]: i18n.t('pending', {ns:'statusLabel'}),
    [BookStatus.Wishlist]: i18n.t('wishlist', {ns:'statusLabel'}),
    [BookStatus.Discarded]: i18n.t('discarded', {ns:'statusLabel'}),
    [BookStatus.NoStatus]: i18n.t('noStatus', {ns:'statusLabel'}),
};

export const getStatusOptions = () => {
    return Object.values(BookStatus).filter((status) => status !== BookStatus.NoStatus).map((status) => ({
        label: statusLabels[status],
        value: status,
    }));
};
