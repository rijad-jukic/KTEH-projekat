# UsvojiMe

Veb aplikacija za usvajanje kućnih ljubimaca — seminarski rad iz predmeta Klijentske veb tehnologije i skriptni jezici.

Korisnici mogu da pregledaju ljubimce dostupne za usvajanje, filtriraju ih po vrsti,
veličini i polu, sačuvaju omiljene, pogledaju detaljnu stranicu svakog ljubimca (uz
podatke o rasi preuzete uživo sa eksternog API-ja) i pošalju upit za usvajanje.
Aplikacija ima i mock registraciju/prijavu korisnika i kontakt formu.

## Tehnologije

- **React 19 + TypeScript** — biblioteka i tipizacija
- **Vite** — razvojni server i build alat
- **React Router (react-router-dom)** — rutiranje kroz aplikaciju
- **Bootstrap 5**, prilagođen preko Sass promenljivih (`src/styles/theme.scss`) —
  brend paleta (tamno zelena, narandžasta, krem), zaobljene komponente
- **TheDogAPI / TheCatAPI** — podaci o rasi ljubimca (temperament, životni vek, poreklo)

## Pokretanje projekta lokalno

Preduslov: instaliran [Node.js](https://nodejs.org/) (v18+) i npm.

```bash
# 1. Kloniraj repozitorijum
git clone https://github.com/rijad-jukic/KTEH-projekat.git
cd KTEH-projekat

# 2. Instaliraj zavisnosti
npm install

# 3. Pokreni razvojni server
npm run dev
```

Aplikacija će biti dostupna na adresi koju ispiše terminal (podrazumevano `http://localhost:5173`).

Za produkcioni build:

```bash
npm run build
npm run preview
```

### API ključevi (opciono)

Stranica ljubimca prikazuje dodatne podatke o rasi (temperament, životni vek, poreklo)
preuzete sa [TheDogAPI](https://thedogapi.com/) i [TheCatAPI](https://thecatapi.com/).
Ovi servisi zahtevaju besplatan API ključ (trenutna registracija, bez kartice):

1. Napravi `.env.local` fajl u korenu projekta (na osnovu `.env.example`).
2. Registruj se na https://thedogapi.com/ i https://thecatapi.com/ i upiši dobijene ključeve:

```
VITE_DOG_API_KEY=tvoj_kljuc
VITE_CAT_API_KEY=tvoj_kljuc
```

Bez ključeva aplikacija i dalje radi normalno — sekcija "O rasi" samo prikazuje
napomenu da ključ nedostaje, umesto podataka.

## Funkcionalnosti

**Početna stranica** — hero sekcija sa slikom, sekcija "Upoznajte naš rad", kratki
pregled ljubimaca i kontakt forma "Postavi pitanje".

**Galerija ljubimaca** (`/ljubimci`) — filtriranje po vrsti (pas/mačka), veličini i
polu, dodatni filter "prikaži samo omiljene", i paginacija rezultata.

**Detalji ljubimca** (`/ljubimci/:id`) — svi podaci o ljubimcu (rasa, pol, godine,
veličina, lokacija, opis), dodavanje u omiljene, uživo preuzeti podaci o rasi sa
TheDogAPI/TheCatAPI, i forma za slanje upita za usvajanje (validacija imena, email
adrese i poruke) sa modalom potvrde nakon uspešnog slanja.

**Omiljeni ljubimci** — globalno stanje preko Context API-ja (dostupno na kartici,
stranici detalja i u galeriji), sa brojačem u navigaciji i čuvanjem u localStorage.

**O nama** (`/o-nama`) — hero sekcija, "Naša priča" i kontakt forma.

**Nalog** (`/login`, `/register`, `/profil`) — mock registracija i prijava (bez
pravog servera; podaci se čuvaju u localStorage), stranica profila sa prikazom
podataka ulogovanog korisnika i odjavom.

**Kontakt forma "Postavi pitanje"** — reusable komponenta (koristi se na Početnoj i
na O nama), čuva poruke u localStorage i prikazuje modal potvrde.

## Struktura projekta

```
src/
├── assets/       slike i statički resursi
├── components/   reusable komponente (Navbar, Footer, PetCard, Pagination, FormField, Modal, AskQuestionSection)
├── context/      Context API (FavoritesContext, AuthContext)
├── data/         mock podaci o ljubimcima
├── hooks/        custom hook-ovi (useFavorites, useAuth, useScrollToHash)
├── models/       klase (PetCatalog, AdoptionRequestStore, UserStore, ContactMessageStore)
├── pages/        stranice povezane sa rutama
├── services/     pozivi eksternih API-ja (breedApi)
├── styles/       Sass tema (Bootstrap override)
└── types/        TypeScript interfejsi (Pet, AdoptionRequest, User, BreedInfo, ContactMessage)
```
