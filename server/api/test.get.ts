export default eventHandler((event) => {
  console.log('protocol from helper', getRequestProtocol(event));
  console.log(
    'protocol from node req',
    event.node.req.headers['x-forwarded-proto']
  );
});
