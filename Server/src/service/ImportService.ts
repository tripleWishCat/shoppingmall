import importAPI from "../middleware/http";
import {AxiosRequestConfig} from 'axios';

export class ImportService {
    imp_uid:string;
    imp_key: string;
    imp_secret: string;
    imp_token?: string;
    imp_token_expired_at?: number;

  constructor () {
    console.log('Import Service constructed');
    this.imp_key = '8403200073332588';
    this.imp_secret = 'xAipvHAj6GCkGFlqZFOhaG5fJQx8Xf6uQoTm6uFdbhxSXSiWy6eJMjYwawE7LKCC9vYf0EsbV04TTmQr';
    this.imp_uid = 'imp00734179';
  }
  
  async getToken() {
    try {
      console.log('IMPORT SERVICE:: getToken');
      const options:AxiosRequestConfig = {
        method: 'POST',
        url: '/users/getToken',
        data: {
            'imp_key': this.imp_key,
            'imp_secret': this.imp_secret
        }
      };

      const result = await importAPI.request(options);
      this.imp_token = result.data.response.access_token;
      this.imp_token_expired_at = result.data.response.expired_at;
      console.log('token refreshed');
      return result.data;
    } 
    catch(err) {
      throw err;
    }
  }

  checkToken() {
    if (this.imp_token && this.imp_token_expired_at) {
      if (this.imp_token_expired_at <= Math.floor(new Date().getTime())) {
        return false;
      }
    } else {
      return false;
    }
    return true;
  }
  
  async getPayment() {
    try {
      if (!this.checkToken()) {
        await this.getToken();
      }
      console.log('IMPORT SERVICE:: getPayments');
      const option:AxiosRequestConfig = {
        method: 'GET',
        url: `/payments/${this.imp_uid}`,
        data: {
        },
        headers: {
          Authorization: this.imp_token
        }
      }
      const result = await importAPI.request(option);
      return result.data
    } catch(err) {
      throw err;
    }
  }
  async getPaymentByMerchantUid(merchantUid:string) {
    try {
      if (!this.checkToken()) {
        await this.getToken();
      }
      console.log('IMPORT SERVICE:: getPayments');
      const option:AxiosRequestConfig = {
        method: 'GET',
        url: `/payments/find/${merchantUid}`,
        data: {
        },
        headers: {
          Authorization: this.imp_token
        }
      }
      const result = await importAPI.request(option);
      return result.data
    } catch(err) {
      throw err;
    }
  }
}
