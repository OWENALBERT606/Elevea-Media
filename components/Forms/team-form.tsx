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
// import ImageInput from "../FormInputs/ImageInput";
// import FormFooter from "./FormFooter";

// import { Team } from "@prisma/client";
// import {
//   createTeamMember,
//   updateTeamMember,
// } from "@/actions/team";
// import { Dropzone, FileWithMetadata } from "../ui/dropzone";

// // Props
// type TeamFormProps = {
//   editingId?: string;
//   initialData?: Team | null;
// };

// export default function TeamForm({ editingId, initialData }: TeamFormProps) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<Team>({
//     defaultValues: {
//       name: initialData?.name ?? "",
//       position: initialData?.position ?? "",
//       imageUrl: initialData?.imageUrl ?? "",
//       bio: initialData?.bio ?? "",
//     },
//   });

//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const initialImage = initialData?.imageUrl || "/placeholder.svg";
//   const [imageUrl, setImageUrl] = useState(initialImage);
//     const [files, setFiles] = useState<FileWithMetadata[]>();


//   // Save Team Member
//   async function saveTeamMember(data: any) {
//     try {
//       setLoading(true);

//       data.imageUrl = imageUrl;

//       if (editingId) {
//         await updateTeamMember(editingId, data);
//         toast.success("Team member updated successfully!");
//         router.push("/dashboard/team");
//       } else {
//         await createTeamMember(data);
//         toast.success("Team member added successfully!");
//         router.push("/dashboard/team");
//       }

//       reset();
//       setImageUrl("/placeholder.svg");
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(saveTeamMember)}>
//       <FormHeader
//         href="/dashboard/team"
//         parent=""
//         title="Team Member"
//         editingId={editingId}
//         loading={loading}
//       />

//       <div className="grid grid-cols-12 gap-6 py-8">
//         <div className="lg:col-span-8 col-span-full space-y-3">
//           <Card>
//             <CardHeader>
//               <CardTitle>Team Member Details</CardTitle>
//               <CardDescription>
//                 Add or update team member information.
//               </CardDescription>
//             </CardHeader>

//             <CardContent>
//               <div className="grid grid-cols-2 gap-6">

//                 <TextInput
//                   register={register}
//                   errors={errors}
//                   label="Full Name"
//                   name="name"
//                 />

//                 <TextInput
//                   register={register}
//                   errors={errors}
//                   label="Position"
//                   name="position"
//                 />

//                 <TextArea
//                   register={register}
//                   errors={errors}
//                   label="Bio"
//                   name="bio"
//                 />

//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="lg:col-span-4 col-span-full">
//           <div className="grid auto-rows-max items-start gap-4">
//            <Dropzone
//         provider="cloudflare-r2"
//         variant="compact"
//         maxFiles={10}
//         maxSize={1024 * 1024 * 50} // 50MB
//         onFilesChange={(files) => setFiles(files)}
//       />
//           </div>
//         </div>
//       </div>

//       <FormFooter
//         href="/dashboard/team"
//         editingId={editingId}
//         loading={loading}
//         title="Team Member"
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

import { Team } from "@prisma/client";
import { createTeamMember, updateTeamMember } from "@/actions/team";

import { Dropzone, FileWithMetadata } from "../ui/dropzone";

type TeamFormProps = {
  editingId?: string;
  initialData?: Team | null;
};

export default function TeamForm({ editingId, initialData }: TeamFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Team>({
    defaultValues: {
      name: initialData?.name ?? "",
      position: initialData?.position ?? "",
      bio: initialData?.bio ?? "",
      imageUrl: initialData?.imageUrl ?? "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [files, setFiles] = useState<FileWithMetadata[]>();

  async function saveTeamMember(data: any) {
    try {
      setLoading(true);

      // ✅ Extract public URL from Dropzone
      let imageUrl = initialData?.imageUrl || "";

      if (files && files.length > 0 && files[0].publicUrl) {
        imageUrl = files[0].publicUrl;
      }

      data.imageUrl = imageUrl;

      let res;

      if (editingId) {
        res = await updateTeamMember(editingId, data);
        toast.success("Team member updated!");
      } else {
        res = await createTeamMember(data);
        toast.success("Team member added!");
      }

      if (res?.success) {
        router.push("/dashboard/team");
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
    <form onSubmit={handleSubmit(saveTeamMember)}>
      <FormHeader
        href="/dashboard/team"
        parent=""
        title="Team Member"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardTitle>Team Member Details</CardTitle>
              <CardDescription>
                Add or update team member information.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Full Name"
                  name="name"
                />

                <TextInput
                  register={register}
                  errors={errors}
                  label="Position"
                  name="position"
                />

                <TextArea
                  register={register}
                  errors={errors}
                  label="Bio"
                  name="bio"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 col-span-full">
          <div className="grid auto-rows-max gap-4">
            <p className="text-sm text-muted-foreground">Team Member Photo</p>

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
        href="/dashboard/team"
        editingId={editingId}
        loading={loading}
        title="Team Member"
        parent=""
      />
    </form>
  );
}
