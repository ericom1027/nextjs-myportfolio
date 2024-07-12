import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

const DownloadResume = () => {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/Download-cv.pdf';
    link.download = 'emd-cv.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.a
      id="btn-download"
      variants={slideInFromLeft(1)}
      className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      onClick={downloadFile}
    >
      Download CV
    </motion.a>
  );
};

export default DownloadResume;

