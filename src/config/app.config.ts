interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['End User'],
  tenantRoles: ['Security Analyst', 'Data Scientist', 'Team Member', 'Owner'],
  tenantName: 'Organization',
  applicationName: 'ControlAI',
  addOns: ['file', 'chat', 'notifications'],
};
