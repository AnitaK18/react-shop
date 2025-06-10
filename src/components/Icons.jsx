import Icon1 from '../assets/images/icon-1.png';
import Icon2 from '../assets/images/icon-2.png';
import Icon3 from '../assets/images/icon-3.png';
import Icon4 from '../assets/images/icon-4.png';

const Icons = () => {
  return (
    <section className="icons-container">
      <div className="icons">
        <img src={Icon1} alt="icon" />
        <div>
          <h3>Швидке обслуговування</h3>
          <span>Обирай зручний час та не чекай в черзі</span>
        </div>
      </div>

      <div className="icons">
        <img src={Icon2} alt="icon" />
        <div>
          <h3>Якісні засоби</h3>
          <span>Ми використовуємо лише перевірені бренди</span>
        </div>
      </div>

      <div className="icons">
        <img src={Icon3} alt="icon" />
        <div>
          <h3>Досвідчені майстри</h3>
          <span>Наша команда — справжні професіонали</span>
        </div>
      </div>

      <div className="icons">
        <img src={Icon4} alt="icon" />
        <div>
          <h3>Приємна атмосфера</h3>
          <span>Затишок, стиль і гарний настрій гарантовано</span>
        </div>
      </div>
    </section>
  );
};

export default Icons;
