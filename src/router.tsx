import { createBrowserRouter} from 'react-router-dom'
import App from './App'
import SignUp from './challenges/1_newsletter-signup/SignUp'
import Message from './challenges/1_newsletter-signup/Message'
import SocialProofSection from './challenges/2_social-proof-section/SocialProofSection'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "newsletter-signup/signup",
    element: <SignUp/>,
  },
  {
    path: "newsletter-signup/success-message",
    element: <Message/>
  },
  {
    path: "social-proof-section",
    element: <SocialProofSection />
  }
])

export default router