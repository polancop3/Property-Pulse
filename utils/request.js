const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
    try {
        //if domain is not available
        if(!apiDomain) {
            return [];
        } 
      const res = await fetch(`${apiDomain}/properties`);
        console.log(JSON.stringify(res)+ 'all data');
      if(!res.ok){
        throw new Error('Failed to fetch data');
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }

  //fetch single property


async function fetchProperty(id) {
    try {
        //if domain is not available
        if(!apiDomain) {
            return null;
        } 
      const res = await fetch(`${apiDomain}/properties/${id}`);
      console.log(JSON.stringify(res)+ 'rec id');
      console.log(res);
      if(!res.ok){
        throw new Error('Failed to fetch data');
      }
      return res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export { fetchProperties, fetchProperty };