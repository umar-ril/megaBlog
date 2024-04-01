import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({$id, title }) {
  let featuredImage;
  return (
    <Link to = {`/megaBlog/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-lg p-4'>
            <div className=' w-full justify-center mb-4'>
                <img src = {appwriteService.getFilePreview(featuredImage)} alt ={title}
                className=' rounded-xl'/>
                <h2 className=' text-xl font-bold'>{title}</h2>
            </div>
        </div>
    </Link>
  )
}

export default PostCard
