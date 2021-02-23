import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";

export function addBug(des) {
  return {
    type: BUG_ADDED,
    payload: {
      description: des,
    },
  };
}

export function removeBug(id) {
  return {
    type: BUG_REMOVED,
    payload: {
      id: id,
    },
  };
}
