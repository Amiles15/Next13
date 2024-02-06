import { LoginInterface } from "@/app/Interface/logininterface";

const ENDPOINT =  '/login';

const postLogin = async ( formData: LoginInterface) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URLEXPRESS}${ENDPOINT}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
        },
        body: JSON.stringify(formData), // Convert the object to a JSON string
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

  export default postLogin