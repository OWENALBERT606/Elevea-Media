"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export type ProjectProps = {
  title: string;
  clientName?: string;
  description: string;
  category: string;
  coverImage?: string;
  gallery?: any; // JSON array
  results?: string;
  deliverables?: string;
  projectUrl?: string;
  featured?: boolean;
};

type ActionResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

/* ----------------------------- CREATE PROJECT ----------------------------- */
export async function createProject(
  data: ProjectProps
): Promise<ActionResponse<any>> {
  try {
    const project = await db.project.create({ data });

    revalidatePath("/dashboard/projects");

    return { success: true, data: project };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      error: error.message || "Failed to create project",
    };
  }
}

/* ----------------------------- GET ALL PROJECTS ----------------------------- */
export async function getProjects() {
  try {
    return await db.project.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.log(error);
    return [];
  }
}

/* ----------------------------- GET PROJECT BY ID ----------------------------- */
export async function getProjectById(id: string) {
  if (!id) return null;

  try {
    return await db.project.findUnique({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}

/* ----------------------------- UPDATE PROJECT ----------------------------- */
export async function updateProject(
  id: string,
  data: ProjectProps
): Promise<ActionResponse<any>> {
  try {
    const updated = await db.project.update({
      where: { id },
      data,
    });

    revalidatePath("/dashboard/projects");

    return { success: true, data: updated };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      error: error.message || "Failed to update project",
    };
  }
}

/* ------------------------ UPDATE PROJECT COVER IMAGE ------------------------ */
export async function updateProjectCover(
  id: string,
  coverImage: string
): Promise<ActionResponse<any>> {
  try {
    const updated = await db.project.update({
      where: { id },
      data: { coverImage },
    });

    revalidatePath("/dashboard/projects");

    return { success: true, data: updated };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      error: error.message || "Failed to update cover image",
    };
  }
}

/* -------------------------- UPDATE PROJECT GALLERY -------------------------- */
export async function updateProjectGallery(
  id: string,
  gallery: any
): Promise<ActionResponse<any>> {
  try {
    const updated = await db.project.update({
      where: { id },
      data: { gallery },
    });

    revalidatePath("/dashboard/projects");

    return { success: true, data: updated };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      error: error.message || "Failed to update gallery",
    };
  }
}

/* ----------------------------- DELETE PROJECT ----------------------------- */
export async function deleteProject(
  id: string
): Promise<ActionResponse<any>> {
  try {
    const deleted = await db.project.delete({
      where: { id },
    });

    revalidatePath("/dashboard/projects");

    return { success: true, data: deleted };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      error: error.message || "Failed to delete project",
    };
  }
}
