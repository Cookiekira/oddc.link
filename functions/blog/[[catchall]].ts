interface Env {
  BlogURL: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  if (!context.env.BlogURL) {
    return new Response('BlogUrl is not defined', { status: 500 });
  }
  const blogUrl = new URL(context.env.BlogURL);
  const path = context.params.catchall;
  if (path) {
    blogUrl.pathname = Array.isArray(path) ? path.join('/') : path;
  }
  const request = new Request(blogUrl);
  return fetch(request);
};
