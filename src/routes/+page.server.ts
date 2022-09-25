import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

type Todo = {
	uid: string;
	created_at: Date;
	text: string;
	done: boolean;
	pending_delete: boolean;
};

export const load: PageServerLoad = async ({ locals }) => {
	// locals.userid comes from src/hooks.js
	const response = await fetch(`https://api.svelte.dev/todos/${locals.userid}`, {
		headers: {
			'content-type': 'application/json'
		}
	});

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			todos: [] as Todo[]
		};
	}

	if (response.status === 200) {
		return {
			todos: (await response.json()) as Todo[]
		};
	}

	throw error(response.status);
};
