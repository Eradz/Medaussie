"use client";

import React, { useEffect, useState } from "react";
import Tiptap from "@/components/tiptap/tiptap";
import { callApi } from "@zayne-labs/callapi";
import { toast } from "sonner";
import { postType } from "@/common/types/types";
import Loading from "@/app/loading";

interface FormDetail {
  type: string;
  name: string;
  placeholder: string;
  value: string | File | null;
  edit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function EditExam({ paramId }: { paramId: string }) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [slug, setSlug] = useState("");
  const [body, setBody] = useState("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (paramId.includes("new")) {
      setTitle("");
      setExcerpt("");
      setSlug("");
      setBody("");
      setFeaturedImage(null);
      return;
    }
    const getPost = async () => {
      setLoading(true);
      await callApi<{
        message: string;
        data: postType;
      }>(
        process.env.NEXT_PUBLIC_NEXT_ENV === "development"
          ? `/api/v1/post/${paramId}?type=exam`
          : `https://medaussie-backend.onrender.com/api/v1/post/${paramId}?type=exam`,
        {
          credentials: "include",
          dedupeStrategy: "none",
          onSuccess: ({ data }) => {
            setTitle(data.data.title);
            setExcerpt(data.data.excerpt);
            setSlug(data.data.slug);
            setBody(data.data.body);
            setLoading(false)
          },
          onError: ({ error }) => {
            toast.error(error.message);
            setLoading(false)
          },
        }
      );
    };
    getPost()
  }, [paramId]);
  if(loading){
    return <Loading/>
  }

  const details: FormDetail[] = [
    {
      type: "text",
      name: "Title",
      placeholder: "Enter a title",
      value: title,
      edit: (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
    },
    {
      type: "text",
      name: "Slug",
      placeholder: "Enter a unique and short slug to render you post",
      value: slug,
      edit: (e: React.ChangeEvent<HTMLInputElement>) => setSlug(e.target.value),
    },
    {
      type: "text",
      name: "Excerpt",
      placeholder: "Enter an excerpt to you post",
      value: excerpt,
      edit: (e: React.ChangeEvent<HTMLInputElement>) => setExcerpt(e.target.value),
    },
    {
      type: "file",
      name: "Featured Image",
      placeholder: "Upload a Valid PNG/JPG",
      value: featuredImage,
      edit: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFeaturedImage(e.target.files ? e.target.files[0] : null),
    },
    {
      type: "text",
      name: "Body",
      placeholder: "Write your content here",
      value: body,
      edit: (e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value),
    },
  ];

  const content = { title, slug, excerpt, body, featuredImage };

  return (
    <div className="lg:flex-1 px-4 bg-primary justify-center items-center py-4">
      <div className="flex flex-wrap justify-between w-[100%]">
        {details.map(({ name, type, value, placeholder, edit }) => (
          <div
            className={name === "Body" ? "w-[100%] mt-2" : "w-[45%] mt-2"}
            key={name}
          >
            <label className="text-[14px]">{name}</label>
            {name === "Body" ? (
              <Tiptap content={content} onchange={setBody} />
            ) : name === "Featured Image" ? (
              <input
                type={type}
                name={name}
                className="w-full p-3 border border-solid border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
                onChange={edit}
                accept="image/png, image/jpg"
              />
            ) : (
              <input
                type={type}
                name={name}
                value={value as string}
                className="w-full p-3 border border-solid border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
                onChange={edit}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditExam;