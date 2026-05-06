// EMOJIHUB API

async function getEmojiGroups() {
  try {
    const r = await fetch("https://emojihub.yurace.pro/api/groups");
    const d = await r.json();
    
    const arr = Array.isArray(d) ? d : [];
    
    const result = arr
      .filter(g => g.includes('face'))     
      .map(g => g.replace('-', ' '));      
    
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getEmojiGroups();

// RANDOM USER API

async function getRandomUsers() {
  try {
    let r = await fetch("https://randomuser.me/api/?results=10");
    let obj = await r.json();

    let result = obj.results
      .filter(u => u.gender === "female")
      .map(u => u.name.first);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getRandomUsers();

//  POKEMON API

async function getPokemon() {
  try {
    let r = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    let obj = await r.json();

    let result = obj.results
      .filter(p => p.name.startsWith("b"))
      .map(p => p.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getPokemon();

//  DOG FACTS API

async function getDogFacts() {
  try {
    let r = await fetch("https://dogapi.dog/api/v2/facts");
    let obj = await r.json();

    let result = obj.data
      .map(d => d.attributes.body);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getDogFacts();
