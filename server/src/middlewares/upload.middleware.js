import multer from 'multer';
import { upload } from '../configs/uploadConfig.js';

const uploadImage = (fieldName) => (req, res, next) => {
  const uploadSingle = upload.single(fieldName);

  uploadSingle(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ msg: 'Error en la transferencia' });
    } else if (err) {
      return res.status(500).json({ msg: 'Error interno del servidor' });
    }

    if (!req.file) {
      return res.status(400).json({ msg: 'No se ha subido archivo' });
    }

    req.body[fieldName] = req.file.filename;

    next();
  });
};

export { uploadImage };
