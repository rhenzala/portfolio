import { Linkedin, Github, Twitter, Mail } from 'lucide-react'
const Socials = () => {
    return (
        <div>
            <ul className='flex gap-4'>
                <li><a href=""><Linkedin color='#8892b0'/></a></li>
                <li><a href=""><Github color='#8892b0'/></a></li>
                <li><a href=""><Twitter color='#8892b0'/></a></li>
                <li><a href="mailto:rhenzala@gmail.com"><Mail color='#8892b0'/></a></li>
            </ul>
        </div>
    )
}

export default Socials