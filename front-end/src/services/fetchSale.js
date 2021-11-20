const fetchSale = async (customer, seller, cartProducts, address) => {
  const { token } = customer;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    mode: 'cors',
    body: JSON.stringify({ customer, seller, cartProducts, address }),
  };
  const response = await fetch('http://localhost:3001/sale', requestOptions)
    .then((res) => res.json())
    .then((data) => data);
  console.log(response);
  return response;
};

export default fetchSale;
