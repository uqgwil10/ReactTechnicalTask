import { create } from "zustand";
import { Store } from "../types";

export const useMovieStore = create((set) => ({
  searchQuery: "",
  searchResults: [],
  cardBaseUrl: "",
  backDropBaseUrl: "",
  setSearchResults: (newSearchResults: any) =>
    set(() => ({ searchResults: newSearchResults })),
  setConfig: (newBackDropBaseUrl: string, newCardBaseUrl: string) =>
    set(() => ({
      backDropBaseUrl: newBackDropBaseUrl,
      cardBaseUrl: newCardBaseUrl,
    })),
  setSearchQuery: (searchQuery: any) => set(() => ({ searchQuery })),
}));
