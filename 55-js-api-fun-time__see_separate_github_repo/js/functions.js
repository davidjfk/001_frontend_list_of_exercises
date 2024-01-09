
/* List with fns in this file:
    deleteAllChildNodes,
    log,
    logMyLongArray2,

*/

const deleteAllChildNodes = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const log = console.log;

const logMyLongArray2 = (bigArray) => {
  let counterValue = 1;
  bigArray.forEach(element => {
    log(`counter: ${counterValue}-${counterValue}-${counterValue}`)
    counterValue++;
    log(element)
  });
}




