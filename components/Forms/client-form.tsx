"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import FormHeader from "./FormHeader";
import TextInput from "../FormInputs/TextInput";
import FormFooter from "./FormFooter";

import { Client } from "@prisma/client";

import { Dropzone, FileWithMetadata } from "../ui/dropzone";
import { createClient, updateClient } from "@/actions/clients";

type ClientFormProps = {
  editingId?: string;
  initialData?: Client | null;
};

export default function ClientForm({ editingId, initialData }: ClientFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Client>({
    defaultValues: {
      name: initialData?.name ?? "",
      imageUrl: initialData?.imageUrl ?? "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<FileWithMetadata[]>();

  async function saveClient(data: any) {
    try {
      setLoading(true);

      // Extract URL from Dropzone
      let imageUrl = initialData?.imageUrl || "";

      if (files && files.length > 0 && files[0].publicUrl) {
        imageUrl = files[0].publicUrl;
      }

      data.imageUrl = imageUrl;

      let res;

      if (editingId) {
        res = await updateClient(editingId, data);
        toast.success("Client updated!");
      } else {
        res = await createClient(data);
        toast.success("Client added!");
      }

      if (res?.success) {
        router.push("/dashboard/clients");
        router.refresh();
      } else {
        toast.error(res?.error || "Something went wrong.");
      }

      reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(saveClient)}>
      <FormHeader
        href="/dashboard/clients"
        parent=""
        title="Client"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardTitle>Client Details</CardTitle>
              <CardDescription>Add or update client information.</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Client Name"
                  name="name"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 col-span-full">
          <div className="grid auto-rows-max gap-4">
            <p className="text-sm text-muted-foreground">Client Logo</p>

            <Dropzone
              provider="cloudflare-r2"
              variant="compact"
              maxFiles={1}
              maxSize={1024 * 1024 * 5} // 5MB
              onFilesChange={(f) => setFiles(f)}
            />
          </div>
        </div>
      </div>

      <FormFooter
        href="/dashboard/clients"
        editingId={editingId}
        loading={loading}
        title="Client"
        parent=""
      />
    </form>
  );
}
