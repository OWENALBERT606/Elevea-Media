"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export type TestimonialProps = {
  text: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  imageUrl?: string;
};

type ActionResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

/* --------------------------- CREATE TESTIMONIAL --------------------------- */
export async function createTestimonial(
  data: TestimonialProps
): Promise<ActionResponse<any>> {
  try {
    const newTestimonial = await db.testimonial.create({ data });

    revalidatePath("/dashboard/testimonials");

    return { success: true, data: newTestimonial };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      error: error.message || "Failed to create testimonial",
    };
  }
}

/* ----------------------------- GET ALL TESTIMONIALS ----------------------------- */
export async function getTestimonials() {
  try {
    return await db.testimonial.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.log(error);
    return [];
  }
}

/* ----------------------------- GET TESTIMONIAL BY ID ----------------------------- */
export async function getTestimonialById(id: string) {
  if (!id) return null;

  try {
    return await db.testimonial.findUnique({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}

/* ----------------------------- UPDATE TESTIMONIAL ----------------------------- */
export async function updateTestimonial(
  id: string,
  data: TestimonialProps
): Promise<ActionResponse<any>> {
  try {
    const updated = await db.testimonial.update({
      where: { id },
      data,
    });

    revalidatePath("/dashboard/testimonials");

    return { success: true, data: updated };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      error: error.message || "Failed to update testimonial",
    };
  }
}

/* ---------------------- UPDATE TESTIMONIAL IMAGE ONLY ---------------------- */
export async function updateTestimonialImage(
  id: string,
  imageUrl: string
): Promise<ActionResponse<any>> {
  try {
    const updated = await db.testimonial.update({
      where: { id },
      data: { imageUrl },
    });

    revalidatePath("/dashboard/testimonials");

    return { success: true, data: updated };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      error: error.message || "Failed to update testimonial image",
    };
  }
}

/* ----------------------------- DELETE TESTIMONIAL ----------------------------- */
export async function deleteTestimonial(
  id: string
): Promise<ActionResponse<any>> {
  try {
    const deleted = await db.testimonial.delete({
      where: { id },
    });

    revalidatePath("/dashboard/testimonials");

    return { success: true, data: deleted };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      error: error.message || "Failed to delete testimonial",
    };
  }
}
