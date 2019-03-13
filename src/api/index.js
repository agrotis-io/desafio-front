const getDatabase = () => (
  firebase.firestore()
);

const get = (resourceName) => (
  getDatabase()
    .collection(resourceName)
    .orderBy('name')
    .get()
);

export default {
  get,
};