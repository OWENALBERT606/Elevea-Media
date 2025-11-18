import { getClientById } from "@/actions/clients";
import { getParishById } from "@/actions/parishes";
import { getTestimonialById } from "@/actions/testimonials";
import ClientForm from "@/components/Forms/client-form";
import NewMpomurroForm from "@/components/Forms/mpomurro-form";
import NewParishForm from "@/components/Forms/new-parsih-form";
import TestimonialForm from "@/components/Forms/testimonial-form";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const testimonial = await getTestimonialById(id);
  return (
    <div className="p-8">
      <TestimonialForm initialData={testimonial}/>
    </div>
  );
}
