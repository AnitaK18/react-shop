import { Link } from "react-router";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
       <h3>Glow</h3>
        <span>Твоя краса — наша турбота</span>
        <p>
          Ми зібрали для вас найкращі засоби для догляду за собою та вашим
          домом: від натуральної косметики до ефективної побутової хімії.
          Якість, безпека та доступність — наші головні пріоритети.
        </p>
        <Link to="#products" className="btn">
          До послуг
        </Link>
      </div>
    </section>
  );
};

export default Home;
