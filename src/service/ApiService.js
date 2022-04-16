// const useApiService = () => {
//   const _baceUrl = 'http://localhost:8000/api/';

//   const request = async (url, method='GET', body=null, headers={'Content-Type': 'application/json'}) => {
//     try {
//       const res = await fetch(url, {method, body, headers})
//       if (!res.ok) {
//         throw new Error(`url: ${url} \nошибка: ${res.status}`);
//       }
//       const data = await res.json();
//       return data;

//     } catch (e) {
//       throw e;
//     }
//   }

//   const _tranformContacts = (item) => {
//     return {
//       id: item.pk,
//       address: item.address,
//       phone: item.phone,
//       email: item.email
//     }
//   }

//   const getContacts = async () => {
//     const res = await request(`${_baceUrl}contacts/`)
//     return _tranformContacts(res[0])
//   }

//   return {}
// }

// export default useApiService;