export class Cookie {

  id: number;
  name: string;
  description: string;
  ingredientList: string;
  instructions: string;
  prepTimeMinutes: number;
  bakeTimeMinutes: number;
  yield: number;
  texture: string;
  comment: string;
  source: string;
  imageURL: string;

  constructor(
    id?: number,
    name?: string,
    description?: string,
    ingredientList?: string,
    instructions?: string,
    prepTimeMinutes?: number,
    bakeTimeMinutes?: number,
    _yield?: number,
    texture?: string,
    comment?: string,
    source?: string,
    imageURL?: string

    ) {

      this.id = id;
      this.name = name;
      this.description = description;
      this.ingredientList = ingredientList;
      this.instructions = instructions;
      this.prepTimeMinutes = prepTimeMinutes;
      this.bakeTimeMinutes = bakeTimeMinutes;
      this.yield = _yield;
      this.texture = texture;
      this.comment = comment;
      this.source = source;
      this.imageURL = imageURL;
  }

}
