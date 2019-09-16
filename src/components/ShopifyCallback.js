import React, { useEffect } from 'react';
import axios from 'axios';
import config from '../utils/config';

const ShopifyCallback = ({ search, accessToken }) => {
  useEffect(() => {
    const finishAuth = async () => {
      try {
        const result = await axios.get(
          `${config.apiBaseUrl}/shopify-connect/callback?${search}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };

    finishAuth();
  }, [search, accessToken]);

  return <div>Connecting to Shopify...</div>;
};

export default ShopifyCallback;
