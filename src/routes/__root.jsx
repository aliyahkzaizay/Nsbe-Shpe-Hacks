import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Navbar } from '../components/ui/Navbar'
import { Footer } from '../components/ui/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
