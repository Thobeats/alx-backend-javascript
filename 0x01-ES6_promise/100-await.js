import { uploadPhoto, createUser } from './util';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
