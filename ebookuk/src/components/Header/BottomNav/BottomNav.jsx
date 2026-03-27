import './BottomNav.css'
import { Link } from 'react-router-dom'

const BottomNav = () => {
    return (
        <div className='bottom-nav'>
            <ul>
                <li><Link to={"ebook-writing"}>Ebook Writing</Link></li>
                <li><Link to={"ebook-editing"}>Ebook Editing</Link></li>
                <li><Link to={"ebook-publishing"}>Ebook Publishing</Link></li>
                <li><Link to={"ebook-cover-design"}>Ebook Cover Design</Link></li>
                <li><Link to={"ebook-marketing"}>Ebook Marketing</Link></li>
                <li><Link to={"genre"}>Genre</Link></li>
            </ul>
        </div>
    )
}

export default BottomNav
