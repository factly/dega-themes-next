/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import { jsx } from 'theme-ui';
import Post from '../components/Post';
import { client } from '../store/client';
import gql from 'graphql-tag';
import StoryCard from '../components/StoryCard';

/**
 * TODO: Add loader for infinite-scroller
 */
const PostDetails = ({ post, posts, recentPosts }) => {
  return (
    <section>
      {/* <Seo
        title={post.title}
        description={post.excerpt}
        image={`${post.medium?.url?.proxy}`}
        canonical={`${space.site_address}/${post.slug}`}
        type="article"
      /> */}
      <div className="container wrapper">
        <Post post={post} />
      </div>
      <div sx={{ px: '2rem', display: 'flex', }}>
        <h2 sx={{ fontSize: '24px' }}>You may also like</h2>
      </div>
      <div sx={{ p: '2rem' }} className="grid post-feed js-post-feed">
        {recentPosts.nodes.slice(0, 3).map((post) => (
          <StoryCard post={post} />
        ))}{' '}
      </div>
    </section>
  );
};

export default PostDetails;


export async function getServerSideProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query PostQuery($slug: String) {
        post(slug: $slug, include_pages: true) {
          published_date
          is_page
          description
          description_html
          excerpt
          id
          schemas
          slug
          status
          subtitle
          title
          updated_at
          users {
            email
            first_name
            last_name
            display_name
            slug
            id
          }
          tags {
            id
            name
            slug
            description
          }
          medium {
            alt_text
            id
            url
            dimensions
          }
          format {
            name
            slug
            id
            description
          }
          claims {
            checked_date
            claim_date
            claim_sources
            claimant {
              description
              id
              name
              slug
              tag_line
            }
            description
            id
            fact
            review_sources
            slug
            claim
            rating {
              description
              id
              name
              numeric_value
              slug
              medium {
                alt_text
                id
                url
                dimensions
              }
            }
          }
          categories {
            description
            created_at
            id
            name
            slug
            medium {
              alt_text
              id
              url
              dimensions
            }
          }
        }
        posts {
          nodes {
            published_date
            description
            excerpt
            id
            slug
            status
            subtitle
            title
            updated_at
            users {
              email
              first_name
              last_name
              display_name
              slug
              id
            }
            tags {
              id
              name
              slug
              description
            }
            categories {
              id
              name
              slug
              description
            }
            medium {
              alt_text
              id
              url
              dimensions
            }
            format {
              name
              slug
              id
              description
            }
          }
        }
        recentPosts:posts{
          nodes{
          id
          title
          slug
          published_date
          excerpt
          users {
            email
            first_name
            last_name
            display_name
            slug
            id
          }
          medium{
          url
          }
         }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  if (!data || !data.post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      recentPosts: data.recentPosts,
      post: data.post,
      posts: data.posts,
    },
  };
}
