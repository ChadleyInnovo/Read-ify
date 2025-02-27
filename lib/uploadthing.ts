import { createUploadthing, type FileRouter } from "uploadthing/next"

const f = createUploadthing()

export const uploadRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      return { uploadedAt: new Date() }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.uploadedAt)
      console.log("file url", file.url)
    }),
} satisfies FileRouter

export type OurFileRouter = typeof uploadRouter

