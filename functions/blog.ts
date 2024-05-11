export const onRequest: PagesFunction = async (context) => {
  const blogUrl = new URL("https://oddc.craft.me");
  const request = new Request(blogUrl)
  return fetch(request)
};
``