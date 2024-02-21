export default function wrapPromise(promise) {
  console.log(promise, 'promise');
  let status = 'pending'; // It initializes status to 'pending' and response to undefined.
  let response;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (error) => {
      status = 'error';
      response = error;
    }
  );
  console.log(suspender, 'suspender');

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;

      case 'error':
        throw response;

      default:
        return response;
    }
  };

  return {
    read,
  };
}
