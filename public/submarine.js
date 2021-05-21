/* eslint-disable no-restricted-globals */
self.onmessage = async ($event) => {
  console.log($event);
  if ($event && $event.data && $event.data.msg === "incSubmarine") {
    const newCounter = incSubmarine($event.data.countSubmarine);
    self.postMessage(newCounter);
  }
};

const incSubmarine = (countSubmarine) => {
  const start = Date.now();
  while (Date.now() < start + 5000) {}
  return countSubmarine + 1;
};
