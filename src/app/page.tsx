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

export default function Home() {



  return (
    <div>

      {/* <nav>
        <ul>
          <li>About</li>
          <li>Stack</li>
          <li>Work Experience</li>
          <li>Projects</li>
          <li>Certificates</li>
          <li>Education</li>
          <li>Events</li>
          <li>Contact Me</li>
        </ul>
      </nav> */}

      <header className="container mx-auto px-2">

        <div className='flex flex-col justify-center align-items-center items-center h-[70vh]'>

          <div className='basis-2/12'>
            <h1 className='text-2xl text-center md:text-left'>Hello there! I'm <strong>Lucas Luz</strong>&nbsp;🖖🏻</h1>
            <p className='lg:text-4xl md:text-3xl'>A <strong className='showoff'>Software Engineer, Programming Teacher and Speaker</strong> from São Paulo, Brazil! I help companies to build, launch and grow their products with modern technologies, teach people about software development and learn new things everyday!</p>
          </div>

          <div className='basis-2/12'>

          </div>
        </div>
      </header>

      <main>

        <section className="bg-white py-5 px-2">
          <div className='container mx-auto flex flex-col lg:flex-row'>
            <div className='basis-6/12 content-center flex flex-col justify-center items-center'>
              <h3 className='text-2xl lg:text-4xl font-bold text-center mb-2'>About me</h3>
              <p className='text-lg lg:text-2xl text-black lg:text-left text-center mb-5'>Fullstack Software Engineer, Teacher and Speaker with 6 years of experience developing small and large scale desktop, web, mobile and DevOps projects. Passionate about technology, new challenges, teaching and learning, I’m seeking for opportunities to grow as a person and professional, improving my knowledge in leadership and technical fields, to be the next reference in the software development community, academic and scientific fields!</p>
              <figure className='lg:h-[300px] lg:w-[300px] h-[200px] w-[200px]'>
                <img
                  src="/assets/img/profile.png"
                  alt="Profile photo"
                  className='h-[100%] w-[100%]'
                />
              </figure>
            </div>


            <div className='basis-6/12'>
              <h3 className='text-4xl font-bold text-center my-10 lg:my-0 lg:mb-5'>My dev tools</h3>
              <div className='grid lg:grid-cols-7 grid-cols-4 gap-1'>

                {stack.map(item => (
                  <div key={item.id} className='flex flex-col align-items-center items-center hover:bg-[#ceab5d] mt-1'>
                    {item.image.length ? <Image src={item.image} alt={item.name} width={56} height={56} /> : ''}
                    <strong className='text-black'>{item.name}</strong>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section className="container grid grid-cols-1 lg:grid-cols-2 mx-auto py-5 px-2">
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
                  <h3 className='text-2xl font-bold text-center'>{title}</h3>
                  <p className='text-lg text-white'>{content}</p>
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

        <section className="container mx-auto py-5 px-2">
          <h2 className='text-4xl font-bold text-center mb-5'>Work experience</h2>
          {workexp.map(({ id, title, role, timerange, content }) => (
            <div key={id}>
              <Accordion title={title} role={role} timerange={timerange} content={content} />
            </div>
          ))}

        </section>

        <section className="bg-[#951D33]">
          <div className='container mx-auto py-5 px-2'>
            <h2 className='text-4xl font-bold text-center mb-5'>Projects</h2>
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-1 gap-5 lg:text-left text-center'>
              {projects.map(({ id, title, image, content }) => (
                <div key={id}>
                  <div className='w-100 bg-gray-400 h-[250px]'></div>
                  <h3 className='text-center font-bold text-xl my-2'>{title}</h3>
                  <p className='text-white'>{content}</p>
                </div>
              ))}


            </div>
          </div>
        </section>

        <section className="container mx-auto py-5 px-2">
          <h2 className='text-4xl font-bold text-center'>Certificates</h2>
          <div className='container mx-auto my-10 grid lg:grid-cols-4 md:grid-cols-1 gap-y-10 gap-x-10'>
            {certificates.map(({ id, title, image, content }) => (

              <div key={id}>
                <div className='w-100 bg-gray-400 h-[250px]'></div>
                <h3 className='text-center font-bold text-xl my-2'>{title}</h3>
                <p className='text-white'>{content}</p>
              </div>

            ))}

          </div>
        </section>

        <section className="container mx-auto mx-auto py-5 px-2">
          <h2 className='text-4xl font-bold text-center mb-5'>Events</h2>
          <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-1 gap-10'>
            {events.map(({ id, title, type, url, content }) =>
              <div key={id}>
                <iframe className="w-[100%] h-[40vh]" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h3 className='text-center font-bold text-xl my-2'>{title}</h3>
                <p className='text-white'>{content}</p>
              </div>
            )}
          </div>
        </section>

      </main>

      <footer className='bg-white'>
        <div className='container mx-auto py-5 px-2'>
          <h2 className='text-4xl font-bold text-center mb-5'>Contact me</h2>
          <div className='container mx-auto flex flex-col lg:flex-row justify-between lg:items-center lg:align-items-center'>

            <div className='lg:basis-9/12 basis-full'>
              <h2 className='text-3xl font-bold text-center lg:text-left'>Lucas Luz</h2>
              <p className='text-black text-center lg:text-left text-lg'>
                Fullstack Software Engineer, Teacher and Speaker with 6 years of experience developing small and large scale desktop, web, mobile and DevOps projects. Passionate about technology, new challenges, teaching and learning, I’m seeking for opportunities to grow as a person and professional, improving my knowledge in leadership and technical fields, to be the next reference in the software development community, academic and scientific fields!
              </p>
            </div>

            <div className='lg:basis-3/12 md:basis-3/12 sm:basis-3/12 basis-fill'>
              <h2 className='text-3xl font-bold text-center lg:my-0 my-5'>Social media</h2>
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
