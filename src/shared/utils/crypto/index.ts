import CryptoJS from "crypto-js";

const CryptoSecret = import.meta.env.VITE_APP_CRYPTO_SECRET;

export function encrypt(data: unknown) {
  const newData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(newData, CryptoSecret).toString();
}

export function decrypt(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  if (originalText) {
    return JSON.parse(originalText);
  }
  return null;
}
