// Helper function to require a module exported by a private asset
function requireFromAssets(path) {
  const assets = Runtime.getAssets();
  const privateMessageAsset = assets[path];
  return require(privateMessageAsset.path);
}

// Configure a stack of "middleware" functions that will be called in order
// During an incoming message
const middleware = [
  '/private/loadContextHandler.js', // populate context with user data
  '/private/quizHandler.js', // load current quiz question (or final answer)
  '/private/flushContextHandler.js', // persist context changes after processing
];

// Main Twilio Function handler
exports.handler = async function(context, event, callback) {
  // Add a helper to require files from assets to the context
  context.requireFromAssets = requireFromAssets;

  // Helper to render a message body as a response
  function renderResponse(msg) {
    const twiml = new Twilio.twiml.MessagingResponse();
    twiml.message(msg);
    callback(null, twiml);
  }

  try {
    // Execute middleware sequentially
    for (let i = 0, l = middleware.length; i<l; i++) {
      // Require and execute the next middleware on the stack
      const done = await requireFromAssets(middleware[i])(context, event);
      if (done) break;
    }

    // After each middleware has executed, render the final message body
    renderResponse(context.messageBody);
  } catch(e) {
    console.log('Execution error:');
    console.log(e);
    renderResponse(`
      We're sorry - an unexpected error occurred. Please try again later!
    `);
  }
};
