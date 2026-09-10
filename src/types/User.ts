// Aplikacija nema pravi backend, pa se nalozi drže u localStorage-u
// isključivo radi demonstracije login/register toka (Faza 9) — lozinka se
// zato čuva kao običan tekst, što ne bi bilo prihvatljivo uz pravi server.
export interface User {
  username: string
  email: string
  password: string
}
