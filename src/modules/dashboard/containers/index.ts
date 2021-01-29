import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './light/light.component';
import { StaticComponent } from './static/static.component';
import { DashboardsComponent } from './dashboards/dashboards.component';

export const containers = [DashboardComponent, StaticComponent, LightComponent, DashboardsComponent];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './light/light.component';
export * from './dashboards/dashboards.component';

