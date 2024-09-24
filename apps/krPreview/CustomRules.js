export default function CustomRules(values, formContent) {
  const errors = {};
  console.log("values",values);
  if (!values.OptIn1) {
    errors.OptIn1 = formContent.unchecked_alert;
  } 
  if (!values.OptIn2) {
    errors.OptIn2 = formContent.unchecked_alert;
  } 
  if (!values.OptIn3) {
    errors.OptIn3 = formContent.unchecked_alert;
  } 
  return errors;
}