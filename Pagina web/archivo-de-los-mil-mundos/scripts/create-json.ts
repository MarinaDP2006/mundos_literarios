import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as stories from '../json/stories.json';

const db = getFirestore();

async function syncFirestore() {
  const batch = db.batch();
  stories.forEach(story => {
    const ref = db.collection('stories').doc(story.id);
    batch.set(ref, story);
  });
  await batch.commit();
  console.log('Firestore actualizado con datos de Google AI Studio.');
}