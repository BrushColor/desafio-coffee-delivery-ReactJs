import { CreditCard, Bank, Money } from '@phosphor-icons/react';
import { PaymentCardContainer, PaymentCardItem } from './style';

type PaymentOptionsProps = {
  selected: string | null;
  onSelect: (method: string | null) => void;
};

export function PaymentOptions({ selected, onSelect }: PaymentOptionsProps) {
  const paymentMethods = [
    {
      id: 'credit',
      icon: <CreditCard size={16} />,
      label: 'Cartão de crédito',
    },
    {
      id: 'debit',
      icon: <Bank size={16} />,
      label: 'Cartão de débito',
    },
    {
      id: 'money',
      icon: <Money size={16} />,
      label: 'Dinheiro',
    },
  ];

  const handleSelect = (methodId: string) => {
    if (selected === methodId) {
      onSelect(null);
    } else {
      onSelect(methodId);
    }
  };

  return (
    <PaymentCardContainer>
      {paymentMethods.map((method) => (
        <PaymentCardItem
          key={method.id}
          type="button"
          onClick={() => handleSelect(method.id)}
          isSelected={selected === method.id}
        >
          {method.icon}
          <span>{method.label.toUpperCase()}</span>
        </PaymentCardItem>
      ))}
    </PaymentCardContainer>
  );
}
