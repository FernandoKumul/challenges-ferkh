import { createBrowserRouter} from 'react-router-dom'
import App from './App'
import SignUp from './challenges/1_newsletter-signup/SignUp'
import Message from './challenges/1_newsletter-signup/Message'

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
])

export default router