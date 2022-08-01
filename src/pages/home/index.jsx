import React from "react"
import FeaturedPost from "../../components/featured-post"
import Post from "../../components/post"
import PostList from "../../components/post-list"



export default function Home(){
    const all_posts = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Landscape_mountain.jpg",
            date: "July 26, 2022",
            title:"Paisagem da estrada",
            description:"Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! "
       },{
        image: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/14179421596_b95c10db10_o.jpeg",
        date: "July 25, 2022",
        title:"Paisagem de Praia",
        description:"Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! "
        },{
        image: "https://images.memphistours.com/large/1384dab11b121931eba246f2ef0a42ec.jpg",
        date: "July 23, 2022",
        title:"Paisagem de Praia",
        description:"Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! "
        },{
        image: "https://i.pinimg.com/736x/e0/32/3f/e0323f11333441a953310c1fc094cb3c.jpg",
        date: "July 22, 2022",
        title:"Paisagem de Pedras 1",
        description:"Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! "
        },{
            image: "https://i.pinimg.com/236x/41/df/44/41df44fe5b95c6c70b442db7148d0703.jpg",
            date: "July 21, 2022",
            title:"Paisagem de Pedras 2",
            description:"Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! Uma das melhores paisagens de praia do mundo! "
        },
    ]
    return (
        <div>
            {
                all_posts && <FeaturedPost post={all_posts[0]} />
            }

            <PostList posts={all_posts} />
        </div>
    )
}