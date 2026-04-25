"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";

interface NotePreviewProps {
  id: string;
}

export default function NotePreview({ id }: NotePreviewProps) {
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) {
    return <p>Loading, please wait...</p>;
  }

  if (isError || !note) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div className={css.preview}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.tag}>{note.tag}</p>
      <p className={css.content}>{note.content}</p>
      <p className={css.date}>
        {new Date(note.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
