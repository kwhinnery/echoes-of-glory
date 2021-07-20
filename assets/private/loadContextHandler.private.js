// Load data for the current user and store it on the context
module.exports = async function(context, event) {
  const sync = context.requireFromAssets('/private/sync.js');
  const doc = await sync.getOrCreateDocumentForUser(context, event.From);
  context.currentUserId = event.From;
  context.currentUserData = doc.data;
};
