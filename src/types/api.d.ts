export {};

declare global {
  type Vehicle = {
    features: {
      consumption: string;
      engine: string;
      power: string;
      speed: string;
    };
    id: number;
    image: string;
    legal_text: string;
    name: string;
    price: number;
    subheading: string;
    video: string;
  };
}
