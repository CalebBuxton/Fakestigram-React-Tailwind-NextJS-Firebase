import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'uniqueNameHere',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://render.fineartamerica.com/images/rendered/default/print/8/5.5/break/images/artworkimages/medium/2/3-milky-way-and-aurora-borealis-iceland-arctic-images.jpg',
        caption: 'This is d d d d DOPE'
    },
    {
        id: '1234',
        username: 'uniqueNameHere',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg',
        caption: 'This is d d d d DOPE'
    },
    {
        id: '1235',
        username: 'uniqueNameHere',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://media.istockphoto.com/photos/neon-background-abstract-blue-and-pink-with-light-shapes-line-picture-id1191658515?k=20&m=1191658515&s=612x612&w=0&h=GyYyYJB8QTutGPhOtWdz0k8adWc1q4F55oEdM37duNA=',
        caption: 'This is d d d d DOPE'
    }
]

function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} 
                id={post.id} 
                username={post.username} 
                userImg={post.userImg} 
                img={post.img} 
                caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts
