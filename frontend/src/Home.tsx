import styles from './Home.module.css';

//homepage
function Home() {
  return (
    <>
      <div className="row">
        <div className="row">
          <div className="col-4">
            <div className={styles['change-me']}>
              <img
                src={process.env.PUBLIC_URL + '/JoelHiltonHeadshot (1).jpg'}
                alt="Joel Hilton"
              />
            </div>
          </div>
          <div className="col align-self-center text-start">
            <h1 className={styles.h1}>Joel's Movie Website</h1>
            <h4>
              (aka Mission <s>13</s> 14)
            </h4>
            <br />
            <br />
            <div className={styles['move']}>
              <p>
                This website is the home of Joel Hilton's movie collection
                database, which contains hundreds of movies curated by the Joel
                Hilton himself. There's also a link to a podcast called
                Baconsale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
