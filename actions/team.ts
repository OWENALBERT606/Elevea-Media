"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export type TeamProps = {
  name: string;
  position: string;
  imageUrl?: string;
  bio: string;
};

/* ----------------------------- CREATE TEAM MEMBER ----------------------------- */
export async function createTeamMember(data: TeamProps) {
  try {
    const newMember = await db.team.create({
      data,
    });

    revalidatePath("/dashboard/team");
    return newMember;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/* ----------------------------- GET ALL TEAM MEMBERS ----------------------------- */
export async function getTeamMembers() {
  try {
    const members = await db.team.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return members;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/* ----------------------------- GET TEAM MEMBER BY ID ----------------------------- */
export async function getTeamMemberById(id: string) {
  if (!id) return null;

  try {
    const member = await db.team.findUnique({
      where: { id },
    });

    return member;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/* ----------------------------- UPDATE TEAM MEMBER ----------------------------- */
export async function updateTeamMember(id: string, data: TeamProps) {
  try {
    const updated = await db.team.update({
      where: { id },
      data,
    });

    revalidatePath("/dashboard/team");
    return updated;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/* ----------------------------- UPDATE MEMBER IMAGE ONLY ----------------------------- */
export async function updateTeamMemberImage(id: string, imageUrl: string) {
  try {
    const updated = await db.team.update({
      where: { id },
      data: { imageUrl },
    });

    revalidatePath("/dashboard/team");
    return updated;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/* ----------------------------- DELETE TEAM MEMBER ----------------------------- */
export async function deleteTeamMember(id: string) {
  try {
    const deleted = await db.team.delete({
      where: { id },
    });

    revalidatePath("/dashboard/team");

    return {
      ok: true,
      data: deleted,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
