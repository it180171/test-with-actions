// ./public/script.js
module.exports = (data) => {
  const { context } = data;
  console.log("Hello from external script!");
  console.log("The event was: " + context.eventName);
  return `Processed event: ${context.eventName}`;
};