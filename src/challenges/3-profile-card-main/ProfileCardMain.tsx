import userImg from '../../assets/3_pcm/image-victor.jpg'

const STATISTICS = [
  {
    titile: 'Followers',
    number: '80K',
  },
  {
    titile: 'Likes',
    number: '803K',
  },
  {
    titile: 'Photos',
    number: '1.4K',
  },
]
const ProfileCardMain = () => {
  return (
    <main className='h-[100dvh] bg-dark-cyan flex justify-center items-center bg-[url("/3_pcm/bg-pattern-top.svg"),_url("/3_pcm/bg-pattern-bottom.svg")] bg-no-repeat bg-[position:-400px_-250px,_right_-400px_bottom_-250px] bg-[size:600px,_600px] xl:bg-[position:-250px_-550px,_right_-250px_bottom_-550px] sm:bg-[position:-250px_-250px,_right_-250px_bottom_-250px] lg:bg-[size:800px,_800px] lg:bg-[position:-200px_-450px,_right_-200px_bottom_-450px] xl:bg-[size:1000px,_1000px]'>
      <article className='font-kumbh-sans text-lg bg-white rounded-xl  w-[330px] min-h-[380px] flex flex-col justify-between shadow-[0_0_60px_-5px_rgba(0,0,0,0.3)] shadow-dark-grayish-blue/50'>
        <header className='bg-[url("/3_pcm/bg-pattern-card.svg")] rounded-t-lg h-[150px] relative'>
          <img
            className='rounded-full border-[7px] border-white absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%]'
            src={userImg}
            alt='user'
          />
        </header>
        <div className='text-dark-grayish-blue mt-10'>
        <h2 className='text-center font-bold text-very-dark-desaturated-blue'>
          Victor Crest
          <span className='font-normal text-dark-gray'> 26</span>
        </h2>
        <h3 className='text-center text-sm'>London</h3>
        </div>
        <footer className='flex border-t-[1px] border-gray-300'>
          {STATISTICS.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center grow h-[90px]'>
              <p className='font-bold text-very-dark-desaturated-blue'>{item.number}</p>
              <h4 className='text-[10px] leading-none  text-dark-grayish-blue'>{item.titile}</h4>
            </div>
          ))}
        </footer>
      </article>
    </main>
  )
}

export default ProfileCardMain
