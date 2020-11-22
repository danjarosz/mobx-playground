import { useContext } from "react";

import { StoreContext } from "./StoreProvider";

//osobny hook do każdego stora z RootStore jest wymagany

export function useCommentsStore() {
    const rootStore = useContext(StoreContext);

    if (!rootStore) {
        throw new Error('Nie znaleziono RootStore, sprawdź czy masz Provider, który go dostarcza')
    };

    return rootStore.commentsStore;
}