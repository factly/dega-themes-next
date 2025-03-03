/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import parseDate from '../src/utils/parseDate';
import { jsx } from 'theme-ui';
import Link from 'next/link';
import Image from 'next/image';

const StoryCard = ({ post, type = 'basic' }) => {
  return (
    <>
      {(type === 'featured' || type === 'basic') && (
        <article className="post-card flex">
          <Link href={`/${post.slug}/`} className="post-img-wrap">
            <img
              loading="lazy"
              srcset={`${post.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${post.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${post.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${post.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${post.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
              sizes="(max-width: 1200px) 100vw, 1200px"
              src={`${post.medium?.url?.proxy}?rs:fill/w:1200`}
              alt={post.title}
            />
          </Link>
          <div className="post-info-wrap">
            <div className="tag-wrap">
              {post.categories.length > 0 && (
                <Link href={`/category/${post.categories[0].slug}/`}>
                  {post.categories[0].name}
                </Link>
              )}
            </div>
            <h3 sx={{ fontSize: '1.25rem', mb: '1rem' }} className="post-title">
              <Link href={`/${post.slug}/`}>{post.title}</Link>
            </h3>
            <div className="post-excerpt">
              <p className="text-base"> {post.excerpt} </p>
            </div>
            <div className="post-meta-wrap flex">
              <div className="author-avatar-wrap">
                {post.users.length > 0 && (
                  <Link
                    href={`/author/${post.users[0].slug}/`}
                    className="author-image"
                  >
                    <img
                      src={post.users[0].medium?.url?.proxy}
                      loading="lazy"
                      alt={post.users[0].display_name}
                    />
                  </Link>
                )}
              </div>
              <div className="meta-info">
                <div className="author-names">
                  {post.users.length > 0 && (
                    <Link href={`/author/${post.users[0].slug}/`}>
                      {post.users[0].display_name}
                    </Link>
                  )}
                </div>
                <div className="date-time">
                  <time
                    className="post-date"
                    dateTime={parseDate(post.published_at)}
                  >
                    {parseDate(post.published_at)}
                  </time>
                  {/* <span className="read-time">3 min read</span> */}
                </div>
              </div>
            </div>{' '}
          </div>
        </article>
      )}

      {type === 'small' && (
        <article className="post-card post-small flex">
          <Link href={`/${post.slug}/`} className="post-img-wrap">
            <img
              loading="lazy"
              src={post.medium?.url?.proxy}
              alt={post.title}
            />
          </Link>
          <div className="post-info-wrap">
            <div className="tag-wrap ">
              {post.categories.length > 0 && (
                <Link href={`/category/${post.categories[0].slug}/`}>
                  {post.categories[0].name}
                </Link>
              )}
            </div>
            <h2 className="h4 post-title">
              <Link href={`/${post.slug}/`} className="text-base">
                {post.title}
              </Link>
            </h2>
          </div>
        </article>
      )}
    </>
  );
};

export default StoryCard;

//post.categories[0].name
