"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export type ClientProps = {
  name: string;
  imageUrl?: string;
};

type ActionResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

/* ----------------------------- CREATE CLIENT ----------------------------- */
export async function createClient(data: ClientProps): Promise<ActionResponse<any>> {
  try {
    const newClient = await db.client.create({ data });

    revalidatePath("/dashboard/clients");

    return { success: true, data: newClient };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message || "Failed to create client" };
  }
}

/* ----------------------------- GET ALL CLIENTS ----------------------------- */
export async function getClients() {
  try {
    const clients = await db.client.findMany({
      orderBy: { createdAt: "desc" },
    });

    return clients;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/* ----------------------------- GET CLIENT BY ID ----------------------------- */
export async function getClientById(id: string) {
  if (!id) return null;

  try {
    return await db.client.findUnique({ where: { id } });
  } catch (error) {
    console.log(error);
    return null;
  }
}

/* ----------------------------- UPDATE CLIENT ----------------------------- */
export async function updateClient(id: string, data: ClientProps): Promise<ActionResponse<any>> {
  try {
    const updated = await db.client.update({
      where: { id },
      data,
    });

    revalidatePath("/dashboard/clients");

    return { success: true, data: updated };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message || "Failed to update client" };
  }
}

/* ----------------------------- UPDATE CLIENT IMAGE ONLY ----------------------------- */
export async function updateClientImage(id: string, imageUrl: string): Promise<ActionResponse<any>> {
  try {
    const updated = await db.client.update({
      where: { id },
      data: { imageUrl },
    });

    revalidatePath("/dashboard/clients");

    return { success: true, data: updated };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message || "Failed to update image" };
  }
}

/* ----------------------------- DELETE CLIENT ----------------------------- */
export async function deleteClient(id: string): Promise<ActionResponse<any>> {
  try {
    const deleted = await db.client.delete({
      where: { id },
    });

    revalidatePath("/dashboard/clients");

    return { success: true, data: deleted };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message || "Failed to delete client" };
  }
}
