import AboutMe from "../components/AboutMe"
import BackButton from "../components/BackButton"

export default function about() {
  return (
    <div className="h-screen">
      <BackButton />
      <AboutMe />
    </div>
  )
}
