import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  // UseStates // Managing Comments

  const [comments, setComments] = useState(['Nice job, Kelson! Congrats! 🔥']);
  const [newCommentText, setNewCommentText] = useState('');

  const handleCreateNewComment = () => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  const handleNewCommentChange = () => {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  };

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Hey-o! This field is required, please. 😄');
  }

  const deleteComment = commentToDelete => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  };

  const isNewCommentDisabled = newCommentText.length === 0;

  // Managing time and date.

  const publishedTimeFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  //Component Structure

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.userName}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedTimeFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Leave your feedback.</strong>

          <textarea required onInvalid={handleNewCommentInvalid} onChange={handleNewCommentChange} value={newCommentText} name="comment" placeholder="Tell us what you think...💭" />

          <footer>
            <button type="submit" disabled={isNewCommentDisabled}>
              Publish
            </button>
          </footer>
        </form>

        <div className={styles.commenList}>
          {comments.map(comment => {
            return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />;
          })}
        </div>
      </div>
    </article>
  );
}
