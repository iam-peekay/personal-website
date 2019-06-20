import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { ThemeContext } from '../Layout/Layout';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import styles from './Post.module.scss';
import Tags from './Tags';

const Post = ({ post }) => {
  const { tags, title, date } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  const theme = useContext(ThemeContext);

  return (
    <div className={styles['post']}>
      <Link className={styles[`post__home-button-${theme}`]} to="/">
        All Articles
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={post.fields.slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
