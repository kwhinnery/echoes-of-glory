module.exports = async function(context) {
  const sync = context.requireFromAssets('/private/sync.js');
  await sync.updateUserData(context);
};
