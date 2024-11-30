export interface Property {
  id: number;
  location: string;
  title: string;
  bedrooms: string;
  price: string;
  description: string;
  image: string;
}

export interface SliderProps {
  properties: Property[];
  itemsPerPage: number;
}
