import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { InputCustom } from '../InputCustom/InputCustom';
import { Container } from './Filter.styled';

export const Filter = ({ value, onChange, disabled }) => {
  const fildStyle = {
    minWidth: '50%',
  };
  const inputId = nanoid();

  return (
    <Container>
      <InputCustom
        fildStyle={fildStyle}
        inputId={inputId}
        name="filter"
        value={value}
        placeholder="Search contacts"
        disabled={disabled}
        // title="Filter by name"
        handleChangeInput={onChange}
      />
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
