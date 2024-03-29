import React from 'react';
import StoryCard from '../StoryCard';
import Link from 'next/link';

const FeaturedCategory = ({ category, posts }) => {
  return (
    <div className="c-section c-section--politics">
      <div className="l-grid">
        <div className="c-section-heading">
          <h2 className="c-section-heading__title">
            <Link href={`/category/${category.slug}/`}>{category.name}</Link>
          </h2>
        </div>
      </div>

      <div className="l-grid l-grid--4-columns">
        {posts.slice(0, 4).map((post) => (
          <StoryCard storyData={post} />
        ))}{' '}
      </div>
    </div>
  );
};

export default FeaturedCategory;
