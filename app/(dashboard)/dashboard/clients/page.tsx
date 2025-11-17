import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { Client } from "@prisma/client";
import { getClients } from "@/actions/clients";

export default async function Page() {
  const clients: Client[] = (await getClients()) || [];

  return (
    <div className="p-8">
      <TableHeader
        title="Clients"
        linkTitle="Add Client"
        href="/dashboard/clients/new"
        data={clients}
        model="client"
      />

      <div className="py-8">
        <DataTable data={clients} columns={columns} />
      </div>
    </div>
  );
}
