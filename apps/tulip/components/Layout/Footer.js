/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Footer = () => (
  <footer
    sx={{
      width: '100%',
      py: '2rem',
      bg: '#eff8fa',
    }}
  >
    <h2 sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', mb: '1rem' }}>
      {' '}
      <Link
        href="/"
        sx={{
          display: 'flex',
          mx: 'auto',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: '2.75rem',
          lineHeight: 1,
          fontWeight: 'bold',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        TULIP
      </Link>
    </h2>
    <p sx={{ textAlign: 'center' }}>
      © 2022 Dodo Theme - Created and maintained by Factly Media and Research
    </p>
  </footer>
);

export default Footer;


