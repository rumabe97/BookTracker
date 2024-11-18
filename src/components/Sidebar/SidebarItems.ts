import {
    faBookOpen,
    faCirclePlus,
    faClock,
    faHouse,
    faList,
    faXmark,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";

export interface NavItem {
    icon: IconDefinition;
    label: string;
    screen: string;
}

export const navItems: NavItem[] = [
    {icon: faHouse, label: 'Home', screen: 'HomeScreen'},
    {icon: faCirclePlus, label: 'Search Books', screen: 'SearchBook'},
    {icon: faBookOpen, label: 'My Books', screen: 'CompletedBooks'},
    {icon: faClock, label: 'Pending', screen: 'PendingBooks'},
    {icon: faList, label: 'Wishlist', screen: 'WishListBooks'},
    {icon: faXmark, label: 'Discarded', screen: 'DiscardedBooks'},
];
