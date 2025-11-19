// permissions.ts

export type Permission = {
  create: string;
  read: string;
  update: string;
  delete: string;
};

export type ModulePermissions = {
  display: string;
  name: string;
  permissions: Permission;
};

export const permissions: ModulePermissions[] = [
  {
    display: "Dashboard",
    name: "dashboard",
    permissions: {
      create: "dashboard.create",
      read: "dashboard.read",
      update: "dashboard.update",
      delete: "dashboard.delete",
    },
  },
  {
    display: "Users",
    name: "users",
    permissions: {
      create: "users.create",
      read: "users.read",
      update: "users.update",
      delete: "users.delete",
    },
  },
  {
    display: "Roles",
    name: "roles",
    permissions: {
      create: "roles.create",
      read: "roles.read",
      update: "roles.update",
      delete: "roles.delete",
    },
  },
  {
    display: "Team Members",
    name: "team",
    permissions: {
      create: "team.create",
      read: "team.read",
      update: "team.update",
      delete: "team.delete",
    },
  },

  {
    display: "Members",
    name: "members",
    permissions: {
      create: "members.create",
      read: "members.read",
      update: "members.update",
      delete: "members.delete",
    },
  },

  {
    display: "Banners",
    name: "banners",
    permissions: {
      create: "banners.create",
      read: "banners.read",
      update: "banners.update",
      delete: "banners.delete",
    },
  },
  {
    display: "Clients",
    name: "clients",
    permissions: {
      create: "clients.create",
      read: "clients.read",
      update: "clients.update",
      delete: "clients.delete",
    },
  },
  {
    display: "Testimonials",
    name: "testimonials",
    permissions: {
      create: "testimonials.create",
      read: "testimonials.read",
      update: "testimonials.update",
      delete: "testimonials.delete",
    },
  },
  {
    display: "Projects",
    name: "projects",
    permissions: {
      create: "projects.create",
      read: "projects.read",
      update: "projects.update",
      delete: "projects.delete",
    },
  },
  
  {
    display: "Settings",
    name: "settings",
    permissions: {
      create: "settings.create",
      read: "settings.read",
      update: "settings.update",
      delete: "settings.delete",
    },
  },
 
];

// Helper function to get all permission strings
export function getAllPermissions(): string[] {
  return permissions.flatMap((module) => Object.values(module.permissions));
}

// Helper function to check if a permission exists
export function isValidPermission(permission: string): boolean {
  return getAllPermissions().includes(permission);
}

// Helper to get module permissions by name
export function getModulePermissions(
  moduleName: string
): Permission | undefined {
  const module = permissions.find((m) => m.name === moduleName);
  return module?.permissions;
}

// Type for the permissions object
export type PermissionsType = {
  [K in (typeof permissions)[number]["name"]]: Permission;
};
