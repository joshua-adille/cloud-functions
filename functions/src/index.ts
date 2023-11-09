/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info('Hello logs!', { structuredData: true });
  console.log('Request Body: ', request.body);
  console.log('Request Headers: ', request.headers);
  response.send('Hello from Firebase!');
});

// export const textToLength = onRequest((request, response) => {
//   var text = request.query.text;
//   var textLength = text?.length;
//   // console.log('text length: ' + textLength);
//   response.send('Text length: ' + textLength);
// });

export const textToLength = onRequest((request, response) => {
  console.log('Request Body: ', request.body);
  const requestBody = request.body;
  const text = requestBody?.data?.text;
  const textLength = text?.length;
  console.log('text length: ' + textLength);
  response.send('The text length is: ' + textLength);
});
