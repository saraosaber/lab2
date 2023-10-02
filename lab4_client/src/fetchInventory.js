
async function safeFetch(url){
  return fetch(url)
  .then(response => {
    if(!response.ok) {
      throw new Error('${url} returned status ${response.status}');
    }
    return response.json();
  });
}



async function fetchSpecificIngredient(category, item){
  return safeFetch("http://localhost:8080/" + category + "/" + item);
}

async function fetchCategory(category, keys) {
  return Object.assign({}, ...await Promise.all(keys.map(async (x) => { 
    return {[x]: await fetchSpecificIngredient(category, x)}
  })))
}

export default async function fetchAllIngredients() {
  const [foundations, proteins, extras, dressings] = await Promise.all([
    fetchCategory("foundations", await safeFetch("http://localhost:8080/foundations/")),
    fetchCategory("proteins", await safeFetch("http://localhost:8080/proteins/")),
    fetchCategory("extras", await safeFetch("http://localhost:8080/extras/")),
    fetchCategory("dressings", await safeFetch("http://localhost:8080/dressings/"))
  ]);
 
 return {
    foundations, 
    proteins, 
    extras, 
    dressings,
  };
}