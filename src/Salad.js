import { v4 as uuidv4 } from 'uuid';

import inventory from './inventory.mjs';

class Salad {
  constructor(salad) {
    this.uuid = uuidv4();
    if (arguments.length > 0){
      this.ingredients = {...(salad.ingredients)};
      this.uuid = (salad.uuid ?? this.uuid);
    } else {
      this.ingredients = {};
    }
    this.id = "salad_" + Salad.instanceCounter++;
    
  }

  static instanceCounter = 0;
  

  add(name, properties) {
    this.ingredients[name] = properties;
    return this;
  }

  remove(name) {
    if (this.ingredients.hasOwnProperty(name)) {
      delete this.ingredients[name];
    } else {
      console.error(`Invalid ingredient: ${name}`);
    }
    return this;
  }

  getPrice () {
    let sum = 0;
    console.log(Object.keys(this.ingredients))
    Object.keys(this.ingredients).forEach(k => {
      if (k == 'extra') {
        Object.keys(this.ingredients[k]).forEach(kc => {
          sum += inventory[kc].price
        })
      } else {
        sum += inventory[this.ingredients[k]].price
      }
    })
    return sum
  }

  count(prop) {
    return Object.values(this.ingredients).filter((x) => x[prop]).reduce((sum, x) => sum += 1, 0);
  }

  static parse(json) {
    const parsed = JSON.parse(json);
    if (Array.isArray(parsed)){
      let res = []
        for (let i = 0; i < (parsed.length); i++) {
          res.push(new Salad(parsed[i]));
        }
        return res;
      } else {
        return new Salad(parsed);
      }
  } 
}

export default Salad;