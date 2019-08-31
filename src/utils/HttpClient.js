import axios from 'axios';

const HttpClient = async (url, method, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

// const HttpClient = async (url, method, data) => {
//   try {
//     const response = await fetch(url);

//     console.log('response', response);

//     const json = await response.json();

//     return json;
//   } catch (err) {
//     console.log(err);
//   }
// };

export default HttpClient;
