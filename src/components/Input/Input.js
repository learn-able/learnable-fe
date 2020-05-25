import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { validate } from '../../utils/validators';

const Button = styled.button.attrs((props) => ({
  type: 'button',
}))``;

const FormControl = styled.div`
  margin: ${({ theme }) => theme.spacers.xs} 0;
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
  buttonHandler,
  id,
  errorText,
  hasSubmitButton,
  initialValid,
  initialValue,
  label,
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

  const element = (
    <input
      aria-label={label}
      id={id}
      onBlur={touchHandler}
      onChange={changeHandler}
      placeholder={placeholder}
      type="text"
      value={inputState.value}
    />
  );

  const isInvalid = !inputState.isValid && inputState.isTouched;

  return (
    <FormControl isInvalid={isInvalid}>
      <label htmlFor={id}>{label}</label>
      {element}
      {isInvalid && <p>{errorText}</p>}
      {hasSubmitButton && (
        <Button onClick={buttonHandler}>{buttonChildren}</Button>
      )}
    </FormControl>
  );
};

Input.defaultProps = {
  hasSubmitButton: false,
};

Input.propTypes = {
  buttonChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]),
  buttonHandler: PropTypes.func,
  errorText: PropTypes.string,
  hasSubmitButton: PropTypes.bool,
  id: PropTypes.string.isRequired,
  initialValid: PropTypes.bool,
  initialValue: PropTypes.string,
  label: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  validators: PropTypes.func,
};

export default Input;
