
interface IContainer{
children:React.ReactNode;
}

const Container = ({children}:IContainer) => {
  return (
    <div className='container mx-auto p-3'>
      {children}
    </div>
  )
}

export default Container
