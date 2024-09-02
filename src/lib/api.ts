import type { Data } from "./types";

export async function fetchData(): Promise<Data> {
  const response = await fetch('https://raw.githubusercontent.com/gdgchennai/devfest24-api/main/web_api.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Data = await response.json();
  return data;
}