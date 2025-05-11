import { Link, ErrorComponent, type ErrorComponentProps } from "@tanstack/react-router";

export function ErrorThing({error}: ErrorComponentProps) {
  return (
  <main>
    <h1>ERROR COMPONENT</h1>
    <ErrorComponent error={error} />
    <Link to="/">Return Home</Link>
  </main>
  )
}