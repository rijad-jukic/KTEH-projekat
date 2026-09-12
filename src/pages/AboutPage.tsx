import { Link } from 'react-router-dom'
import ourStoryImage from '../assets/images/nasaPrica-img.png'
import AskQuestionSection from '../components/AskQuestionSection'

function AboutPage() {
  return (
    <div>
      <section className="bg-dark text-white text-center">
        <div className="container col-lg-8 py-5">
          <h1 className="display-5 fw-bold mb-3">
            Upoznaj <span className="text-primary">naš rad</span> i našu ideju
          </h1>
          <p className="mb-4 opacity-75">
            UsvojiMe je mesto gde napušteni i nezbrinuti ljubimci dobijaju novu priliku
            za život, a ljudi pronalaze iskrenog prijatelja za svaki dan.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/ljubimci" className="btn btn-primary rounded-pill px-4">
              Galerija ljubimaca
            </Link>
            <Link to="/" className="btn btn-outline-light rounded-pill px-4">
              Početna stranica
            </Link>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container col-lg-8 text-center">
          <h2 className="h3 mb-4">Naša priča</h2>
          <img
            src={ourStoryImage}
            alt="Devojka sa psom u parku"
            className="img-fluid rounded-4 mb-4"
          />
          <p>
            Naša priča počinje iz jedne jednostavne, ali snažne misli koliko ljubavi
            zapravo postoji između ljudi koji žele ljubimca i ljubimaca koji čekaju
            dom. Videli smo previše napuštenih životinja na ulicama, u azilima ili
            privremenim smeštajima, dok su s druge strane ljudi govorili da bi rado
            usvojili, ali ne znaju odakle da počnu niti kome da veruju.
          </p>
          <p>
            Iz te potrebe nastao je UsvojiMe. Nismo želeli da napravimo samo još jednu
            platformu, već mesto koje će stvarno povezati ljude i životinje na
            jednostavan, siguran i human način. Ideja je bila da usvajanje prestane da
            bude komplikovan proces i da postane ono što bi uvek trebalo da bude
            početak jedne nove, lepe priče. Krenuli smo od razgovora sa volonterima,
            azilima i ljudima koji godinama brinu o napuštenim ljubimcima. Shvatili smo
            da najveći problem nije nedostatak želje da se pomogne, već nedostatak
            jedne jasne veze mesta gde su svi ljubimci vidljivi, a proces usvajanja
            transparentan i pouzdan.
          </p>
          <p className="mb-0">
            UsvojiMe je zato postao most između onih koji traže dom i onih koji ga
            nude. Svaki profil ljubimca, svaka priča i svako usvajanje za nas znači
            mnogo više od obične registracije — to je novi početak za jedno biće koje
            je dugo čekalo svoju priliku. Danas gradimo zajednicu u kojoj svako
            usvajanje predstavlja mali, ali važan čin dobrote koji menja dve sudbine
            istovremeno — i ljubimca koji odlazi u novi dom, i čoveka koji ga otvara.
          </p>
        </div>
      </section>

      <AskQuestionSection />
    </div>
  )
}

export default AboutPage
