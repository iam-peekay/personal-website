import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Layout/Layout';
import styles from './Tags.module.scss';

const Tags = ({ tags, tagSlugs }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles['tags']}>
      <ul className={styles['tags__list']}>
        {tagSlugs.map((slug, i) => (
          <li className={styles['tags__list-item']} key={tags[i]}>
            <Link to={slug} className={styles[`tags__list-item-link-${theme}`]}>
              {tags[i]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
