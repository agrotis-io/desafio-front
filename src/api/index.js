const getDatabase = () => (
  firebase.firestore()
);

const get = (resourceName) => (
  getDatabase().collection(resourceName).get()
);

export default {
  get,
};