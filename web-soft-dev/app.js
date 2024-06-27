const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;

  const operation = params.get("operation");
  const number1 = Number(params.get("number1"));
  const number2 = Number(params.get("number2"));

  const product = number1 * number2;
  const sum = number1 + number2;

  if (operation && number1 && number2) {
    if (operation === "sum") {
      return new Response(`${sum}`);
    } else if (operation === "product") {
      return new Response(`${product}`);
    } else {
      return new Response("Invalid parameters..");
    }
  } else {
    return new Response("Invalid parameters..");
  }
};

Deno.serve(handleRequest);
