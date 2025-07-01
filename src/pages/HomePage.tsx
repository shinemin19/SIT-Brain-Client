import React from 'react';
import { ArrowRight, MessageCircle, Users } from 'lucide-react';
import SitBrainLogo from '../assets/navbar/sitbrain_logo.svg';
import NavBar from '../components/shared/NavBar';
import { useNavigate } from 'react-router-dom';


const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Mock user data, replace with actual user data from context or props
  const userData = {
    name: 'John Doe',
    studentId: "12345678900",
  }

  const handleChatClick = () => {
    navigate(`/chat/${userData.studentId}`);
  };

  const handleAssistClick = () => {
    navigate('/assistant');
  };
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden pt-20">
      <NavBar isLoggedIn={true} currentPage="home" userData={userData} />
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Hero section */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo with glow effect */}
          <div className="mb-2 relative">
            {/* bg-gradient-to-br from-purple-400 to-blue-500 */}
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto border-gray-300 border-1 relative">
              <img 
                src={SitBrainLogo} 
                alt="SIT Brain Logo" 
                className="w-20 h-20 object-contain"
              />
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            </div>
          </div>
          
          {/* Title with gradient text */}
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            SITBRAIN
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Write Better. Learn Deeper.
          </p>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Unlock the power of AI-driven research and writing. Transform your academic journey with intelligent assistance.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={handleChatClick} className="group relative bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" />
              Chat and ask about paper
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button onClick={handleAssistClick} className="group relative bg-white/10 text-gray-600 border border-gray-500 hover:border-gray-300 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-lg hover:scale-105 flex items-center justify-center gap-3">
              <Users className="w-5 h-5" />
              Student Assistance
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Feature cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Paper Analysis</h3>
              <p className="text-gray-400 leading-relaxed">
                Upload and analyze research papers with AI-powered insights and summaries.
              </p>
            </div>
          </div>
          
          <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Learning</h3>
              <p className="text-gray-400 leading-relaxed">
                Personalized learning paths and intelligent tutoring for academic success.
              </p>
            </div>
          </div>
          
          <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Writing</h3>
              <p className="text-gray-400 leading-relaxed">
                Enhanced writing assistance with grammar, style, and research support.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main interaction card */}
        {/* <div className="max-w-2xl w-full">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl"> */}
              
              {/* Floating elements animation */}
              {/* <div className="absolute top-6 right-6">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
              </div>
              <div className="absolute top-12 right-12">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></div>
              </div>
              <div className="absolute top-8 right-20">
                <div className="w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-300"></div>
              </div> */}
              
              {/* Illustration */}
              {/* <div className="flex items-center justify-center mb-8">
                <div className="relative"> */}
                  {/* Main document */}
                  {/* <div className="w-20 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-lg relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute top-3 left-3 right-3">
                      <div className="h-1 bg-gray-300 rounded mb-2"></div>
                      <div className="h-1 bg-gray-300 rounded mb-2"></div>
                      <div className="h-1 bg-gray-300 rounded mb-2"></div>
                      <div className="h-1 bg-purple-400 rounded mb-2"></div>
                    </div>
                  </div>
                   */}
                  {/* AI Brain */}
                  {/* <div className="absolute -right-8 -top-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                  </div> */}
                  
                  {/* User avatar */}
                  {/* <div className="absolute -right-16 top-12">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                  </div> */}
                  
                  {/* Connection lines */}
                  {/* <div className="absolute top-8 left-16 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
                  <div className="absolute top-16 left-20 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                </div>
              </div> */}
              {/* <h3 className="text-2xl font-bold text-white text-center mb-4">
                Student Assistance
              </h3>
              <p className="text-gray-300 text-center">
                Get personalized help with your academic work through our AI-powered platform
              </p> */}
            </div>
          </div>
        // </div>
      // </div>
    // </div>
  );
};

export default HomePage;