/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import StoryCard from './StoryCard';

const postGrid = ({ type, posts, item }) => {
  const filteredPosts = posts.filter((post) => post.published_date !== null);

  return (
    <section>
      <div className="container wrapper">
        <div class="section hero">
          <div class="card tag-card p-lg is-hero" style={{ borderTop: '3px solid #D91C38', gap: '32px' }}>
            <div class="tag-card__media flex">
              {item.medium?.url?.proxy ? (
                <img sx={{ margin: 'auto' }}
                  class="tag-card__img lazyautosizes lazyloaded"
                  srcset={`${item.medium?.url?.proxy} 100w,
                  ${item.medium?.url?.proxy} 300w`}
                  src={item.medium?.url?.proxy}
                  alt={item.name}
                  sizes="120px"
                />
              ) : (
                <div
                  sx={{
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    mx: 'auto',
                    padding: (theme) => `${theme.space.spacing8}`,
                    background: '#000',
                    mb: '1rem',
                  }}
                />
              )}

            </div>

            <div class="tag-card__content text-acc-1">
              <h1 class="tag-card__title m-b-sm">{item.name}</h1>
              <div class="tag-card__descr text-acc-3">{item.description}</div>
              <div sx={{ fontSize: '16px' }} class="tag-card__count m-t fw-600">{posts.length} posts</div>
            </div>
          </div>
        </div>
        <div className="section main-content">
          {filteredPosts.length > 0 ? (
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', null, 'repeat( 2, 1fr )', 'repeat( 3, 1fr)'],
                //px: [null, null, (theme) => `${theme.space.spacing6}`],
                mt: (theme) => `${theme.space.spacing7}`,
                gridGap: (theme) => `${theme.space.spacing7}`,
              }}
            >
              {filteredPosts.map((item, index) => (
                <StoryCard key={index} type="basic" post={item} />
              ))}
            </div>
          ) : (
            <h2 sx={{ textAlign: 'center' }}>No posts found</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default postGrid;
