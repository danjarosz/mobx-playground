import { observable, action } from "mobx";

const NO_RESULT = -1;

export default class CommentsStore {
    @observable
    comments = [{
        id: 26738262387,
        comment: "Super książka!"
    }];

    @action
    addComment = comment => this.comments.push(comment);

    @action
    removeComment = id => {
        const index = this.comments.findIndex(comment => comment.id === id);

        if (index === NO_RESULT) {
            return;
        }

        this.comments = this.comments.filter(comment => comment.id !== id)
    }
};