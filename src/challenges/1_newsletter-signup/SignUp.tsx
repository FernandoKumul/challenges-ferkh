import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)

const SignUp = () => {
  const navigate = useNavigate()
  const [isFocus, setFocus] = useState(false)
  const [isEmail, setEmail] = useState({
    value: '',
    hasError: false,
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const hasError = !emailRegexp.test(isEmail.value)
    setEmail(prevState => ({ ...prevState, hasError }))
    if(hasError) return setFocus(true)

    navigate('/newsletter-signup/success-message')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const hasError = !emailRegexp.test(e.target.value) && isFocus
    setEmail({
      hasError,
      value: e.target.value,
    })
  }

  const handleBlur = () => {
    const hasError = !emailRegexp.test(isEmail.value) && isFocus
    setEmail(prevState => ({ ...prevState, hasError }))
  }

  return (
    <section className='h-max bg-Charcoal-Grey text-Dark-Slate-Grey md:h-screen md:flex md:justify-center items-center font-["Roboto"]'>
      <div className='bg-White min-h-svh md:min-h-0 md:h-max flex flex-col md:flex-row-reverse md:w-[90%] md:rounded-3xl md:gap-4 md:p-4 lg:w-4/6 xl:w-1/2'>
        <picture>
          <source
            media='(min-width: 768px)'
            srcSet='/src/assets/1_nsfwsm/illustration-sign-up-desktop.svg'
          />
          <img
            src='/src/assets/1_nsfwsm/illustration-sign-up-mobile.svg'
            alt='hero'
            className='w-full md:h-full md:w-auto md:max-w-[300px] object-cover'
          />
        </picture>
        <div className='flex flex-grow flex-col justify-between px-6 py-10 md:w-1/2 md:pb-0 md:justify-normal'>
          <h2 className='font-bold text-4xl text-Charcoal-Grey md:text-5xl'>
            Stay updated!
          </h2>
          <p className='my-4 text-Charcoal-Grey'>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul>
            <li className='flex gap-4 items-start pb-2'>
              <img src='/src/assets/1_nsfwsm/icon-list.svg' alt='check' /> Product
              discovery and building what matters
            </li>
            <li className='flex gap-4 items-start pb-2'>
              <img src='/src/assets/1_nsfwsm/icon-list.svg' alt='check' />
              Measuring to ensure updates are a success
            </li>
            <li className='flex gap-4 items-start pb-2'>
              <img src='/src/assets/1_nsfwsm/icon-list.svg' alt='check' />
              And much more!
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className='flex justify-between'>
              <label className='text-xs font-bold' htmlFor='email'>
                Email address
              </label>
              {isEmail.hasError && (
                <p className='font-bold text-xs text-tomato'>
                  Valid email required
                </p>
              )}
            </div>
            <input
              type='email'
              name='email'
              id='email'
              value={isEmail.value}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='email@company.com'
              className={`w-full text-Dark-Slate-Grey border px-6 mt-1 mb-6 h-14 rounded-lg
              ${
                isEmail.hasError
                  ? 'bg-tomato/25 border-tomato focus:outline-red-400 text-tomato placeholder:text-tomato/70 '
                  : 'border-Grey border focus:outline-Charcoal-Grey'
              }`}
            />
            <button
              className='w-full h-14 rounded-md font-bold bg-Dark-Slate-Grey text-White
              bg-gradient-to-r hover:from-pink-500 hover:via-tomato transition-all  hover:to-orange-500
              hover:shadow-xl hover:shadow-tomato/50'
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp
