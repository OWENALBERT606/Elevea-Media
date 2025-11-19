import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { Project } from "@prisma/client";
import { getProjects } from "@/actions/projects";

export default async function Page() {
  const projects: Project[] = (await getProjects()) || [];

  return (
    <div className="p-8">
      <TableHeader
        title="Projects"
        linkTitle="Add Project"
        href="/dashboard/projects/new"
        data={projects}
        model="project"
      />

      <div className="py-8">
        <DataTable data={projects} columns={columns} />
      </div>
    </div>
  );
}
