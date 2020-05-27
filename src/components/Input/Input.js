import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, PlusIcon } from './InputStyles';

const childVariants = {
  active: {
    scaleY: 1,
  },
  disabled: {
    scaleY: 0,
  },
};

const Input = ({
  id,
  hasButton,
  label,
  onButtonClick,
  onChangeHandler,
  placeholder,
  value,
}) => (
  <FormControl
    variants={childVariants}
  >
    <input
      aria-label={label}
      id={id || null}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type="text"
      value={value}
    />
    {hasButton && (
      <Button
        aria-label="Submit input"
        disabled={!value}
        onClick={onButtonClick}
      >
        <PlusIcon />
      </Button>
    )}
  </FormControl>
);

Input.defaultProps = {
  hasButton: false,
};

// Input.propTypes = {
//   hasButton: PropTypes.bool,
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onButtonClick: PropTypes.func,
//   onChangeHandler: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string.isRequired,
// };

export default Input;

// import React, { useReducer, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { validate } from '../../utils/validators';
// import { Button, FormControl, PlusIcon } from './InputStyles';

// const inputReducer = (state, action) => {
//   switch (action.type) {
//     case 'CHANGE':
//       return {
//         ...state,
//         value: action.val,
//         isValid: validate(action.val, action.validators),
//       };
//     case 'TOUCH':
//       return {
//         ...state,
//         isTouched: true,
//       };
//     default:
//       return state;
//   }
// };

// const Input = ({
//   buttonChildren,
//   id,
//   errorText,
//   hasButton,
//   initialValid,
//   initialValue,
//   label,
//   onButtonClick,
//   onInput,
//   placeholder,
//   validators,
// }) => {
//   const [inputState, dispatch] = useReducer(inputReducer, {
//     value: initialValue || '',
//     isTouched: false,
//     isValid: initialValid || false,
//   });

//   const { value, isValid } = inputState;

//   useEffect(() => {
//     onInput(id, value, isValid);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id, isValid, onInput, value]);

//   const changeHandler = (e) => {
//     dispatch({
//       type: 'CHANGE',
//       val: e.target.value,
//       validators,
//     });
//   };

//   const touchHandler = () => {
//     dispatch({ type: 'TOUCH' });
//   };

//   const isInvalid = !inputState.isValid && inputState.isTouched;

//   const element = (
//     <input
//       aria-label={label}
//       id={id}
//       onBlur={touchHandler}
//       onChange={changeHandler}
//       placeholder={isInvalid ? null : placeholder}
//       type="text"
//       value={inputState.value}
//     />
//   );

//   return (
//     <FormControl isInvalid={isInvalid}>
//       {element}
//       {isInvalid && <p>{errorText}</p>}
//       {hasButton && (
//         <Button
//           aria-label="Submit input"
//           disabled={isInvalid || !value}
//           onClick={onButtonClick}
//         >
//           {buttonChildren || <PlusIcon />}
//         </Button>
//       )}
//     </FormControl>
//   );
// };

// Input.defaultProps = {
//   hasButton: false,
// };

// Input.propTypes = {
//   buttonChildren: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.object,
//     PropTypes.element,
//   ]),
//   errorText: PropTypes.string,
//   hasButton: PropTypes.bool,
//   id: PropTypes.string.isRequired,
//   initialValid: PropTypes.bool,
//   initialValue: PropTypes.string,
//   label: PropTypes.string.isRequired,
//   onButtonClick: PropTypes.func,
//   onInput: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   validators: PropTypes.array,
// };

// export default Input;
