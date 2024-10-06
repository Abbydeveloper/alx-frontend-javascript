import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const upload = await uploadPhoto();
    const create = await createUser();
    console.log(`${body} ${firstName} ${lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
};
