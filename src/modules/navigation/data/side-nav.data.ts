import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: '',
        items: ['dashboard', 'family', 'emails', 'relation', 'reports',],
    }
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    family: {
        icon: 'users',
        text: 'Family',
        link: '/family',
    },
    emails: {
        icon: 'envelope',
        text: 'Emails',
        link: '/emails',
    },
    relation: {
        icon: 'users',
        text: 'Relationship',
        link: '/relation',
    },
    reports: {
        icon: 'file',
        text: 'Reports',
        link: '/app-reports',
    },
   
};
