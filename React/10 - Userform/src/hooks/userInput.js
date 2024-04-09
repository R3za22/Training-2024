import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(e) {
    setEnteredValue(e.target.value);
    setDidEdit(false);
  }

  function handleInputblur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputblur,
    hasError: didEdit && !valueIsValid,
  };
}
