export let RegEmail = new RegExp("[a-z0-9]+@[a-z]+[a-z]{2,3}");

export const isValidEmail = (value) =>{
  return RegEmail.test(value);
}