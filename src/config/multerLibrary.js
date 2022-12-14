/* eslint-disable @typescript-eslint/no-explicit-any */
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const { S3Client } = require("@aws-sdk/client-s3");
const multerS3 = require("multer-s3");

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "tmp/uploads"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, file.originalname);

        file.key = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, file.key);
      });
    },
  }),

  s3: multerS3({
    s3: new S3Client({
      region: "sa-east-1",
      credentials: {
        accessKeyId: "AKIAX4ZAXHQSSU45LJGB",
        secretAccessKey: "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",
      },
    }),
    bucket: "avatars-profile-4traders",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, file.originalname);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
};

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp"),
  storage: storageTypes["s3"],

  limits: {
    fileSize: 40 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
      "application/pdf",
      "application/zip",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
