const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;

  const one = Number(params.get("one"));
  const two = Number(params.get("two"));

  return new Response(`Sum: ${one + two}`);
};

Deno.serve(handleRequest);
