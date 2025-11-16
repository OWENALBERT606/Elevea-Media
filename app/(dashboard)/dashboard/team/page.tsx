import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { Team } from "@prisma/client";
import { getTeamMembers } from "@/actions/team";

export default async function Page() {
  const teamMembers: Team[] = (await getTeamMembers()) || [];


  return (
    <div className="p-8">
      <TableHeader
        title="Team Members"
        linkTitle="Add Member"
        href="/dashboard/team/new"
        data={teamMembers}
        model="team"
      />

      <div className="py-8">
        <DataTable data={teamMembers} columns={columns} />
      </div>
    </div>
  );
}
