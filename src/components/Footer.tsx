function Footer() {
  const godina = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light-emphasis mt-auto py-4">
      <div className="container text-center small">
        <p className="mb-1">
          © {godina} Usvoji ljubimca 
        </p>
        <p className="mb-0">Svi prikazani ljubimci čekaju svoj novi dom. 🐶🐱</p>
      </div>
    </footer>
  )
}

export default Footer
