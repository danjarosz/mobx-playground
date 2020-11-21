import CommentsStore from "./CommentsStore";

export default class RootStore {
    constructor() {
        this.commentsStore = new CommentsStore();
    }
}