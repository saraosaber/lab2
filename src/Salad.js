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
    return Object.values(this.ingredients).reduce((sum, ing) => sum += ing.price, 0);
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