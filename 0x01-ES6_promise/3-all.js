import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const upload = await uploadPhoto();
    const create = await createUser();
    console.log(`${upload.body} ${create.firstName} ${create.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
