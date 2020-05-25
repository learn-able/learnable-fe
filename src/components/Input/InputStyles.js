import styled, { css } from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: ${({ theme }) => theme.colors.grayLight};
  border: none;
  height: 3rem;
  width: 3rem;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    outline: none;

    & > * {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      && > * {
        color: ${({ theme }) => theme.colors.gray};
        cursor: auto;
      }
    `}
`;

export const FormControl = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacers.xs} 0;
  position: relative;
  width: 100%;

  & label,
  & input {
    display: block;
  }

  & label {
    color: transparent;
    pointer-events: none;
    position: absolute;
  }

  & input {
    border: 1px solid ${({ theme }) => theme.colors.gray};
    font: inherit;
    height: 3rem;
    padding: 0.15rem 0.6rem;
    width: 100%;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.grayDarker};
    }
  }

  & p {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 300;
    position: absolute;
    left: 0;
    top: 3rem;
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      & label {
        color: transparent;
        pointer-events: none;
        position: absolute;
      }

      & p {
        color: red;
      }

      & input {
        background: #ffd1d1;
        border-color: red;
        margin-bottom: 0.4rem;
      }
    `}
`;

export const PlusIcon = styled(AddIcon)`
  && {
    font-size: 3rem;
    pointer-events: none;
  }
`;
