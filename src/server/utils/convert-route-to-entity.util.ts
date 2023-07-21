const mapping: Record<string, string> = {
  attacks: 'attack',
  defenses: 'defense',
  models: 'model',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
