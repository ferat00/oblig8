import sanityClient from "@sanity/client"





const options = {
    projectId:'r3s7pa0u',
    dataset: 'production',
    apiVersion: '2022-03-29',
  };

  const client = sanityClient({
    ...options, 
    useCdn: false,
})

  export default client;