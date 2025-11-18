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

import { Testimonial } from "@prisma/client";
import { Dropzone, FileWithMetadata } from "../ui/dropzone";
import { createTestimonial, updateTestimonial } from "@/actions/testimonials";
import TextArea from "../FormInputs/TextAreaInput";

type TestimonialFormProps = {
  editingId?: string;
  initialData?: Testimonial | null;
};

export default function TestimonialForm({ editingId, initialData }: TestimonialFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Testimonial>({
    defaultValues: {
      author: initialData?.author ?? "",
      title: initialData?.title ?? "",
      company: initialData?.company ?? "",
      text: initialData?.text ?? "",
      rating: initialData?.rating ?? 5,
      imageUrl: initialData?.imageUrl ?? "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<FileWithMetadata[]>();

  async function saveTestimonial(data: any) {
    try {
      setLoading(true);

      let imageUrl = initialData?.imageUrl || "";
      if (files && files.length > 0 && files[0].publicUrl) imageUrl = files[0].publicUrl;

      data.imageUrl = imageUrl;

      let res;
      if (editingId) {
        res = await updateTestimonial(editingId, data);
        toast.success("Testimonial updated!");
      } else {
        res = await createTestimonial(data);
        toast.success("Testimonial added!");
      }

      if (res?.success) {
        router.push("/dashboard/testimonials");
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
    <form onSubmit={handleSubmit(saveTestimonial)}>
      <FormHeader
        href="/dashboard/testimonials"
        parent=""
        title="Testimonial"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardTitle>Testimonial Details</CardTitle>
              <CardDescription>Add or update testimonial information.</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <TextInput register={register} errors={errors} label="Names" name="author" />
                <TextInput register={register} errors={errors} label="Title" name="title" />
                <TextInput register={register} errors={errors} label="Company" name="company" />
                <TextInput register={register} errors={errors} label="Rating" name="rating" type="number" />
                <TextArea register={register} errors={errors} label="Text" name="text" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 col-span-full">
          <div className="grid auto-rows-max gap-4">
            <p className="text-sm text-muted-foreground">Author Image</p>

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
        href="/dashboard/testimonials"
        editingId={editingId}
        loading={loading}
        title="Testimonial"
        parent=""
      />
    </form>
  );
}
