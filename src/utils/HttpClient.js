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

export default HttpClient;
