import admin from "firebase-admin";
import { getFirestore, Firestore } from "firebase-admin/firestore";

const serviceAccount = {
  type: "service_account",
  project_id: "backend-b4589",
  private_key_id: "eeddb6bb2832f906ad2b2efe3c997768a75b9e6c",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDOlsRF9zygp7ih\nax28ERe9E+4xHuqtKxvx6ZvapH3IqUxAenLn85QJe/zipF7Pq+uzvXlmXOY2UyVF\nCS+zUszBaGSqsLAe641ynPjaNYl9rZI4ZDSA17lvycLY45XRxPlgJLfWuCV7mBdJ\nOIXSWoGkBTLUC9MhQ4Ij0kv5ABQC/uAiglELe5AEK3rkUE19HQDGV4RaAeTXNTAf\n2h1SyVsdXLwfsDcz95KJZm3DaCQFWHKWfV7DHMlcgDlXtGhJB1sMeVS7irXZ2uti\nAzSFrvV66wl5WF0JMj4RgC6pr+UUzTLHXxtffy2/5s+pk42M7eQoGlkN/pQJh8Zg\nbkaPaQaFAgMBAAECggEAKnEe8aDRe8/5RnBTM4fvcJDfpofLfrgUjaaItmqEzOy7\nFaQSZ0TLbQdj9MwADnorekm63yTGxvJd/cjdW+Hu3u0rgUW7aR7LeHh3R50oGgHG\nwH8VqkKnfifdN+HJrcbh1La2bg525OViI1DRbV3atG+8+YNUZMkRu3pA0W8KrXKA\niHg2ff6D/uF/Wl+YjJldvsl0SyDDRyDSqUaS2j+glub3m1NjFxfxeaUAxBRz5VpL\nEPjxLfII7l5Zo3BvnJezgDwAFcWD7QDcOsvgjQHLq7zckJ8WBfnUMxQOJLsQQHGH\n75rwGUZlqOshoZrUuf0WsiLwHB6M6OecWk0E8qFnAQKBgQD7vejBh1XQsPxXolto\nW3yRv+bS9uQllGBckP8Kp5awClpB3oleYJfi4Ijqdl9YpQccGl2lgcQhFO05wFSR\nL9Sm1D4ZZdHvlsEAEVKJNgpHT3wQrk+WFPyIdNtANCEjH5FzG0lpRkDhMvQhoIEo\nBsUtGkgaihfqNgvWzb9Il323LQKBgQDSFVYyJ7jMm6LGPshFfSj7uS8TQioZKOUR\nbTdTJcA6Y6LUQna8B6RG03wd+bs4GZ8Ox35yZLoHVxpgJY6hw7nGeVf5cBUSkrct\nQticPEfhejdLSMJgVgTXSW+Ek4APd46kHmqUDY89zxm5M5Pfk4KZQVryoW+KzmDp\nmrgiBmajuQKBgQD0WfDcML4GVFSLx4cMM4kle+zUJ1tqcqxaDU/RirxEYbgcKaKS\n3hVv3dxoIMAJrh3JlHoDlYLHTaW6Icq0JoY17NveESwGcAEkTKwdjTvK3gchteCA\nYByDY1IR7sefbRvka78FFXESZj/7h+z16iRn1BPa1uHBr/Yr6QfbsVgQfQKBgQCM\nqQyVeFMba/mIkvC01iBiqpMCagKV5fO5v06TtWsHrT6QsA+fxd4QLfmkeFkKLt14\nn8nh/d8wmvll9r+RP+NbKFPnB0yUqvdKrr8pnJLkPVhYZ9b9eZq0Ks8oDTppILu4\n10S07H9D+y5V+lrAD5wZ0NB8M+rjHVt2DcnLvk1qwQKBgQDo0Mu9jEnvDVVJLVrL\n9ztBnCrjYtCMKzxtadhyG9RjjN1Zs3rYJSXE+B2DxTqnJssqqUuYjPu5NgZEv6M3\nVTuWypvQuygq9hbDnv0YUam1OY5bD5pXHoMmOvOfXwSk1vYQ2njbZIxDxUfCN9wa\nwazznNBSqEqXvXGPvm6DqY7zag==\n-----END PRIVATE KEY-----\n",
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
