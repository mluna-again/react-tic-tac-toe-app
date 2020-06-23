import React from 'react';
import UsernameFormPrompt from 'components/UsernameFormPrompt';
import useInputForm from 'hooks/useInputForm';
import classes from 'components/HomePage.module.css';
import { content, container, btn } from 'shared/styles.module.css';

export default function SignIn() {
  const [username, setUsername] = useInputForm();

  return (
    <>
      {/* if username is not defined then render UsernameFormPrompt */}
      {username || <UsernameFormPrompt updateInput={setUsername} />}
      <div className={container}>
        <div className={content}>
          <h1 className={classes.title}>Welcome, {username}</h1>
          <div className={classes['btn-container']}>
            <button className={`${btn} ${classes['homepage-btn']}`}>New game</button>
            <button className={`${btn} ${classes['homepage-btn']}`}>Join game</button>
          </div>
        </div>
      </div>
    </>
  );
}
