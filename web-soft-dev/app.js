const handleRequest = (request) => {
  const url = new URL(request.url);
  return new Response(`${request.method} ${url.pathname}`);
};

Deno.serve(handleRequest);
