// Angular Material.
import { MatDrawerMode } from "@angular/material/sidenav";

// Modelos.
import { SidenavItem } from './sidenav-item';



export interface SidenavConfig {
    items?: SidenavItem[];
    mode?: MatDrawerMode;
    position?: 'start' | 'end';
    route?: string;
    show?: boolean;
    showFooter?: boolean;
    showHeader?: boolean;
};
