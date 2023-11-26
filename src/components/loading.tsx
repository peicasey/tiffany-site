// icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface LoadingProps{
    speed: number;
  }  

export default function Loading(props: LoadingProps) {
  <div className="animate-spin">
    <AiOutlineLoading3Quarters />
  </div>
}