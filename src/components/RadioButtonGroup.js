import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RadioButtonGroup = ({ onChange, buttonLabels }) => {
  const [selected, setCurSelection] = useState(buttonLabels[0]);

  const handleOptionChange = ({ target: { value } }) => {
    // setCurSelection(o.target.value); //other option
    onChange(value);
    setCurSelection(value);
  };

  return (
    <Container>
      <p>Zobrazit:</p>
      <form>
        <FormContainer>
          {buttonLabels.map((value, key) => (
            <label key={key}>
              <input
                type="radio"
                value={value}
                checked={selected === value}
                onChange={handleOptionChange}
              />
              {value}
            </label>
          ))}
        </FormContainer>
      </form>
    </Container>
  );
};

export default RadioButtonGroup;
