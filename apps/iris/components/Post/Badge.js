/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'; // eslint-disable-line no-unused-vars
import Link from 'next/link';
import { jsx } from 'theme-ui';

/**
 * TODO: 1. Add transitions, borderWidth, borderRadius to theme-ui
 */
const Badge = ({ url, name }) => {
  return (
    <Link
      passHref href={`/category/${url}`}>
      <a
        sx={{
          m: (theme) => `${theme.space.spacing3}`,
          bg: '#000',
          transition: '0.3s',
          '&:hover': {
            color: 'white',
            bg: 'violet',
          },
          display: 'inline-flex',
          px: '20px',
          height: '32px',
          lineHeight: '32px',
          fontSize: '.875rem',
          fontWeight: 500,
          position: 'relative',
          borderRadius: '16px',
          color: 'white',
        }}
      >
        {name}
      </a>
    </Link>
  );
};

export default Badge;
