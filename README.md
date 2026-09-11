# Usvoji ljubimca

Veb aplikacija za usvajanje kućnih ljubimaca — seminarski rad iz predmeta Klijentske tehnologije.

Korisnici mogu da pregledaju listu ljubimaca dostupnih za usvajanje, filtriraju ih po kategorijama, pogledaju detaljnu stranicu svakog ljubimca i pošalju upit za usvajanje.

## Tehnologije

- React 19 + TypeScript
- Vite
- React Router (react-router-dom)
- Bootstrap 5 (prilagođen preko Sass promenljivih — vidi `src/styles/theme.scss`)
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

- Navigacija kroz aplikaciju pomoću `react-router-dom` (Navbar sa isticanjem aktivne rute, ruta sa parametrom za detalje ljubimca, 404 stranica)
- Galerija ljubimaca sa filterima po vrsti, veličini i polu, i paginacijom rezultata
- Brend tema ("UsvojiMe") u tamno zelenoj, narandžastoj i krem boji, primenjena preko Bootstrap Sass promenljivih
- Detaljna stranica ljubimca sa svim podacima (rasa, pol, godine, veličina, lokacija, opis) i automatskim preusmeravanjem na galeriju ako traženi ljubimac ne postoji
- Forma za upit za usvajanje sa validacijom (ime, email, poruka), čuvanjem upita u localStorage i modalom potvrde uspešnog slanja
- Omiljeni ljubimci (globalno stanje preko Context API-ja) — dodavanje/uklanjanje na kartici i stranici detalja, filter "samo omiljeni" u galeriji, brojač u navigaciji, sve sa čuvanjem u localStorage
- Navigacija sa logom brenda, dugmetom "Usvoji Ljubimca" koje vodi do pregleda ljubimaca na Početnoj stranici (glatko skrolovanje na ciljanu sekciju)

## Status razvoja

- [x] Faza 1 — Inicijalizacija projekta
- [x] Faza 2 — Layout i routing
- [x] Faza 3 — Modeli, interfejsi i mock podaci
- [x] Faza 4 — Galerija sa filterima i paginacijom
- [x] Faza 5 — Detaljna stranica ljubimca
- [x] Faza 6 — Forma za usvajanje i potvrda
- [x] Faza 7 — Global state (Context API)
- [ ] Faza 8 — Eksterni API-ji
- [ ] Faza 9 — Dodatne stranice i funkcionalnosti
- [ ] Faza 10 — Stilizacija i responzivnost
- [ ] Faza 11 — Finalna provera i dokumentacija
