import axios from "axios";

const URL = "https://api.unsplash.com/";
const access_key = "Client-ID BvI35QR5b5IPVBWU_ESBW4Sj6biWuAWEMGzp5bf_NMU";
export const getUser = async () => {
  const res = await axios.get(URL + "me", {
    headers: {
      Authorization: access_key
    }
  });
  return res;
};
export const updateUser = async () => {
  const res = await axios.put(URL + "me", {
    headers: {
      Authorization: access_key
    }
  });
  return res;
};
export const getUserProfile = async (username: any) => {
  const res = await axios.get(URL + "users/" + username, {
    headers: {
      Authorization: access_key
    }, 
    params: {
      username: username
    }
  })
  return res;
}
export const getUserPorfolio = async (username: any) => {
  const res = await axios.get(URL + "users/" + username + "/portfolio", {
    headers: {
      Authorization: access_key
    }, 
    params: {
      username: username
    }
  })
  return res;
}
export const getUserPhotos = async (username: any) => {
  const res = await axios.get(URL + "users/" + username + "/photos", {
    headers: {
      Authorization: access_key
    }, 
    params: {
      username: username
    }
  })
  return res;
}
export const getUserLikedPhotos = async (username: any) => {
  const res = await axios.get(URL + "users/" + username + "/likes", {
    headers: {
      Authorization: access_key
    }, 
    params: {
      username: username
    }
  })
  return res;
}

export const getUserCollections = async (username:any) => {
  const res = await axios.get(URL + "users/" + username  + "/collections", {
      headers: {
        Authorization: access_key
      },
      params:{
        username: username
      }
  })
  return res;
}

export const getUserStatistics = async (username:any) => {
  const res = await axios.get(URL + "users/" + username + "/statistics", {
      headers: {
        Authorization: access_key
      },
      params: {
        username: username
      }
  })
  return res;
}
export const getImage = async() => {
    const res = await axios.get(URL + "photos", {
        headers: {
            Authorization: access_key
        }, 
        params: {
            page: 2,
            per_page: 20
        } 
    })
    //console.log(res);
    return res;
}
export const getPhotoWithID = async(id:any) => {
    const res = await axios.get(URL + "photos/" + id, {
        headers:{
            Authorization: access_key
        }, 
        params:{
            id: id
        }       
    })
    return res;
}
export const getRandomPhoto = async() => {
    const res = await axios.get(URL + "photos/random", {
        headers:{
            Authorization: access_key
        }, 
    })
    return res;
}
export const getPhotoStatistics = async(id:any) => {
  const res = await axios.get(URL + "photos/" + id + "/statistics", {
      headers:{
          Authorization: access_key
      }, 
      params:{
          id: id
      }       
  })
  return res;
}

export const likePhoto = async (id:any) => {
   const res = await axios.post(URL + "photos/" + id + "/like", {
      headers: {
        Authorization: access_key
      }, 
      params: {
        id: id
      }
   })
   return res;
}
export const getCollection = async () => {
  const res = await axios.get(URL + "collections", {
      headers: {
        Authorization: access_key
      },
  })
  return res;
}
export const getPhotoOfCollection = async (id:any) => {
  const res = await axios.get(URL + "collections/" + id + "/photos", {
      headers: {
        Authorization: access_key
      },
      params: {
        id: id
      }
  })
  return res;
}
export const createCollection = async (title:any) => {
  const res = await axios.post(URL + "collections", {
      headers: {
        Authorization: access_key
      },
      params: {
        title: title
      }
  })
  return res;
}
export const searchPhotos =async (query: any) => {
  const res = await axios.get(URL + "search/photos", {
    headers: {
      Authorization: access_key
    },
    params: {
      query: query
    }
  })
  return res;
}
export const searchUsers =async (query: any) => {
  const res = await axios.get(URL + "search/users", {
    headers: {
      Authorization: access_key
    },
    params: {
      query: query
    }
  })
  return res;
}
export const downloadPhotos =async (id: any) => {
  const res = await axios.get(URL + "photos/" + id + "/download", {
    headers: {
      Authorization: access_key
    },
    params: {
      id: id
    }
  })
  return res;
}

// export const updateCollection = async () => {
//   const res = await axios.put(URL + "collections/" + id, {
//       headers: {
//         Authorization: access_key
//       },
//       // params: {
//       //   title: title
//       // }
//   })
//   return res;
// }
export const getTopics = async() => {
  const res = await axios.get(URL + "topics", {
    headers: {
      Authorization: access_key
    },
  })
  return res;
}
export const getTopicPhotos = async(id_or_slug:any) => {
  const res = await axios.get(URL + "topics/" + id_or_slug + "/photos", {
    headers: {
      Authorization: access_key
    }, 
    params: {
      id_or_slug: id_or_slug,
      per_page: 20
    }
  })
  return res;
}