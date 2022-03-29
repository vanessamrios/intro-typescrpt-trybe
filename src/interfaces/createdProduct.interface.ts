interface Item {
  id: number,
  name: string,
  amount: string,
}

interface CreatedProduct {
  item: Item,
}

export default CreatedProduct;