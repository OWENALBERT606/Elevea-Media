// "use client";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// import FormHeader from "./FormHeader";
// import TextInput from "../FormInputs/TextInput";
// import TextArea from "../FormInputs/TextAreaInput";
// import FormFooter from "./FormFooter";

// import { Project } from "@prisma/client";
// import { Dropzone, FileWithMetadata } from "../ui/dropzone";
// import { createProject, updateProject } from "@/actions/projects";

// type ProjectFormProps = {
//   editingId?: string;
//   initialData?: Project | null;
// };

// export default function ProjectForm({ editingId, initialData }: ProjectFormProps) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<Project>({
//     defaultValues: {
//       title: initialData?.title ?? "",
//       category: initialData?.category ?? "",
//       clientName: initialData?.clientName ?? "",
//       description: initialData?.description ?? "",
//       imageUrl: initialData?.imageUrl ?? "",
//     },
//   });

//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [files, setFiles] = useState<FileWithMetadata[]>();

//   async function saveProject(data: any) {
//     try {
//       setLoading(true);

//       let imageUrl = initialData?.imageUrl || "";
//       if (files && files.length > 0 && files[0].publicUrl) {
//         imageUrl = files[0].publicUrl;
//       }

//       data.imageUrl = imageUrl;

//       let res;
//       if (editingId) {
//         res = await updateProject(editingId, data);
//         toast.success("Project updated!");
//       } else {
//         res = await createProject(data);
//         toast.success("Project added!");
//       }

//       if (res?.success) {
//         router.push("/dashboard/projects");
//         router.refresh();
//       } else {
//         toast.error(res?.error || "Something went wrong.");
//       }

//       reset();
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(saveProject)}>
//       <FormHeader
//         href="/dashboard/projects"
//         parent=""
//         title="Project"
//         editingId={editingId}
//         loading={loading}
//       />

//       <div className="grid grid-cols-12 gap-6 py-8">
//         {/* LEFT SECTION */}
//         <div className="lg:col-span-8 col-span-full space-y-3">
//           <Card>
//             <CardHeader>
//               <CardTitle>Project Details</CardTitle>
//               <CardDescription>
//                 Add or update project information.
//               </CardDescription>
//             </CardHeader>

//             <CardContent>
//               <div className="grid grid-cols-2 gap-6">
//                 <TextInput register={register} errors={errors} label="Project Title" name="title" />
//                 <TextInput register={register} errors={errors} label="Category" name="category" />
//                 <TextInput register={register} errors={errors} label="Client" name="client" />
//                 <TextArea register={register} errors={errors} label="Description" name="description" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="lg:col-span-4 col-span-full">
//           <div className="grid auto-rows-max gap-4">
//             <p className="text-sm text-muted-foreground">Project Image</p>

//             <Dropzone
//               provider="cloudflare-r2"
//               variant="compact"
//               maxFiles={1}
//               maxSize={1024 * 1024 * 7} // 7MB
//               onFilesChange={(f) => setFiles(f)}
//             />
//           </div>
//         </div>
//       </div>

//       <FormFooter
//         href="/dashboard/projects"
//         editingId={editingId}
//         loading={loading}
//         title="Project"
//         parent=""
//       />
//     </form>
//   );
// }




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
import TextArea from "../FormInputs/TextAreaInput";
import FormFooter from "./FormFooter";

import { Project } from "@prisma/client";
import { Dropzone, FileWithMetadata } from "../ui/dropzone";
import { createProject, updateProject } from "@/actions/projects";

type ProjectFormProps = {
  editingId?: string;
  initialData?: Project | null;
};

export default function ProjectForm({ editingId, initialData }: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Project>({
    defaultValues: {
      title: initialData?.title ?? "",
      category: initialData?.category ?? "",
      clientName: initialData?.clientName ?? "",
      description: initialData?.description ?? "",
      coverImage: initialData?.coverImage ?? "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<FileWithMetadata[]>();

  async function saveProject(data: any) {
    try {
      setLoading(true);

      let coverImage = initialData?.coverImage || "";
      if (files && files.length > 0 && files[0].publicUrl) {
        coverImage = files[0].publicUrl;
      }

      data.coverImage = coverImage;

      let res;
      if (editingId) {
        res = await updateProject(editingId, data);
        toast.success("Project updated!");
      } else {
        res = await createProject(data);
        toast.success("Project added!");
      }

      if (res?.success) {
        router.push("/dashboard/projects");
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
    <form onSubmit={handleSubmit(saveProject)}>
      <FormHeader
        href="/dashboard/projects"
        parent=""
        title="Project"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        {/* LEFT SECTION */}
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Add or update project information.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <TextInput register={register} errors={errors} label="Project Title" name="title" />
                <TextInput register={register} errors={errors} label="Category" name="category" />
                <TextInput register={register} errors={errors} label="Client Name" name="clientName" />
                <TextArea register={register} errors={errors} label="Description" name="description" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-4 col-span-full">
          <div className="grid auto-rows-max gap-4">
            <p className="text-sm text-muted-foreground">Cover Image</p>

            <Dropzone
              provider="cloudflare-r2"
              variant="compact"
              maxFiles={1}
              maxSize={1024 * 1024 * 7} // 7MB
              onFilesChange={(f) => setFiles(f)}
            />
          </div>
        </div>
      </div>

      <FormFooter
        href="/dashboard/projects"
        editingId={editingId}
        loading={loading}
        title="Project"
        parent=""
      />
    </form>
  );
}
