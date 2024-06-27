const handleRequest = (request) => {
  return new Response(request.url);
};

Deno.serve(handleRequest);
