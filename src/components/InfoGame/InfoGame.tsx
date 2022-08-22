import cn from 'classnames';
import styles from './infoGame.module.scss';

const InfoGame = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.name}>Azrabah Wishes</h2>
        <p className={styles.text}>
          Join Nidal as he embarks on a quest for riches and the beautiful
          Jaslyn, in a high-tech golden desert megalopolis, complete with
          skateboarding tigers, driving monkeys and a magic lamp containing
          Jinni!
        </p>
        <div className={cn('button button-border', styles.button)}>Detail</div>
      </div>
    </div>
  );
};

export default InfoGame;
