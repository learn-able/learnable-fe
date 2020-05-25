import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import { validate } from '../../utils/validators';

const PlusIcon = styled(AddIcon)`
  && {
    font-size: 3rem;
    pointer-events: none;
  }
`;

const Button = styled.button.attrs(() => ({
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

const FormControl = styled.div`
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

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = ({
  buttonChildren,
  id,
  errorText,
  hasButton,
  initialValid,
  initialValue,
  label,
  onButtonClick,
  onInput,
  placeholder,
  validators,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isTouched: false,
    isValid: initialValid || false,
  });

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isValid, onInput, value]);

  const changeHandler = (e) => {
    dispatch({
      type: 'CHANGE',
      val: e.target.value,
      validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: 'TOUCH' });
  };

  const isInvalid = !inputState.isValid && inputState.isTouched;

  const element = (
    <input
      aria-label={label}
      id={id}
      onBlur={touchHandler}
      onChange={changeHandler}
      placeholder={isInvalid ? null : placeholder}
      type="text"
      value={inputState.value}
    />
  );

  return (
    <FormControl isInvalid={isInvalid}>
      {element}
      {isInvalid && <p>{errorText}</p>}
      {hasButton && (
        <Button
          aria-label="Submit input"
          disabled={isInvalid || !value}
          onClick={onButtonClick}
        >
          {buttonChildren || <PlusIcon />}
        </Button>
      )}
    </FormControl>
  );
};

Input.defaultProps = {
  hasButton: false,
};

Input.propTypes = {
  buttonChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]),
  errorText: PropTypes.string,
  hasButton: PropTypes.bool,
  id: PropTypes.string.isRequired,
  initialValid: PropTypes.bool,
  initialValue: PropTypes.string,
  label: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  onInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
};

export default Input;
