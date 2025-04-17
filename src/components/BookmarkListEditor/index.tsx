import React from "react";
import type { Bookmark } from "@/api/types/bookmark";
import { BookmarkEditorContent, BookmarkEditorWrapper, Tools } from "./styled";
import ThrashIcon from "@icons/svg/thrash.svg";
import EditIcon from "@icons/svg/edit.svg";

interface Props {
  bookmark: Bookmark;
  onUpdate: (b: Bookmark) => void;
}

const BookmarkEditor = ({ bookmark, onUpdate }: Props) => {
  return (
    <BookmarkEditorWrapper>
      <BookmarkEditorContent>{bookmark.name}</BookmarkEditorContent>
      <Tools>
        <button className="icon-btn-mini">
          <EditIcon />
        </button>
        <button className="icon-btn-mini icon-red">
          <ThrashIcon />
        </button>
      </Tools>
    </BookmarkEditorWrapper>
  );
};

export default BookmarkEditor;
