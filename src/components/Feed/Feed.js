import { Link } from 'gatsby';
import moment from 'moment';
import React, { useContext } from 'react';
import { ThemeContext } from '../Layout/Layout';
import styles from './Feed.module.scss';

const Feed = ({ edges }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles['feed']}>
      {edges.map((edge) => (
        <div className={styles['feed__item']} key={edge.node.fields.slug}>
          <div className={styles['feed__item-meta']}>
            <time
              className={styles[`feed__item-meta-time-${theme}`]}
              dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}
            >
              {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
            </time>
            <span className={styles['feed__item-meta-divider']} />
            <span className={styles['feed__item-meta-category']}>
              <Link
                to={edge.node.fields.categorySlug}
                className={styles['feed__item-meta-category-link']}
              >
                {edge.node.frontmatter.category}
              </Link>
            </span>
          </div>
          <h2 className={styles['feed__item-title']}>
            <Link className={styles[`feed__item-title-link-${theme}`]} to={edge.node.fields.slug}>
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
          <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>
            Read
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Feed;
