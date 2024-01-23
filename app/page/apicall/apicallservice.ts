

const fetchData = async (endpoint: string) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URLEXPRESS}${endpoint}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`There was a problem fetching data from ${endpoint}:`, error);
      return null;
    }
  };

  const getImageUrl = (filename : string) => {
    return `${process.env.NEXT_PUBLIC_URLEXPRESS}/Image/${filename}`;
  };


export { fetchData, getImageUrl }
