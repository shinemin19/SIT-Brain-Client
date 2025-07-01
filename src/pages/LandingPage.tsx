import {
  ArrowRight,
  Brain,
  FileText,
  Zap,
  CheckCircle,
  AlertCircle,
  Star,
  Play,
  MessageSquare,
} from "lucide-react";
import NavBar from "../components/shared/NavBar";
import Banner from "../assets/img/Banner.png";
import AssistanceIS from "../assets/AssistanceIS.png";
import SITBrainLogo from "../assets/navbar/sitbrain_logo.svg";
import Arrow from "../assets/Arrow.svg";
import { useNavigate } from "react-router-dom";

const SitbrainLanding = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#475569] text-white">
      <NavBar isLoggedIn={false} currentPage="landing" userData={undefined} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">
                  Discover the Next Gen Evaluation
                </span>
              </div>

              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Improve your{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    IS Report
                  </span>{" "}
                  with{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    SITBRAIN
                  </span>
                </h1>
                <p className="text-xl text-slate-300 mt-6 leading-relaxed">
                  AI-powered Learning Assistance for SIT Students. Get instant
                  feedback and improve your reports with cutting-edge
                  technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate("/signin")} className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-600 hover:to-purple-700 hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <span className="flex items-center justify-center">
                    Try SITBRAIN
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
                </button>

                {/* <button className="flex items-center justify-center px-8 py-4 border-2 border-slate-600 rounded-xl font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button> */}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <div className=" bg-slate-700/30 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-slate-400 text-center">
                    {/* <Brain className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                    <p>AI Technology Visualization</p>
                    <p className="text-sm">[Hero Image Placeholder]</p> */}
                    <img
                      src={Banner}
                      alt="Banner Image"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="group relative bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Brain className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      </div>
                      <h3 className="text-sm font-semibold text-blue-200 mb-2">
                        Smart Analysis
                      </h3>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-purple-600/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <MessageSquare className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                      </div>
                      <h3 className="text-sm font-semibold text-purple-200 mb-2">
                        AI Feedback
                      </h3>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-cyan-600/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Zap className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                      </div>
                      <h3 className="text-sm font-semibold text-cyan-200 mb-2">
                        Instant Results
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get Instant Feedback, Improve Now!
            </h2>
            <p className="text-xl text-slate-300">
              Experience the power of AI-driven report enhancement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left - Feature Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">Your IS Report</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img src={AssistanceIS} />
                </div>
              </div>
            </div>

            {/* middle arrow part */}
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="w-30 h-auto bg-gradient-to-r  rounded-lg flex items-center justify-center">
                <img src={SITBrainLogo} className="w-full h-auto" />
              </div>
              <span className="font-semibold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                SITBRAIN Analysis
              </span>
              <img
                src={Arrow}
                alt="Right Arrow"
                className="bg-gradient-to-r animate-pulse h-auto w-36"
              />
            </div>

            {/* Right - Feedback Panel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl py-6 px-4 border border-slate-700/50">
                {/* <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r bg-white rounded-lg flex items-center justify-center">
                    <img src={SITBrainLogo} className="w-full h-auto text-white" />
                  </div>
                  <span className="font-semibold">SITBRAIN Analysis</span>
                </div> */}

                <div className="space-y-4 px-3">
                  <div className="grid grid-cols-3 items-center">
                    <span className="text-sm text-slate-300 font-medium min-w-fit mr-4">
                      Strength
                    </span>
                    <div className="flex-1 col-span-2">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 space-y-2">
                        {/* Text lines */}
                        <div className="h-2 bg-green-500/40 rounded-full w-full"></div>
                        <div className="h-2 bg-green-500/30 rounded-full w-4/5"></div>
                        <div className="h-2 bg-green-500/20 rounded-full w-3/4"></div>
                        <div className="h-2 bg-green-500/30 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 items-center">
                    <span className="text-sm text-slate-300 font-medium min-w-fit mr-4">
                      Weakness
                    </span>
                    <div className="flex-1 col-span-2">
                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 space-y-2">
                        {/* Text lines */}
                        <div className="h-2 bg-yellow-500/40 rounded-full w-full"></div>
                        <div className="h-2 bg-yellow-500/30 rounded-full w-4/5"></div>
                        <div className="h-2 bg-yellow-500/20 rounded-full w-3/4"></div>
                        <div className="h-2 bg-yellow-500/30 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 items-center">
                    <span className="text-sm text-slate-300 font-medium min-w-fit mr-4">
                      Suggestions
                    </span>
                    <div className="flex-1 col-span-2">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 space-y-2">
                        {/* Text lines */}
                        <div className="h-2 bg-blue-500/40 rounded-full w-full"></div>
                        <div className="h-2 bg-blue-500/30 rounded-full w-5/6"></div>
                        <div className="h-2 bg-blue-500/20 rounded-full w-3/4"></div>
                        <div className="h-2 bg-blue-500/30 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">
                    Constructive Feedback
                  </h4>
                  <p className="text-sm text-slate-300">
                    AI-generated suggestions and improvements...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How it works?</h2>
            <p className="text-xl text-slate-300">
              Simple steps to enhance your reports
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Upload Report</h3>
              <p className="text-slate-300">
                Upload your IS report document to our secure platform
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. AI Analysis</h3>
              <p className="text-slate-300">
                Our AI analyzes your content and structure comprehensively
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Get Feedback</h3>
              <p className="text-slate-300">
                Receive detailed feedback and improvement suggestions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      {/* <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center border border-slate-600 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-slate-300 text-lg">Watch Demo Video</p>
                <p className="text-slate-400 text-sm mt-2">
                  [Video Placeholder]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-slate-700/50 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-6">
              Ready to improve your IS reports?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of SIT students who are already using SITBRAIN
            </p>

            <button onClick={() => navigate("/signin")} className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:shadow-blue-500/25 text-lg">
              <span className="flex items-center justify-center">
                Get Started Now
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">Powered by IloveULab • SIT KMUTT</p>
        </div>
      </footer>
    </div>
  );
};

export default SitbrainLanding;
