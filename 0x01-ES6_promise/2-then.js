export default function handleResponseFromAPI(promise) {
  return Promise
    .then(() => ({
      status: 200,
      body: 'Success',
    }))
    .catch(() => Error())
    .finally(() => {
      console.log('Got a response from the API');
    }
  )
}
