/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import StoryCard from './StoryCard';

const PostGrid = ({ type, posts, formats, item, header, useSlug = true }) => {
  const slug = useSlug ? item.slug : item.id;
  const filteredPosts = posts.filter((post) => post.published_date !== null);
  const defaultHeader = (item) => (
    <header>
      <h1
        sx={{
          fontSize: '48px',
          mb: (theme) => `${theme.space.spacing5}`,
          textTransform: 'capitalize',
          px: (theme) => theme.space.layout2,
        }}
      >
        {item.name}
      </h1>
      {item?.description && <p>{item.description}</p>}
    </header>
  );
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        justifyContent: 'space-between',
        borderBottomWidth: [null, null, null, 'px'],
      }}
    >
      <div
        className="main-content"
        sx={{ order: [2, null, null, null, 1], maxWidth: 1200, width: '100%', mx: 'auto' }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pb: (theme) => `${theme.space.spacing6}`,
          }}
        >
          {header ? header(item) : defaultHeader(item)}
          {filteredPosts.length > 0 ? (
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', null, 'repeat( 2, 1fr )', 'repeat(6, minmax(0, 1fr))'],
                px: ['2rem', null, '2rem'],
                //mt: (theme) => `${theme.space.spacing7}`,
                gridGap: (theme) => `${theme.space.spacing7}`,
              }}
            >
              {filteredPosts.map((item, index) => (
                <StoryCard
                  key={index}
                  type="basic"
                  post={item}
                  excerpt={item.format.slug !== 'fact-check'}
                />
              ))}
            </div>
          ) : (
            <h2 sx={{ textAlign: 'center' }}>No posts found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostGrid;
