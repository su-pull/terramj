import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const GlobalFont = (): JSX.Element => {
  return (
    <style jsx global>
      {`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}
    </style>
  );
};

export default GlobalFont;
