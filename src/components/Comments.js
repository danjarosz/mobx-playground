import React from "react";
import { observer } from 'mobx-react'
import { useCommentsStore } from "../stores/hooks";

const Comments = () => {
    const { comments, removeComment } = useCommentsStore();

    const handleRemoveComment = (e) => {
        const id = Number(e.target.dataset.id);
        removeComment(id);
    }

    let commentsElements = "Brak komnentarzy";

    if (comments && comments.length) {
        commentsElements = comments.map(comment => (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <button 
                    data-id={comment.id}
                    onClick={handleRemoveComment}
                >
                    Usuń komentarz
                </button>
            </li>
        ))
    }

    

    return (
        <ul>
            {commentsElements}
        </ul>
    )
}

export default observer(Comments);