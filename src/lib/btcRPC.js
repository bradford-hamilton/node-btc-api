import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class btcRPC {
  static async query(method, params) {
    const config = {
      method: 'post',
      url: process.env.BTC_RPC_URL,
      headers: { 'content-type': 'text/plain' },
      auth: {
        username: process.env.BTC_RPC_USER,
        password: process.env.BTC_RPC_PASSWORD,
      },
      data: JSON.stringify({
        jsonrpc: 2.0,
        id: method,
        method: method,
        params: params,
      }),
    };

    try {
      const result = await axios(config);
      return result.data;
    } catch (err) {
      throw new Error(err.response.data.error.message);
    }
  }
}

export default btcRPC;
