/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from 'firebase-functions';
import * as cors from 'cors';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript
const corsHandler = cors({ origin: true });

export const textToLength = functions.https.onRequest((request, response) => {
  corsHandler(request, response, () => {
    try {
      const text = request.body.text as string | undefined;
      const textLength = text?.length;

      response.status(200).send(`${textLength}`);
    } catch (error) {
      response.status(500).send(`Error: ${error}`);
    }
  });
});
