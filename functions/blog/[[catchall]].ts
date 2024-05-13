export const onRequest: PagesFunction = async (context) => {
  const blogUrl = new URL('https://oddc.craft.me');
  const path = context.params.catchall;
  if (path) {
    blogUrl.pathname = path instanceof Array ? path.join('/') : path;
  }
  const request = new Request(blogUrl);
  return fetch(request);
};
