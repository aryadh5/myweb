import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Footer = (): JSX.Element => {
  return (
    <footer className="mt-4 text-base">
      <hr className="border-gray-300 mb-2" />
      <span className="flex float-right space-x-4">
        {/* GitHub Icon */}
        <Link passHref href="https://github.com/aryadh5">
          <FaGithub
            size={24}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          />
        </Link>

        {/* LinkedIn Icon */}
        <Link passHref href="https://www.linkedin.com/in/aryadh/">
          <FaLinkedin
            size={24}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          />
        </Link>

        {/* WhatsApp Icon */}
        <Link passHref href="https://wa.me/6281386009315">
          <FaWhatsapp
            size={24}
            className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"
          />
        </Link>
      </span>
    </footer>
  );
};
