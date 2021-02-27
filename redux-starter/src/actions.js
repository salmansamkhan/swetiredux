import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from "./actionTypes";

export function addBug(name, des) {
  return {
    type: BUG_ADDED,
    payload: {
      name,
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

export function resolveBug(id) {
  return {
    type: BUG_RESOLVED,
    payload: {
      id: id,
    },
  };
}
