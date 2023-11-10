/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import { onRequest } from 'firebase-functions/v2/https';
// import * as logger from 'firebase-functions/logger';
import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import { Firestore } from 'firebase-admin/firestore';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const textToLength = functions.https.onRequest((request, response) => {
  try {
    const text = request.body.data.text as string | undefined;
    const textLength = text?.length;

    console.log(`Text length: ${textLength}`);
    console.log('Request Body: ', request.body);
    response.send(`Text length: ${textLength}`);
  } catch (error) {
    response.send(`Error: ${error}`);
  }
});

// export const textToLength = onRequest((request, response) => {
//   var text = request.query.text;
//   var textLength = text?.length;
//   // console.log('text length: ' + textLength);
//   response.send('Text length: ' + textLength);
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// admin.initializeApp({
//   projectId: 'test-projects-aabaa', // Replace with your emulator project ID
//   databaseURL: '127.0.0.1:8080', // Use the Firestore emulator's host and port
// });

// export const moveNoteToArchive = functions.firestore
//   .document('notes/{noteId}')
//   .onUpdate(async (change, context) => {
//     const newValue = change.after.data();
//     const previousValue = change.before.data();

//     if (
//       newValue &&
//       newValue.moveToArchive &&
//       previousValue &&
//       !previousValue.moveToArchive
//     ) {
//       const noteRef = change.after.ref;
//       const archiveRef = admin
//         .firestore()
//         .collection('archive')
//         .doc(noteRef.id);

//       try {
//         const snapshot = await noteRef.get();
//         const data = snapshot.data();

//         if (data) {
//           await archiveRef.set(data);
//           await noteRef.delete();
//         }
//       } catch (error) {
//         console.error('Error moving note to archive:', error);
//       }
//     }
//   });

// export const helloWorld = onRequest((request, response) => {
//   logger.info('Hello logs!', { structuredData: true });
//   console.log('Request Body: ', request.body);
//   console.log('Request Headers: ', request.headers);
//   response.send('Hello from Firebase!');
// });
