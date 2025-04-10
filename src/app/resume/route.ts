import { getCloudflareContext } from '@opennextjs/cloudflare'

export async function GET() {
	const env = getCloudflareContext().env
	const resume = await env.BUCKET.get(env.RESUME_FILENAME)

	if (!resume) {
		return new Response(`${env.RESUME_FILENAME} Not found` , { status: 404 })
	}

	return new Response(resume.body, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `inline; filename="${env.RESUME_FILENAME}"`,
		},
	})
}
