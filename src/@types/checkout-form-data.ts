export type CheckoutFormData = {
  cep: string;
  uf: string;
  cidade: string;
  rua: string;
  numero: string;
  bairro: string;
  paymentMethod: string;
  complemento?: string;
};
