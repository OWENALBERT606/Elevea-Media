import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { Testimonial } from "@prisma/client";
import { getTestimonials } from "@/actions/testimonials";

export default async function Page() {
  const testimonials: Testimonial[] = (await getTestimonials()) || [];

  return (
    <div className="p-8">
      <TableHeader
        title="Testimonials"
        linkTitle="Add Testimonial"
        href="/dashboard/testimonials/new"
        data={testimonials}
        model="testimonial"
      />

      <div className="py-8">
        <DataTable data={testimonials} columns={columns} />
      </div>
    </div>
  );
}
