const fetchSaleDone = async (token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    mode: 'cors',
    // body: JSON.stringify({ sale }),
  };
  const response = await fetch('http://localhost:3001/saleDone', requestOptions)
    .then((res) => res.json())
    .then((data) => data);
  console.log(response);
  return response;
};

export default fetchSaleDone;
