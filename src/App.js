import raamat from './kuu-raamat.png';
import './Raamat.css';

function App() {
  return (
    <div className="raamat">
      <header className="pealkiri">
        <h1>Apollo kuu raamat:</h1>
      </header>
      <div className="raamat-data">
        <div className="kirjeldus">
        <p><strong>Pealkiri:</strong> Kuidas aidata lapsi ja noori vaimse tervise probleemide korral</p>
        <p><strong>Autor:</strong> Dr Pier Bryden, Dr Peter Szatmari</p>
        <p><strong>Ilmumise aasta:</strong> 2024</p>
        <p><strong>Kirjeldus:</strong> Selles raamatus jagavad tunnustatud ja kogenud Kanada lastepsühhiaatrid oma teadmisi ja kogemusi, mitte ainult maailma ühe juhtiva lastehaigla psühhiaatritena, vaid ka lapsevanematena. Mis meie lastega õieti toimub ja kuidas vaimse tervise ohumärke juba varakult tuvastada ning lapsi aidata, on selle raamatu peamine eesmärk. Raamatus kirjeldatud lugudes tuginevad autorid oma ühistele arstialastele</p>
        </div>
        <img src={raamat} className="raamat-image" alt="Apollo kuu raamat" />
      </div>
    </div>
  );
}

export default App;
