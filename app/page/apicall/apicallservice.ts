
  const ENDPOINT = '/listmenu'

  const getData = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URLEXPRESS}${ENDPOINT}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`There was a problem fetching data from ${ENDPOINT}:`, error);
      return null;
    }
  };

  const getImageUrl = (filename:string) => {
    return `${process.env.NEXT_PUBLIC_URLEXPRESS}/image/${filename}`;
};

const postData = async (endpoint: string, formData: FormData) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_URLEXPRESS}${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`There was a problem posting data to ${endpoint}:`, error);
    return null;
  }
};

export { getData, getImageUrl, postData }
