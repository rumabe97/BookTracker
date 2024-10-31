export interface ThemeType {
    background: string;
    containerBackground: string;
    textColor: string;
    secondaryTextColor: string;
    cardBackground: string;
    activeNavItem: string;
}

export const lightTheme: ThemeType = {
    background: '#e0e0e0',
    containerBackground: '#ffffff',
    textColor: '#333333',
    secondaryTextColor: '#666666',
    cardBackground: '#f0f0f0',
    activeNavItem:'#E8E8E8'
}

export const darkTheme: ThemeType = {
    background: '#3a3a3a',
    containerBackground: '#1a1a1a',
    textColor: '#ffffff',
    secondaryTextColor: '#cccccc',
    cardBackground: '#2a2a2a',
    activeNavItem:'#333333'
}
