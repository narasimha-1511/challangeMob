import admin from "firebase-admin";
import { getFirestore, Firestore } from "firebase-admin/firestore";

const serviceAccount = {
  type: "service_account",
  project_id: "backend-b4589",
  private_key_id: "c239945a62348c8dcf029ea9f43965de6d31ae00",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC3F8v4htg2XXuj\n2PEWkkXqVdrFz3IMDScJg4f2QfkOj4diRUnN0He5m9UNcbo4rP47v4SGPkxA4Huc\n4MxkLLh9K+ZinSbxSmu3hQEE1ZdJ0HuK+NxCFOv2VnMkqp4sk/BKR7EHSYVdRCX0\nGVXh1+upVcfjDadegpES5c93HdTw1MkvVDLRBNBww4YmZBp5xl74mwtLHpKNTaYf\no8m/wIA0+FcfqnyT4VcraOfXtUexgK/9Xhd6qMkHJjuGkTCgnz4ePJ04snMzfS3X\nARqbeWhSiDpZZKdTyR3qW3/GYEPQYclB5DIryknkbv95y45bhbgvclGbkDUrguWS\n1ZexX3qNAgMBAAECggEAAypRJ2nFYSM6mPmOKXK77LIxRwwwD49Gpn50okg/swW+\nNG+4N+urtjTAeSwHKSWse4HzG5MGJHT9DhhA0FaJlfhlUj0fSDqeJB0TiG7c37TP\n/fYRcL8F2UtjUDX26BRiqhYVNGgL+zHLai3p8y6Vb2cBPqakxxiAw4/fh1KntMYh\nbIZbhC8Zi1LsaoqkSEQKzSz8xdyqdkiyMtsh+bNr/HaxhNLHv8D45KgDPW1J+shY\nWYhpyaFiyIjdMDiEMPhtfw4eAsWOyaYe4TRAy/y/fRktM4gm/uhCACGFXImmNleT\nsdP0eI3opQW9L5h6yDd83Pk+AQ+EcLYq7G8GBcVUgQKBgQD1u0QXvKVp3LkLTpIU\ncais8Gg5fVsqbmtTnDfzxaGhqLEQSYm+xZd0129YI6rPbHgN+zRQ+gQhYZ0sQGb9\nLNJD9a1RqR7fgfFj58T0Sc3r+ZxviBOGyesR8T2+woiw8yJ28D3HUNx252JKmTnM\n0ZZkRoIxiXjoZxiYaDqoJgGs4QKBgQC+vnMP4sArDtn1p3RLazv1Fu7SEFGuZu0P\nDk4Md+JiwP8z90ZYdceXZZ7A3F3AyHZqAC7mWfd8DnSPmAZocLk21F4/1iuDmr71\nsfkK7MYKRyWRRD60v1wlpLgxEoa9kg3UmZS50nus0ZSuP8T2Bwyu3PBbM2niSytY\nGh927yf3LQKBgCuoxgRhpBIXAVmc8B9pwkpXvGzadOQpEjCcxOQu7PTIAA2gwzR9\n7tb3n/TNAYAxCXOSek0Y3rr/mOlP1/yLhiBE+jJUFgQoFjdl6nxs0IVop/648p80\nKOvbLNlDvv2RdUIklRVgrIsDuVb/umFFq67NSDx87Fp+VsRdYG6XshyBAoGASrcB\nDRzt1y/nEoF4XT5w6u0DuUbpJ95rRzV8PwgKplIg5PMcG/RurRACIltvYd9j+tt9\ng3+EIJTs9X5ALFLTSfXfwTOcMd3ApS8EdVIPtODvhzprMZOvfZNLDvXJz6HRRxCt\noCghh61Ehwi1lwVl42zpvV+jPx/gp477+jNtvTUCgYAvZOLj4WiJuIX/fhmMvCTx\ntXUdMohg0MCbMw4c+tETtzfCpIJrYW7crTEHLJg99Z/l7Ymj9WimUngvy3bSYrpP\nblWsXc+eYsNA6joZ/M1x/lSo495y4X/qBNSXUbpU6gNRQeQ1leQSogR1Vfw/Ejzs\ndH/AFRTcUmHdAIHMDXYaLA==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-j9tix@backend-b4589.iam.gserviceaccount.com",
  client_id: "116978989857876006007",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-j9tix%40backend-b4589.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
});

const dbbb: Firestore = getFirestore();

export default dbbb;
