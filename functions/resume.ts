export const onRequest: PagesFunction<Env> = async (context) => {
	// return Hang Wang's Resume.pdf in BUCKET
	const resume = await context.env.BUCKET.get("Hang Wang's Resume.pdf");

	// return a PDF response
	if (resume) {
		return new Response(resume.body, {
			headers: {
				"Content-Type": "application/pdf",
			},
		});
	}
	return new Response("Resume not found", { status: 404 });
};
