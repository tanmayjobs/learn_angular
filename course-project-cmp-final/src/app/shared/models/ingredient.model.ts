export class Ingredient {
  constructor(public name: string, public amount: number) {}

  toObject(): {ingredientName: string, ingredientAmount: number}{
    return {ingredientName: this.name, ingredientAmount: this.amount};
  }
}
