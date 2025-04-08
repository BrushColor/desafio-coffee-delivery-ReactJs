import { ReactNode } from 'react';
import { InfoItemContainer, IconWrapper } from './style';

interface SuccessInfoItemProps {
  icon: ReactNode;
  deliveryLabel: string;
  address: string;
  cityInfo: string;
  color: 'purple' | 'yellow' | 'yellow-dark';
}

export function SuccessInfoItem({
  icon,
  deliveryLabel,
  address,
  cityInfo,
  color,
}: SuccessInfoItemProps) {
  const isDelivery = deliveryLabel.toLowerCase().includes('entrega em');

  return (
    <InfoItemContainer>
      <IconWrapper color={color}>{icon}</IconWrapper>

      {isDelivery ? (
        <div>
          <p>
            {deliveryLabel} <strong>{address}</strong>
          </p>
          {cityInfo && <p>{cityInfo}</p>}
        </div>
      ) : (
        <div>
          <p>{deliveryLabel}</p>
          <strong>{address}</strong>
          {cityInfo && <p>{cityInfo}</p>}
        </div>
      )}
    </InfoItemContainer>
  );
}
