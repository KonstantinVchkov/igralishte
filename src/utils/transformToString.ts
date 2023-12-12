type ArrayItemInput = {
    name: string | number | undefined;
    count?: number;
  };
  
  type ArrayItemOutput = {
    name: string;
    count?: number;
  };
  
export function transformNameProperty(arr: ArrayItemInput[]): ArrayItemOutput[] {
    return arr.map(item => ({
      ...item,
      name: item.name ? String(item.name) : "",
      count: item.count || 0 
    }));
  }