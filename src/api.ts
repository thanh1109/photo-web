import axios from "axios";

const URL = "https://api.unsplash.com/";
const searchImage = async () => {
  const res = await axios.get(URL + "photos", {
    headers: {
      Authorization: "Client-ID BvI35QR5b5IPVBWU_ESBW4Sj6biWuAWEMGzp5bf_NMU"
    }
  });
  console.log(res);
  return res;
};

export default searchImage;
