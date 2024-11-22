import {
    faBookOpen,
    faCirclePlus,
    faClock,
    faHouse,
    faList,
    faXmark,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";

import i18n from '../../lib/i18n';

export interface NavItem {
    icon: IconDefinition;
    label: string;
    screen: string;
}

export const navItems: NavItem[] = [
    {icon: faHouse, label: i18n.t('home', {ns:'sidebar'}), screen: 'Home'},
    {icon: faCirclePlus, label: i18n.t('searchBooks', {ns:'sidebar'}), screen: 'SearchBook'},
    {icon: faBookOpen, label: i18n.t('myBooks', {ns:'sidebar'}), screen: 'CompletedBooks'},
    {icon: faClock, label: i18n.t('pending', {ns:'sidebar'}), screen: 'PendingBooks'},
    {icon: faList, label: i18n.t('myWishlist', {ns:'sidebar'}), screen: 'WishlistBooks'},
    {icon: faXmark, label: i18n.t('discarded', {ns:'sidebar'}), screen: 'DiscardedBooks'},
];
