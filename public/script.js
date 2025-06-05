// ./public/script.js
module.exports = async (dependencies) => {
  // Destructure the passed-in objects
  const { github, context, core } = dependencies;

  console.log("[External Script] Hello from the external script!");
  console.log(`[External Script] The event was: ${context.eventName}`);
  console.log(`[External Script] Repo: ${context.repo.owner}/${context.repo.repo}`);

  // You can use 'github' for API calls, 'context' for event data, 'core' for utils
  // For example, to set an output that can be used by later steps in the job:
  core.setOutput("processed_event", context.eventName);

  // The return value of this function will be available as an output
  // of the actions/github-script step if you 'return' it in the inline script.
  return `[External Script] Successfully processed event: ${context.eventName}`;
};