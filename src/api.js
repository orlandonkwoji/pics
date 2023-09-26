import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 0FrPRpn5lFf-kdRkSt5bj9qZQC_KcmguexsjhVimyvU",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
