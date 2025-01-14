export {};

declare global {
  type Company = {
    address: string;
    cnpj: string;
    company_name: string;
    phone: string;
    whatsapp: string;
  };

  type Vehicle = {
    description: {
      heading: string;
      paragraph: string;
    };
    features: {
      consumption: string;
      engine: string;
      power: string;
      speed: string;
    };
    id: number;
    image: {
      desktop: string;
      mobile: string;
    };
    legal_text: string;
    name: string;
    price: number;
    subheading: string;
    video: string;
  };
}
