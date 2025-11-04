import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Comunidad no encontrada / Community not found</h1>
        <p className="text-foreground/70 mb-8">
          La comunidad que buscas no existe. / The community you're looking for doesn't exist.
        </p>
        <Link
          href="/communities"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
        >
          Volver a Comunidades / Back to Communities
        </Link>
      </div>
    </main>
  )
}
