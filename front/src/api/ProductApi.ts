import axios from "axios";
const baseUrl = process.env.REACT_APP_REST;
// interface productData {
//   CATEGORY: null;
//   CHG_DATE: string;
//   CHG_ID: string;
//   DELETE_YN: string;
//   DELI_FEE: string;
//   DELI_FREE_AMT: string;
//   DELI_LOC: string;
//   DELI_WAY: string;
//   NOTICE: null;
//   PRICE: string;
//   PROD_ID: number;
//   P_POINT: string;
//   RATE: string;
//   REG_DATE: string;
//   REG_ID: string;
//   SALE_YN: string;
//   STOCK: string;
//   SUB_TITLE: string;
//   S_PRICE: null;
//   S_RATE: null;
//   TITLE: string;
//   TUMB_IMG: string;
// }

const getOneData = async function (product_id: number) {
  const getUrl: any = `${baseUrl}product?id=${product_id}`;
  const result = await axios.get(getUrl).then((res) => {
    return res.data[0];
  });
  return result;
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
