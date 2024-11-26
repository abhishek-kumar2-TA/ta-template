import styled from 'styled-components';

export interface NotificationWrapperProps {
  $isVisible: boolean;
}

export const NotificationWrapper = styled.div<NotificationWrapperProps>`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--colors-error-base);
  color: var(--colors-background-base);
  padding: 16px;
  border: 1px solid #f5c6cb;
  border-radius: var(--global-componentRadius);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  align-items: start;
  transition: opacity 0.3s ease;

  &.fade-out {
    opacity: 0;
  }

  p {
    font-size: 1rem;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: var(--colors-background-base);
  cursor: pointer;
  font-size: 16px;
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  &:focus {
    outline: none;
    border: 2px solid var(--colors-background-base);
    border-radius: 4px;
  }
`;
