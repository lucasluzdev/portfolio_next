import Image from 'next/image';
import stack from '@/constants/stack';
import workexp from '@/constants/workexp';
import Accordion from '@/components/accordion';
import Link from 'next/link';
import socialMedia from '@/constants/social-media';
import aboutMe from '@/constants/amout-me';
import projects from '@/constants/projects';
import certificates from '@/constants/certificates';
import events from '@/constants/events';
import Navbar from '@/components/navbar';
import Carousel from '@/components/carousel';

export default function Home() {

  const menuItems = [
    { id: 1, title: 'Home', path: '#home' },
    { id: 2, title: 'About', path: '#about' },
    { id: 3, title: 'Work EXP', path: '#work' },
    { id: 4, title: 'Projects', path: '#projects' },
    { id: 5, title: 'Certificates', path: '#certificates' },
    { id: 6, title: 'Events', path: '#events' },
    { id: 7, title: 'Contact', path: '#contact' },
  ];

  return (
    <div>

      <Navbar menuItems={menuItems} />

      <header className="container mx-auto px-2" id="home">

        <div className='flex flex-col justify-center align-items-center items-center lg:h-[60vh] lg:mt-0 mt-10 h-[50vh]'>

          <div className='basis-2/12'>
            <h1 className='lg:text-2xl text-xl text-center md:text-left lg:mb-2 mb-5'>Hello there! I'm <strong className='text-[#ceab5d]'>Lucas Luz</strong>&nbsp;🖖🏻</h1>
            <p className='lg:text-3xl text-xl'>A <strong className='showoff'>Fullstack Software Engineer, Programming Teacher and Speaker</strong> from São Paulo, Brazil! I help companies to build, launch and grow their products with modern technologies, teach people about software development and learn new things everyday!</p>
          </div>
        </div>
      </header>

      <main>

        <section className="bg-white py-10 px-2" id="about">
          <div className='container mx-auto grid lg:grid-cols-12 grid-cols-1 gap-x-10 items-center'>
            <div className='lg:col-span-9'>
              <h3 className='text-4xl lg:text-left text-center mb-2 text-[#da291c]'>About me</h3>
              <p className='text-md lg:text-2xl text-black my-5'>Fullstack Software Engineer, Teacher and Speaker with 6 years of experience developing small and large scale desktop, web, mobile and DevOps projects. Passionate about technology, new challenges, teaching and learning, I’m seeking for opportunities to grow as a person and professional, improving my knowledge in leadership and technical fields, to be the next reference in the software development community, academic and scientific fields!</p>
            </div>
            <div className='lg:col-span-3'>
              <figure className='lg:h-[300px] lg:w-[300px] h-[35vh] w-full flex flex-col items-center align-items-center align-content-center'>
                <img
                  src="/assets/img/profile.png"
                  alt="Profile photo"
                  className='h-full w-full'
                />
              </figure>
            </div>

          </div>
        </section>

        <section className='bg-white'>
          <div className='container mx-auto pb-10'>
            <h3 className='text-4xl text-center lg:my-0 lg:mb-5 text-[#da291c]'>My dev tools</h3>
            <div className=' grid lg:grid-cols-8 grid-cols-4 gap-1'>

              {stack.map(item => (
                <div key={item.id} className='flex flex-col align-items-center items-center hover:bg-[#ceab5d] mt-1'>
                  {item.image.length ? <Image src={item.image} alt={item.name} width={56} height={56} /> : ''}
                  <strong className='text-black mt-2'>{item.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container grid grid-cols-1 mx-auto py-5 px-2" id="roles">
          {aboutMe.map(({ id, title, content, image }) => {
            let classes = 'flex flex-col lg:h-[25vh] items-center my-2';
            if (id % 2 === 0) {
              classes = classes + ' lg:flex-row-reverse'
            }
            else {
              classes = classes + ' lg:flex-row'
            }
            return (
              <div key={id} className={classes}>
                <div className='basis-8/12 lg:mb-0'>
                  <h3 className='text-2xl text-center'>{title}</h3>
                  <hr className='mt-1 mb-5 border-solid border-1 border-[#da291c]' />
                  <p className='text-gray-100 my-5 lg:text-lg'>{content}</p>
                </div>
                <div className='basis-4/12 lg:mx-10'>
                  <figure className='lg:h-[200px] h-[300px] w-[100%]'>
                    <img
                      src={image}
                      alt="Profile photo"
                      className='h-[100%] w-[100%]'
                    />
                  </figure>
                </div>
              </div>
            )
          })}

        </section>

        <section className="container mx-auto py-10 px-2" id="work">
          <h2 className='text-4xl text-center mb-5'>Work experience</h2>
          {workexp.map(({ id, title, role, timerange, content }) => (
            <div key={id}>
              <Accordion title={title} role={role} timerange={timerange} content={content} />
            </div>
          ))}

        </section>

        <section className='bg-[#730C22]'>
          <div className='container px-2 mx-auto py-5'>
            <h2 className='text-4xl text-center mb-10'>Projects</h2>
            <Carousel images={projects} />
          </div>
        </section>

        <section className="container mx-auto pt-10 px-2" id="certificates">
          <h2 className='text-4xl text-center mb-5 text-white'>Certificates</h2>
          <div className='container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5'>

            {certificates.map(({ id, title, image, content }) => (

              <div key={id} className='flex flex-col items-center mb-10'>
                <figure className='w-[200px] h-[200px] relative'>
                  <Image src={image} alt="Certificate image" fill={true} />
                </figure>
                <h3 className='text-center text-xl mt-5'>{title}</h3>
                <hr className='w-[100%] mt-1 mb-5 border-solid border-1 border-white' />
                <p className='text-white font-medium lg:text-lg'>{content}</p>
              </div>

            ))}


          </div>
        </section>

        <section className='bg-[#730C22] pt-5' id="events">
          <div className="container mx-auto px-2 pb-5">
            <h2 className='text-4xl text-center mb-5'>Events</h2>
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-1 gap-5'>
              {events.map(({ id, title, type, url, content }) =>
                <div key={id}>
                  <iframe className="w-[100%] h-[40vh]" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <h3 className='text-center text-xl mt-5'>{title}</h3>
                  <hr className='w-[100%] mt-1 mb-5 border-solid border-1 border-white' />
                  <p className='text-white font-medium lg:text-lg'>{content}</p>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      <footer className='bg-white' id="contact">
        <div className='container mx-auto py-5 px-2'>
          <h2 className='text-4xl text-center mb-5'>Contact me</h2>
          <div className='container mx-auto flex flex-col lg:flex-row justify-between lg:items-center lg:align-items-center'>

            <div className='lg:basis-9/12 basis-full'>
              <h3 className='text-3xl text-center lg:text-left text-[#da291c]'>Lucas Luz</h3>
              <p className='text-black text-lg'>
                Fullstack Software Engineer, Teacher and Speaker with 6 years of experience developing small and large scale desktop, web, mobile and DevOps projects. Passionate about technology, new challenges, teaching and learning, I’m seeking for opportunities to grow as a person and professional, improving my knowledge in leadership and technical fields, to be the next reference in the software development community, academic and scientific fields!
              </p>
            </div>

            <div className='lg:basis-3/12 md:basis-3/12 sm:basis-3/12 basis-fill'>
              <h2 className='text-3xl text-center lg:my-0 my-5 text-[#da291c]'>Social media</h2>
              <div className='grid lg:grid-cols-3 grid-cols-2 gap-2'>
                {socialMedia.map(({ id, icon, url, name }) => (
                  <Link key={id} href={url} target='_blank' className='flex flex-col justify-between align-items-center items-center content-center p-2 hover:bg-[#951D33] lg:border-0 border border-black rounded'>
                    <Image src={icon} alt="Rede social" width={40} height={40} />
                    <small className='text-black'>{name}</small>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}
