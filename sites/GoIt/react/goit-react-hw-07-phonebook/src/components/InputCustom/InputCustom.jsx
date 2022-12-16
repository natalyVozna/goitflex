import {
  Field,
  LabelInput,
  InputStyled,
  SearchLabel,
} from './InputCustom.styled';
import PropTypes from 'prop-types';

export const InputCustom = ({
  inputId,
  type = 'text',
  title,
  name,
  value,
  fildStyle,
  inputStyle,
  required = true,
  pattern,
  handleChangeInput,
  placeholder,
  disabled = true,
}) => {
  return (
    <Field style={fildStyle}>
      {title && <LabelInput htmlFor={inputId}>{title}</LabelInput>}
      <SearchLabel disabled={disabled} />
      <InputStyled
        type={type}
        name={name}
        id={inputId}
        value={value}
        style={inputStyle}
        onChange={handleChangeInput}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        disabled={disabled}
      />
    </Field>
  );
};

InputCustom.propTypes = {
  inputId: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  fildStyle: PropTypes.shape({}),
  title: PropTypes.string,
  inputStyle: PropTypes.shape({}),
  handleChangeInput: PropTypes.func.isRequired,
};
