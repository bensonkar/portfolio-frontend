import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: '',
        items: ['dashboard', 'users', 'reports'],
    }
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    users: {
        icon: 'users',
        text: 'User Management',
        submenu: [
            {
                text: 'Roles',
                link: '/roles',
            },
            {
                text: 'Workgroups',
                link: '/workgroups',
            },
            {
                text: 'System Users',
                link: '/system-users',
            }
        ]
    },
    reports: {
        icon: 'file',
        text: 'Reports',
        submenu: [
            {
                text: 'App Reports',
                link: '/app-reports',
            }
        ]
    },
   
};
