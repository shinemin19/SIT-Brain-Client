import SitBrainLogo from '../../assets/navbar/sitbrain_logo.svg';
import SitLogo from '../../assets/navbar/sit_logo.svg';
import type { NavBarProps } from '../../types/navbar';
import { useNavigate } from 'react-router-dom';

function NavBar({ isLoggedIn, currentPage, userData }: NavBarProps) {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate('/home');
    } else {
      navigate('/signin');
    }
  };
  return (
    <nav className="w-full h-16 z-50 fixed top-0 bg-white/90 backdrop-blur-md border-b border-gray-400 px-8 flex items-center justify-between shadow-sm">
      {/* Left side - Logo(s) - Always visible */}
      <div className="flex items-center space-x-2">
      <div onClick={handleLogoClick} className='flex items-center space-x-1 hover:cursor-pointer'>
        <div className="h-10 w-auto">
          <img 
            src={SitBrainLogo}
            alt="SIT Brain Logo" 
            className="h-full w-full object-contain"
          />
        </div>
        <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#09529F] to-[#6ADAF6] ">SITBRAIN</span>
      </div>
        <div className="h-6 border-r border-gray-300 mx-4"></div>
        <div className="h-8 w-auto">
          <img 
            src={SitLogo}
            alt="SIT Logo" 
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Right side - Dynamic content */}
      <div className="flex items-center space-x-6">
        {currentPage === 'signin' ? null : (
          <>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                  <p className="text-md font-medium text-gray-700">{userData?.name}</p>
                  <p className="text-md text-gray-500">{userData?.studentId}</p>
              </div>
            ) : (
              <a
                href="/signin"
                className="px-5 py-2 rounded-md bg-slate-900 text-white text-sm font-medium
                          hover:bg-slate-950 transition-all duration-90 transform hover:scale-103"
              >
                Sign In
              </a>
            )}
          </>
        )}
      </div>
    </nav>
  )
}

export default NavBar;