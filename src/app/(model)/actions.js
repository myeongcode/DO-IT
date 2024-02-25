'use server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import crypto from 'crypto';
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString('hex');

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const acceptedTypes = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'application/pdf',
];

const maxFileSize = 1024 * 1024 * 50; //50MB

export async function getSignedURL(type, size, checksum, applicantName) {
  if (!acceptedTypes.includes(type)) {
    return { failure: 'Invalid file type' };
  }

  if (size > maxFileSize) {
    return { failure: 'File too large' };
  }

  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: applicantName + '-' + generateFileName(),
    ContentType: type,
    ContentLength: size,
    ChecksumSHA256: checksum,
  });

  const signedURL = await getSignedUrl(s3, putObjectCommand, {
    expiresIn: 60,
  });

  return { success: { url: signedURL } };
}
