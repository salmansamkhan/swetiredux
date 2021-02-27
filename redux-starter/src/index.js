import store from "./store";
import { addBug, removeBug, resolveBug } from "./actions";

console.log(store);
console.log(store.getState());

const unsubscribestore = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(addBug("Browser Issue", "Cant open browser"));
store.dispatch(addBug("Browser Issue 2", "Cant open browser 2"));

store.dispatch(resolveBug(2));

// console.log(store.getState());

store.dispatch(removeBug(1));

unsubscribestore();

console.log(store);
