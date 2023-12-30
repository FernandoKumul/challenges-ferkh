import { useNavigate } from 'react-router-dom'
import iconSuccess from '../../assets/1_nsfwsm/icon-success.svg'

const Message = () => {
  const navigate = useNavigate()

  return (
    <section className='h-[100dvh] bg-Charcoal-Grey text-Dark-Slate-Grey sm:flex sm:justify-center sm:items-center font-["Roboto"]'>
      <div className='bg-White h-full flex flex-col px-6 pb-10 justify-end gap-16 sm:h-max sm:w-[60%] md:w-1/2 xl:w-[28%] sm:px-8 sm:py-10 sm:rounded-3xl sm:gap-6'>
        <div className='flex-grow flex flex-col justify-center'>
        <img
          src={iconSuccess}
          alt='success'
          className='w-14 mb-10 sm:mb-6'
        />
        <h2 className='font-bold text-4xl text-Charcoal-Grey mb-6 sm:mb-4 sm:text-5xl'>
          Thanks for subscribing!
        </h2>
        <p className='text-Charcoal-Grey'>
          A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        </div>
        <button
          className='w-full h-14 rounded-md font-bold bg-Dark-Slate-Grey text-White
              bg-gradient-to-r hover:from-pink-500 hover:via-tomato transition-all  hover:to-orange-500
              hover:shadow-xl hover:shadow-tomato/50'
          onClick={() => navigate('/newsletter-signup/signup')}
        >
          Dismiss message
        </button>
      </div>
    </section>
  )
}

export default Message
