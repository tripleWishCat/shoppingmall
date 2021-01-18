import axios from "axios";
const baseUrl = process.env.REACT_APP_REST;

const getOneData = async function (product_id: number) {
  const getUrl: any = `${baseUrl}product?id=${product_id}`;
  try {
    // axios.request<ServerData>({
    //   url: 'https://example.com/path/to/data',
    //   transformResponse: (r: ServerResponse) => r.data
    // }).then((response) => {
    //   // `response` is of type `AxiosResponse<ServerData>`
    //   const { data } = response
    //   // `data` is of type ServerData, correctly inferred
    // })
    const result = await axios.get(getUrl);
    return result;
  } catch {
    console.log("err");
  }
};

const getSearchData = async function (page?: number, search?: string) {
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
  try {
    const result = await axios.get(getUrl);
    return result;
  } catch {
    console.log("err");
  }
};

export { getOneData, getSearchData };
