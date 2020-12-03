export const saveToLocalStorage = (state, key) => {
  try {
   const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
   console.log(e);
  }
 };
 
 export const loadFromLocalStorage = (key) => {
  try {
   const serializedState = localStorage.getItem(key);
    if (serializedState === null) return undefined;
     return JSON.parse(serializedState);
  } catch (e) {
   console.log(e);
   return undefined;
  }
 };