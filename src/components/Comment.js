import React, { useState } from 'react';
import { useCommentsStore } from "../stores/hooks";

const Comment = ({ comment }) => {
    const { editComment, removeComment } = useCommentsStore();
    const [openEditMode, setOpenEditMode] = useState(false);
    const [commentText, setCommentText] = useState(comment.comment);

    const handleRemoveComment = (e) => {
        const id = Number(e.target.dataset.id);
        removeComment(id);
    }

    const handleEditComment = (e) => {
        const id = Number(e.target.dataset.id);
        editComment(id, commentText)
        handleCloseEditMode()
    }

    const handleOpenEditMode = () => {
        setOpenEditMode(true)
    }

    const handleCloseEditMode = () => {
        setOpenEditMode(false)
    }

    const handleCommentTextChange = (e) => {
        setCommentText(e.target.value)
    }

    let commentEl = (
        <li>
            <p>{comment.comment}</p>
            <button 
                data-id={comment.id}
                onClick={handleRemoveComment}
            >
                Usuń komentarz
            </button>
            <button
                onClick={handleOpenEditMode}
            >
                Edytuj komentarz
            </button>
        </li>
    )

    if (openEditMode) {
        commentEl = (
            <li>
                <input
                    type="text"
                    value={commentText}
                    onChange={handleCommentTextChange}
                />
                <button
                    data-id={comment.id}
                    onClick={handleEditComment}
                >
                    Zapisz zmiany
                </button>
                <button
                    onClick={handleCloseEditMode}
                >
                    Odrzuć zmiany
                </button>
            </li>
        )
    }

    return commentEl
}

export default Comment;