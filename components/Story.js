function Story({img, username}) {
    return (
        <div>
            <img className='h-14 w-14 rounded-full p-[1px] 
            border-red-500 border-2 object-contain cursor-pointer text-center
            hover:scale-110 transition transform duration-200 ease-out' src={img} alt="" />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

//"https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
export default Story
