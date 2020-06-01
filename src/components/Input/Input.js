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
  <FormControl variants={childVariants}>
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

Input.propTypes = {
  hasButton: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  onChangeHandler: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Input;
