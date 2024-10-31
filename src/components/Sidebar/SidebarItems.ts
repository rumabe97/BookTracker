export interface NavItem {
    icon: string;
    label: string;
    screen: string;
}

export const navItems: NavItem[] = [
    {icon: '⌂', label: 'Home', screen: 'HomeScreen'},
    {icon: '+', label: 'Add Book', screen: 'AddBook'},
    {icon: '🕮', label: 'Read', screen: 'Read'},
    {icon: 'time-outline', label: 'Pending', screen: 'Pending'},
    {icon: 'list-outline', label: 'Wishlist', screen: 'Wishlist'},
];
