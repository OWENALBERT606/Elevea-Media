import { getClientById } from "@/actions/clients";
import { getParishById } from "@/actions/parishes";
import { getProjectById } from "@/actions/projects";
import { getTestimonialById } from "@/actions/testimonials";
import ClientForm from "@/components/Forms/client-form";
import NewMpomurroForm from "@/components/Forms/mpomurro-form";
import NewParishForm from "@/components/Forms/new-parsih-form";
import ProjectForm from "@/components/Forms/projects-form";
import TestimonialForm from "@/components/Forms/testimonial-form";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = await getProjectById(id);
  return (
    <div className="p-8">
      <ProjectForm initialData={project}/>
    </div>
  );
}
