import { makeObservable, observable, action } from "mobx";

export default class CommentsStore {
    constructor() {
        makeObservable(this, {
            comments: observable,
            addComment: action,
            removeComment: action,
            editComment: action
        })
    }

    comments = [{
        id: 26738262387,
        comment: "Super książka!"
    }];

    addComment = comment => this.comments.push(comment);

    removeComment = id => {
        this.comments = this.comments.filter(comment => comment.id !== id)
    }

    editComment = (id, newCommentText) => {
        this.comments = this.comments.map(commentItem => {
            if (commentItem.id !== id) {
                return commentItem;
            }

            const editedComment = {
                id: commentItem.id,
                comment: newCommentText
            }

            return editedComment;
        })
    }
};