export default function* handleRequest(
  method,
  url,
  params = null,
  body = null,
  avoidHeader,
) {
  const props = {
    method,
    url,
    params,
    body,
    avoidHeader,
  };
}
