import { writable } from "svelte/store";
import type { Data } from "./types";
import { fetchData } from "./api";

export const dataStore = writable<Data | null>(null);

export async function loadData() {
  try {
    const data = await fetchData();
    dataStore.set(data);
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }
}