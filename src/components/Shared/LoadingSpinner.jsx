import { FadeLoader } from 'react-spinners'

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <FadeLoader speedMultiplier={5} size={100} color='red' />
    </div>
  )
}


export default LoadingSpinner
