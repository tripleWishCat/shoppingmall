import { observable } from "mobx";
const Categories = ["0", "1", "2", "3"];

export const createStore = () => {
  const store = {
    query: observable.box(""),
    setQuery(query: string) {
      store.query.set(query.toLowerCase());
    },

    get Categories() {
      return Categories;
    },
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>;
