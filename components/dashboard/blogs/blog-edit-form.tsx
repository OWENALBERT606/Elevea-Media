// "use client";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import React, { useState } from "react";
// import VEditor from "./editor";
// import { Button } from "@/components/ui/button";
// import ImageInput from "@/components/FormInputs/ImageInput";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import TextInput from "@/components/FormInputs/TextInput";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { Blog } from "@prisma/client";
// import { generateSlug } from "@/lib/generateSlug";
// import toast from "react-hot-toast";
// import TextArea from "@/components/FormInputs/TextAreaInput";
// import { updateBlogContent, updateMetaData } from "@/actions/blogs";
// import { Loader2 } from "lucide-react";
// import PdfInput from "@/components/FormInputs/PdfInput";
// import VideoInput from "@/components/FormInputs/VideoInput";
// export type MetaPros = {
//   description: string;
//   title: string;
//   thumbnail: string;
//   pdfUrl?: any;
//   videoUrl?:any;
// };
// export default function BlogEditForm({
//   initialData,
//   editingId,
// }: {
//   initialData: Blog | null | undefined;
//   editingId: string;
// }) {
//   const initialContent =
//     initialData?.content ?? "<p>Write your article here</p>";
//   const [content, setContent] = useState(initialContent);
//   const [documents, setDocuments] = useState<any>(initialData?.pdfUrl || []);
//   const [video, setVideo] = useState<any>(initialData?.videoUrl || []);
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<MetaPros>({
//     defaultValues: {
//       title: initialData?.title,
//       description: initialData?.description || "",
//     },
//   });
//   const initialImage = initialData?.thumbnail ?? "/placeholder.png";
//   const [imageUrl, setImageUrl] = useState(initialImage);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   async function updateMeta(data: MetaPros) {
//     setLoading(true);
//     try {
//       data.thumbnail = imageUrl;
//       data.pdfUrl = documents;
//       data.videoUrl = video;
//       if (editingId) await updateMetaData(editingId, data);
//       await updateMetaData(editingId, data);
//       setLoading(false);
//       toast.success("Updated Successfully!");
//       reset();
//       setImageUrl("/placeholder.png");
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   }
//   async function handleUpdateContent() {
//     setLoading(true);
//     try {
//       await updateBlogContent(editingId, content);
//       setLoading(false);
//       toast.success("Updated successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <div className="p-8">
//       <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
//         Write your Blog Article
//       </h2>
//       <Tabs defaultValue="content" className="space-y-8">
//         <TabsList className="inline-flex h-auto w-full justify-start gap-4 rounded-none border-b bg-transparent p-0 flex-wrap">
//           {["content", "meta", "more"].map((feature) => {
//             return (
//               <TabsTrigger
//                 key={feature}
//                 value={feature}
//                 className="inline-flex items-center gap-2 border-b-2 border-transparent px-8 pb-3 pt-2 data-[state=active]:border-primary capitalize"
//               >
//                 {feature.split("-").join(" ")}
//               </TabsTrigger>
//             );
//           })}
//         </TabsList>
//         <TabsContent value="content" className="space-y-8">
//           <VEditor
//             variant="default"
//             content={content}
//             setContent={setContent}
//             isEditable={true}
//           />
//           <div className="">
//             {loading ? (
//               <Button disabled>
//                 <Loader2 className="animate-spin" />
//                 Please wait
//               </Button>
//             ) : (
//               <Button onClick={handleUpdateContent}>
//                 Save and Publish Blog
//               </Button>
//             )}
//           </div>
//         </TabsContent>
//         <TabsContent value="meta" className="space-y-8">
//           <form className="" onSubmit={handleSubmit(updateMeta)}>
//             <div className="grid grid-cols-12 gap-6 py-8">
//               <div className="lg:col-span-8 col-span-full space-y-3">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Blog Meta Data</CardTitle>
//                     <CardDescription>
//                       This data will be used for SEO meta data
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="grid gap-6">
//                       <div className="grid gap-3">
//                         <TextInput
//                           register={register}
//                           errors={errors}
//                           label="Blog Title"
//                           name="title"
//                         />
//                       </div>
//                       <div className="grid gap-3">
//                         <TextArea
//                           register={register}
//                           errors={errors}
//                           label="Blog Meta Description"
//                           name="description"
//                         />
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//                        <VideoInput
//                         title="Attach blog video"
//                         videoUrl={video}
//                         setVideoUrl={setVideo}
//                         endpoint="blogVideoUploader" // 👈 this should match your Uploadthing endpoint
//                       />
//               </div>
//               <div className="lg:col-span-4 col-span-full ">
//                 <div className="grid auto-rows-max items-start gap-4 ">
//                   <ImageInput
//                     title="Blog thumbnail"
//                     imageUrl={imageUrl}
//                     setImageUrl={setImageUrl}
//                     endpoint="blogImage"
//                   />
//                               <PdfInput
//         title="Attach blog document"
//         pdfUrl={documents}
//         setPdfUrl={setDocuments}
//         endpoint="pdfUrl" // UploadThing server endpoint
//       />
//                 </div>
//               </div>
//             </div>
//             <div className="">
//               {loading ? (
//                 <Button disabled>
//                   <Loader2 className="animate-spin" />
//                   Updating please wait...
//                 </Button>
//               ) : (
//                 <Button type="submit">Update Post</Button>
//               )}
//             </div>
//           </form>
//         </TabsContent>
//         <TabsContent value="more" className="space-y-8">
//           <h2>Categories</h2>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }




"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import VEditor from "./editor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TextInput from "@/components/FormInputs/TextInput";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Blog } from "@prisma/client";
import toast from "react-hot-toast";
import TextArea from "@/components/FormInputs/TextAreaInput";
import { updateBlogContent, updateMetaData } from "@/actions/blogs";
import { Loader2 } from "lucide-react";
import { Dropzone, FileWithMetadata } from "@/components/ui/dropzone";

export type MetaPros = {
  description: string;
  title: string;
  thumbnail: string;
  pdfUrl?: string;
  videoUrl?: string;
};

export default function BlogEditForm({
  initialData,
  editingId,
}: {
  initialData: Blog | null | undefined;
  editingId: string;
}) {
  const initialContent =
    initialData?.content ?? "<p>Write your article here</p>";
  const [content, setContent] = useState(initialContent);

  // Cloudflare R2 file states
  const [thumbnailFiles, setThumbnailFiles] = useState<FileWithMetadata[]>();
  const [pdfFiles, setPdfFiles] = useState<FileWithMetadata[]>();
  const [videoFiles, setVideoFiles] = useState<FileWithMetadata[]>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MetaPros>({
    defaultValues: {
      title: initialData?.title,
      description: initialData?.description || "",
    },
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function updateMeta(data: MetaPros) {
    setLoading(true);
    try {
      // Extract URLs from Dropzone files
      let thumbnailUrl = initialData?.thumbnail || "";
      let pdfUrl = initialData?.pdfUrl || "";
      let videoUrl = initialData?.videoUrl || "";

      if (thumbnailFiles && thumbnailFiles.length > 0 && thumbnailFiles[0].publicUrl) {
        thumbnailUrl = thumbnailFiles[0].publicUrl;
      }

      if (pdfFiles && pdfFiles.length > 0 && pdfFiles[0].publicUrl) {
        pdfUrl = pdfFiles[0].publicUrl;
      }

      if (videoFiles && videoFiles.length > 0 && videoFiles[0].publicUrl) {
        videoUrl = videoFiles[0].publicUrl;
      }

      data.thumbnail = thumbnailUrl;
      data.pdfUrl = pdfUrl;
      data.videoUrl = videoUrl;

      await updateMetaData(editingId, data);
      
      toast.success("Updated Successfully!");
      setLoading(false);
      router.refresh();
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Failed to update metadata");
    }
  }

  async function handleUpdateContent() {
    setLoading(true);
    try {
      await updateBlogContent(editingId, content);
      setLoading(false);
      toast.success("Content updated successfully");
      router.refresh();
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Failed to update content");
    }
  }

  return (
    <div className="p-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Write your Blog Article
      </h2>
      <Tabs defaultValue="content" className="space-y-8">
        <TabsList className="inline-flex h-auto w-full justify-start gap-4 rounded-none border-b bg-transparent p-0 flex-wrap">
          {["content", "meta", "more"].map((feature) => {
            return (
              <TabsTrigger
                key={feature}
                value={feature}
                className="inline-flex items-center gap-2 border-b-2 border-transparent px-8 pb-3 pt-2 data-[state=active]:border-primary capitalize"
              >
                {feature.split("-").join(" ")}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* Content Tab */}
        <TabsContent value="content" className="space-y-8">
          <VEditor
            variant="default"
            content={content}
            setContent={setContent}
            isEditable={true}
          />
          <div className="">
            {loading ? (
              <Button disabled>
                <Loader2 className="animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button onClick={handleUpdateContent}>
                Save and Publish Blog
              </Button>
            )}
          </div>
        </TabsContent>

        {/* Meta Tab */}
        <TabsContent value="meta" className="space-y-8">
          <form className="" onSubmit={handleSubmit(updateMeta)}>
            <div className="grid grid-cols-12 gap-6 py-8">
              <div className="lg:col-span-8 col-span-full space-y-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Meta Data</CardTitle>
                    <CardDescription>
                      This data will be used for SEO meta data
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <TextInput
                          register={register}
                          errors={errors}
                          label="Blog Title"
                          name="title"
                        />
                      </div>
                      <div className="grid gap-3">
                        <TextArea
                          register={register}
                          errors={errors}
                          label="Blog Meta Description"
                          name="description"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Video Upload Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Video</CardTitle>
                    <CardDescription>
                      Upload a video for this blog post (optional)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dropzone
                      provider="cloudflare-r2"
                      variant="default"
                      maxFiles={1}
                      maxSize={1024 * 1024 * 100} // 100MB
                      accept={{
                        'video/*': ['.mp4', '.mov', '.avi', '.mkv']
                      }}
                      onFilesChange={(files) => setVideoFiles(files)}
                    />
                    {initialData?.videoUrl && !videoFiles?.length && (
                      <div className="mt-4 p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Current video:</p>
                        <a 
                          href={initialData.videoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          View current video
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-4 col-span-full ">
                <div className="grid auto-rows-max items-start gap-4 ">
                  {/* Thumbnail Upload */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Blog Thumbnail</CardTitle>
                      <CardDescription>
                        Upload a featured image for this blog
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Dropzone
                        provider="cloudflare-r2"
                        variant="compact"
                        maxFiles={1}
                        maxSize={1024 * 1024 * 5} // 5MB
                        accept={{
                          'image/*': ['.jpg', '.jpeg', '.png', '.webp']
                        }}
                        onFilesChange={(files) => setThumbnailFiles(files)}
                      />
                      {initialData?.thumbnail && !thumbnailFiles?.length && (
                        <div className="mt-4">
                          <p className="text-sm text-muted-foreground mb-2">Current thumbnail:</p>
                          <img 
                            src={initialData.thumbnail} 
                            alt="Current thumbnail"
                            className="w-full h-auto rounded-lg border"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* PDF Upload */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Blog Document</CardTitle>
                      <CardDescription>
                        Attach a PDF document (optional)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Dropzone
                        provider="cloudflare-r2"
                        variant="compact"
                        maxFiles={1}
                        maxSize={1024 * 1024 * 10} // 10MB
                        accept={{
                          'application/pdf': ['.pdf']
                        }}
                        onFilesChange={(files) => setPdfFiles(files)}
                      />
                      {initialData?.pdfUrl && !pdfFiles?.length && (
                        <div className="mt-4 p-4 bg-muted rounded-lg">
                          <p className="text-sm text-muted-foreground">Current document:</p>
                          <a 
                            href={initialData.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            View current PDF
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="">
              {loading ? (
                <Button disabled>
                  <Loader2 className="animate-spin" />
                  Updating please wait...
                </Button>
              ) : (
                <Button type="submit">Update Post</Button>
              )}
            </div>
          </form>
        </TabsContent>

        {/* More Tab */}
        <TabsContent value="more" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Additional Settings</CardTitle>
              <CardDescription>
                Categories and other blog settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Additional settings coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}