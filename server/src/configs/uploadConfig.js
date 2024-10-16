import multer from 'multer';
import path from 'node:path';
import crypto from 'node:crypto';

// configurar almacenamiento - storage

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'src/uploads/');
  },
  filename: (_req, file, cb) => {
    const fileName =
      crypto.randomUUID().toString() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

// configrar tamaño de transferencia de archivos - limits

const maxMb = 20;
const limits = {
  fileSize: 1024 * 1024 * maxMb,
};

// configurar los filtros de extensión - filters

const fileFilter = (req, file, cb) => {
  // jpeg jpg png gif webp

  const fileTypes = /jpeg|jpg|png|gif|web/;

  const allowExtname = fileTypes.test(path.extname(file.originalname));

  if (!allowExtname) {
    return cb(new Error('Extensión invalida'));
  }

  return cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  limits,
});
