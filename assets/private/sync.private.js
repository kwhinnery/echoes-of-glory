// Get a reference to the helper library object we can use to make requests
function getServiceFromContext(context) {
  const client = context.getTwilioClient();
  return client.sync.services(context.SYNC_SERVICE_SID);
}

exports.getOrCreateDocumentForUser = async (context, uniqueName) => {
  const service = getServiceFromContext(context);
  let doc = null;

  try {
    doc = await service.documents(uniqueName).fetch();
  } catch(e) {
    if (e.status === 404) {
      // A 404 means we can try and create a doc
      doc = await service.documents.create({ uniqueName });
    } else {
      // Other classes of exceptions we should just rethrow
      throw e;
    }
  }

  return doc;
};

exports.updateUserData = async (context) => {
  const service = getServiceFromContext(context);
  const doc = service.documents(context.currentUserId);
  await doc.update({ data: context.currentUserData });
};
