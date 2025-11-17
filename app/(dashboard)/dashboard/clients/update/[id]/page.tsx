import { getClientById } from "@/actions/clients";
import { getParishById } from "@/actions/parishes";
import ClientForm from "@/components/Forms/client-form";
import NewMpomurroForm from "@/components/Forms/mpomurro-form";
import NewParishForm from "@/components/Forms/new-parsih-form";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const parish = await getClientById(id);
  return (
    <div className="p-8">
      <ClientForm/>
    </div>
  );
}
