import store from "./store";
import { addBug, removeBug } from "./actions";

const unsubscribestore = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(addBug("Cant open browser"));

unsubscribestore();

store.dispatch(removeBug(1));

console.log(store);
