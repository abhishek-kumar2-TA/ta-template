import { css } from 'lit';

export default css`
  :host {
    width: 100%;
  }

  .field-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }

  .field-wrapper label {
    font-size: 18px;
  }

  .field-wrapper input {
    font-size: 20px;
    padding: 4px;
  }
`;
