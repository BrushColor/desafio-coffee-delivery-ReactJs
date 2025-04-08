import styled from 'styled-components';

interface IconWrapperProps {
  color: 'purple' | 'yellow' | 'yellow-dark';
}

export const InfoItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  > div {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme['base-text']};

    p {
      margin: 0;
      font:
        400 1rem / 1.3 'Roboto',
        sans-serif;
    }
  }
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background-color: ${({ theme, color }) => theme[color]};
  color: ${({ theme }) => theme.white};

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
