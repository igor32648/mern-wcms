import { Button } from 'flowbite-react';
import image from '../assets/data.png'
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            Interested in delving deeper into the world of data science?
            </h2>
            <br />
            <p>
            Explore our blog now for insightful articles on the latest trends and unlock the power of knowledge!
            </p>
            <br />
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <Link to="https://igorcarlosdev.wordpress.com/" >
                <p>
                    Crazy Data Blog
                </p>
                </Link>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={image} />
        </div>
    </div>
  )
}