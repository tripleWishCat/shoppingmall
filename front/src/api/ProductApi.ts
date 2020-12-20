import axios from "axios";
const baseUrl = process.env.REACT_APP_REST;

const getOneData = async function (product_id: number) {
  const getUrl: any = `${baseUrl}product?id=${product_id}`;
  const result = await axios.get(getUrl);
  return result.data[0];
};

const getSearchData = async function (page: number, search: string) {
  const getUrl: any = `${baseUrl}product`;
  if (page && search) {
    const getUrl: any = `${baseUrl}product?search=${search}&page=${page}`;
  } else if (page && !search) {
    const getUrl: any = `${baseUrl}product?page=${page}`;
  } else if (!page && search) {
    const getUrl: any = `${baseUrl}product?search=${search}`;
  } else if (!page && !search) {
    const getUrl: any = `${baseUrl}product`;
  }
  const result = await axios.get(getUrl);
  return result;
};

export { getOneData, getSearchData };
