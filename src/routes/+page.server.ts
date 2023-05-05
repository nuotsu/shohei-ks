import { sql } from '@vercel/postgres'

export async function load({ locals }) {
	console.log(locals)

	console.log(process.env.POSTGRES_URL)

	return {
		// strikeouts
	}
}
