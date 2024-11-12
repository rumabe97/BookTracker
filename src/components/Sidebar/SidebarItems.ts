import {faBookOpen, faCirclePlus, faClock, faHouse, faList, IconDefinition} from "@fortawesome/free-solid-svg-icons";

export interface NavItem {
    icon: IconDefinition;
    label: string;
    screen: string;
}

export const navItems: NavItem[] = [
    {icon: faHouse, label: 'Home', screen: 'HomeScreen'},
    {icon: faCirclePlus, label: 'Add Book', screen: 'SearchBook'},
    {icon: faBookOpen, label: 'Read', screen: 'Read'},
    {icon: faClock, label: 'Pending', screen: 'Pending'},
    {icon: faList, label: 'Wishlist', screen: 'Wishlist'},
];
