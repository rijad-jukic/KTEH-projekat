# Usvoji ljubimca

Veb aplikacija za usvajanje kućnih ljubimaca — seminarski rad iz predmeta Klijentske tehnologije.

Korisnici mogu da pregledaju listu ljubimaca dostupnih za usvajanje, filtriraju ih po kategorijama, pogledaju detaljnu stranicu svakog ljubimca i pošalju upit za usvajanje.

## Tehnologije

- React 19 + TypeScript
- Vite
- React Router (react-router-dom)
- Bootstrap 5
- TheDogAPI / TheCatAPI (eksterni podaci o rasama)

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

## Funkcionalnosti

_Ova sekcija se dopunjava kroz faze razvoja projekta._

## Status razvoja

- [x] Faza 1 — Inicijalizacija projekta
- [ ] Faza 2 — Layout i routing
- [ ] Faza 3 — Modeli, interfejsi i mock podaci
- [ ] Faza 4 — Galerija sa filterima i paginacijom
- [ ] Faza 5 — Detaljna stranica ljubimca
- [ ] Faza 6 — Forma za usvajanje i potvrda
- [ ] Faza 7 — Global state (Context API)
- [ ] Faza 8 — Eksterni API-ji
- [ ] Faza 9 — Dodatne stranice i funkcionalnosti
- [ ] Faza 10 — Stilizacija i responzivnost
- [ ] Faza 11 — Finalna provera i dokumentacija
