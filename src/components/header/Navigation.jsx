

const Navigation = ({navbtn}) => {
  const navItems=[
    {name: 'Home', slug:'#'},
    {name: 'Courses', slug:'#'},
    {name: 'About Us', slug:'#'},
    {name: 'Contact Us', slug:'#'},
  ]
  var className='hidden'
  var liClass=''
  if(!navbtn)
  {
    className='h-0 hidden';
    liClass='';
  }else{
    className='flex flex-col bg-white lightShadow px-4  w-full h-52';
    liClass='border-y py-3';
  }

  
  return (
    <ul className={`text-primary-grayText font-bold lg:gap-2 overflow-hidden  absolute  top-16 left-0 z-10 ${className}  md:flex md:static md:h-auto md:items-center `}>
      {
        navItems.map((item)=>(

        <li  
          className={`py-2 px-4  rounded-lg hover:bg-primary-light hover:text-primary cursor-pointer ${liClass}`} 
          key={item.name}
        >
          <a href={item.slug}>{item.name}</a>
        </li>
        ))
      }
    
    </ul>
  )
}

export default Navigation