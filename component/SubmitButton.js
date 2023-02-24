import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      margin={60}
      color={"#171E38"}
      width={"50%"}
    />
  );
}

export default SubmitButton;
