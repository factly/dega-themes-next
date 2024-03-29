/** @jsx jsx */
/** @jsxRuntime classic */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */

import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line no-unused-vars
import Link from 'next/link';
import _ from 'lodash';
import parseDate from '../src/utils/parseDate';

/**
 * TODO: Change the data structure of props
 * TODO: Make images more responsive
 * TODO: Make most of the items optional
 * TODO: Possibly increase padding
 * TODO: Probably change the name of the component to "Card"
 * TODO: Refactor to decrease repetition of code
 */


export const StoryCard = ({ storyData, cardStyle = 'default' }) => (
  <>
    {cardStyle === 'default' && (
      <article className="js-card c-card c-card-- c-card-- post featured">
        <Link href={`/${storyData.slug}/`} className="c-card__media">
          <img
            className="c-card__image"
            data-src={storyData.medium?.url?.proxy}
            srcset={`${storyData.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
            sizes="(max-width: 1200px) 100vw, 1200px"
            src={`${storyData.medium?.url?.proxy}?rs:fill/w:1200`}
            alt={storyData.title}
          />
        </Link>

        <div className="c-card__content">
          <div className="c-card__tag c-tag">
            {storyData.categories.length > 0 && (
              <Link href={`/category/${storyData.categories[0].slug}/`}>
                {storyData.categories[0].name}
              </Link>
            )}
          </div>

          <h3 className="c-card__headline">
            <Link href={`/${storyData.slug}/`} className="c-card__link">
              {storyData.title}
            </Link>
          </h3>

          <div className="c-card__meta">
            <div className="c-byline c-card__byline">
              {storyData.users?.length > 0 && (
                <>
                  <Link key={storyData.id} href={`/author/${storyData.users[0].slug}`}>
                    {storyData.users[0].display_name}
                  </Link>
                  <span className="u-hidden u-hidden">,&nbsp;</span>
                  <span className="u-hidden ">&nbsp;and&nbsp;</span>
                </>
              )}
            </div>
            <time className="c-timestamp c-card__timestamp" dateTime={storyData.published_at}>
              {parseDate(storyData.published_at)}
            </time>
          </div>
        </div>
      </article>
    )}
    {cardStyle === 'large' && (
      <article className="js-card c-card c-card--large c-card--center post  featured">
        <Link href={`/${storyData.slug}/`} className="c-card__media">
          <img
            className="c-card__image"
            data-src={storyData.medium?.url?.proxy}
            srcset={`${storyData.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
            sizes="(max-width: 1200px) 100vw, 1200px"
            src={`${storyData.medium?.url?.proxy}?rs:fill/w:1200`}
            alt={storyData.title}
          />
        </Link>

        <div className="c-card__content">
          <div className="c-card__tag c-tag">
            {storyData.categories.length > 0 && (
              <Link href={`/category/${storyData.categories[0].slug}/`}>
                {storyData.categories[0].name}
              </Link>
            )}
          </div>

          <h3 className="c-card__headline">
            <Link href={`/${storyData.slug}/`} className="c-card__link">
              {storyData.title}
            </Link>
          </h3>

          <p className="c-card__standfirst">{storyData.excerpt}</p>

          <div className="c-card__meta">
            <div className="c-byline c-card__byline">
              <span className="u-hidden ">,&nbsp;</span>
              <span className="u-hidden ">&nbsp;and&nbsp;</span>
              <span className=" u-hidden">,&nbsp;</span>
              {/* <span className="u-hidden u-block">&nbsp;and&nbsp;</span> */}

              {storyData.users.length > 0 && (
                <Link href={`/author/${storyData.users[0].slug}/`}>
                  {storyData.users[0].display_name}
                </Link>
              )}
            </div>
            <time className="c-timestamp c-card__timestamp" dateTime={storyData.published_at}>
              {parseDate(storyData.published_at)}
            </time>
          </div>
        </div>
      </article>
    )}
    {cardStyle === 'small' && (
      <article className="c-teaser c-teaser--small post tag-opinion tag-hash-editors-picks">
        <div className="c-teaser__content">
          <div className="c-teaser__tag c-tag">
            <Link href={`/category/${storyData.categories[0].slug}/`}>
              {storyData.categories[0].name}
            </Link>
          </div>

          <h3 className="c-teaser__headline">
            <Link href={`/${storyData.slug}/`} className="c-teaser__link">
              {storyData.title}
            </Link>
          </h3>

          <div className="c-teaser__meta">
            <div className="c-byline c-teaser__byline">
              <span className="u-hidden u-hidden">,&nbsp;</span>
              <span className="u-hidden ">&nbsp;and&nbsp;</span>

              {storyData.users.length > 0 && (
                <Link href={`/author/${storyData.users[0].slug}/`}>
                  {storyData.users[0].display_name}
                </Link>
              )}
            </div>
            <time className="c-timestamp c-teaser__timestamp" dateTime={storyData.published_at}>
              {parseDate(storyData.published_at)}
            </time>{' '}
          </div>
        </div>

        <Link href={`/${storyData.slug}/`} className="c-teaser__media">
          <img
            className="c-teaser__image"
            data-src={storyData.medium?.url?.proxy}
            srcset={`${storyData.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${storyData.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
            sizes="(max-width: 1200px) 100vw, 1200px"
            src={`${storyData.medium?.url?.proxy}?rs:fill/w:1200`}
            alt={storyData.title}
          />
        </Link>
      </article>
    )}
  </>
);

export default StoryCard;
