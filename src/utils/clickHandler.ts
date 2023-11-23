export const renderSizeSection = (
  productSizes: string[]
): { key: number; text: string }[] => {
  if (productSizes.length === 1) {
    return [
      {
        key: 1,
        text: `од посакуваниот производ е останато само уште едно парче: ${productSizes[0]}`,
      },
    ];
  } else if (productSizes.length === 0) {
    return [{ key: 3, text: "Немаме повеќе од посакуваниот производ" }];
  } else {
    return productSizes.map((size, index) => ({ key: index, text: size }));
  }
};
