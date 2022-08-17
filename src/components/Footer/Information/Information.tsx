import BTC from '../../../assets/images/footer/BTC-color.png';

import styles from './information.module.scss';

const Information = () => {
  return (
    <>
      <p className={styles.text}>
        BTCPLAY верит в технологию формирования будущего! Имея это в виду, мы
        имеем открытый исходный код и доказуемо честные игры. Мы также
        поддерживаем мгновенные депозиты и снятие биткоинов через наш узел
        Lightning и INURL. <br /> Не доверяйте. Проверьте это!
      </p>
      <div className={styles.well}>
        <span className={styles.icon}>
          <img src={BTC.src} alt="" />
        </span>
        <p>1BTC = $49399.98</p>
      </div>
    </>
  );
};

export default Information;
