import styles from './Home.module.css';
//podcasts page
function Podcasts() {
  return (
    <>
      <div className="row">
        <div className="row">
          <div className="col-2"></div>
          <div className="col align-self-center text-start">
            <h1 className={styles.h1}>Podcasts</h1>
            <h4 className={styles.h4}>(just one podcast actually)</h4>
            <br />
            <br />
            <div className={styles['move']}>
              <p>This podcast is called Baconsale. Give it a listen:</p>
              <a href="https://baconsale.com/">Listen here</a>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Podcasts;
