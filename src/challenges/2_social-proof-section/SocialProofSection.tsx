import iconStar from '../../assets/2_spc/icon-star.svg'

const ACHIEVEMENTS = [
  {
    title: 'Rated 5 Stars in Reviews',
    className: 'lg:ml-[0%]'
  },
  {
    title: 'Rated 5 Stars in Report Guru',
    className: 'lg:ml-[10%]'

  },
  {
    title: 'Rated 5 Stars in BestTech',
    className: 'lg:ml-[20%]'

  },
]

const TESTIMONIES = [
  {
    name: 'Colton Smith',
    image: '2_spc/image-colton.jpg',
    description:
      '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
  },
  {
    name: 'Irene Roberts',
    image: '2_spc/image-irene.jpg',
    description:
      '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
  },
  {
    name: 'Anne Wallace',
    image: '2_spc/image-anne.jpg',
    description:
      '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
  },
]

const VARIANTTESTIMONIES = ["lg:mt-[0px]", 'lg:mt-[15px]', 'lg:mt-[30px]']

const SocialProofSection = () => {
  return (
    <main className='font-league-spartan px-6 sm:px-20 md:px-28 lg:px-20 xl:px-40 py-20 bg-[url("/2_spc/bg-pattern-top-mobile.svg"),_url("/2_spc/bg-pattern-bottom-mobile.svg")] lg:bg-[url("/2_spc/bg-pattern-top-desktop.svg"),_url("/2_spc/bg-pattern-bottom-desktop.svg")] bg-no-repeat bg-[position:top_left,_bottom_right] lg:min-h-screen'>
      <section className='lg:flex'>
        <article className='mb-6 lg:w-[50%] lg:pr-10 xl:pr-40 lg:mb-10'>
          <h2 className='text-very-dark-magenta text-[40px] lg:text-[52px] lg:text-left leading-none text-center font-bold mb-4'>
            10,000+ of our users love our products.
          </h2>
          <p className='text-dark-grayish-magenta font-medium text-center lg:text-left'>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </article>
        <ul className='flex flex-col gap-4 mb-12 lg:grow'>
          {ACHIEVEMENTS.map((item, index) => (
            <li
              key={index}
              className={`bg-light-grayish-magenta p-4 lg:px-8 font-bold text-center text-very-dark-magenta rounded-lg lg:flex lg:gap-12 lg:w-[80%] ${item.className}`}
            >
              <div className='flex justify-center gap-2 mb-2 lg:mb-0 self-center'>
                <img src={iconStar} alt='star' />
                <img src={iconStar} alt='star' />
                <img src={iconStar} alt='star' />
                <img src={iconStar} alt='star' />
                <img src={iconStar} alt='star' />
              </div>
              <p className='leading-none'>{item.title}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className='flex gap-4 flex-col lg:flex-row lg:gap-6 lg:items-start'>
        {TESTIMONIES.map((item, index) => (
          <article
            key={index}
            className={`bg-very-dark-magenta rounded-lg px-6 py-8 mt-0 ${VARIANTTESTIMONIES[index]}`}
            // style={{ marginTop: `${index * 20}px` }}
          >
            <header className='flex gap-6 mb-6'>
              <img
                src={item.image}
                alt='user'
                className='rounded-full w-10 h-10'
              />
              <div className='font-medium'>
                <p className='text-white leading-none'>{item.name}</p>
                <p className='text-soft-pink'>Verified Buyer</p>
              </div>
            </header>
            <p className='text-white'>{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default SocialProofSection
