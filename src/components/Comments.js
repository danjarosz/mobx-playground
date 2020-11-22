import React from "react";
import { observer } from 'mobx-react'
import { useCommentsStore } from "../stores/hooks";
import Comment from "./Comment";

const Comments = () => {
    const { comments } = useCommentsStore();

    let commentsElements = "Brak komnentarzy";

    if (comments && comments.length) {
        commentsElements = comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
        ))
    }

    return (
        <ul>
            {commentsElements}
        </ul>
    )
}

export default observer(Comments);