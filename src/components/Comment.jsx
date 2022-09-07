import { HandsClapping, ThumbsUp, Trash, TrashSimple } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeCount() {
    setLikeCount(state => {
      return (state += 1);
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/luise.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Louise Ferrer</strong>
              <time title="25 de Agosto às 21:42h" dateTime="2022-05-11 08:13:30">
                Published 2 hours ago.
              </time>
            </div>
            <div onClick={handleDeleteComment} className={styles.trash}>
              <TrashSimple size={20} />
            </div>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <div className={styles.icon_comment}>
              <HandsClapping size={24} />
            </div>
            <span className={styles.span_white}>Like this Post</span>
            <span className={styles.icon_qtd}>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
