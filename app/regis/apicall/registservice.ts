import { registInterface } from "@/app/Interface/registInterface";

const ENDPOINT =  '/userlist';

const PostRegist = async (postData:registInterface) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URLEXPRESS}${ENDPOINT}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`There was a problem posting data to ${ENDPOINT}:`, error);
      return null;
    }
  };

  export default PostRegist