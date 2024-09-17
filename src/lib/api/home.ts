import { ProjectResponse } from "@/interfaces/home";

const API_BASE_URL = process.env.API_BASE_URL;

export async function fetchProjects() {
  const url = new URL(`${API_BASE_URL}/api/Production/Projects`);
  url.searchParams.set('PageIndex', '1');
  url.searchParams.set('PageSize', '3');
  url.searchParams.set('IsDeep', 'true');

  try {
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ProjectResponse = await response.json();
    return data.data ?? [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}
