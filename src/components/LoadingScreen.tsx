import { RotateCw } from 'lucide-react'

const LoadingScreen = () => {
    return (
        <div className="h-auto w-full z-30 fixed gap-2 inset-0 flex items-center justify-center bg-gray-900/85 text-yellow-500">
            <RotateCw className="animate-spin " />
            <p>Cargando...</p>
        </div>
    )
}

export default LoadingScreen
