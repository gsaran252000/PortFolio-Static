import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-lg">

        <div className="max-w-5xl mx-auto px-6 py-20 ">
          <img
            src="/saran.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 shadow-md object-cover"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">SARAN KG</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">Hi! I'm a passionate Software Engineer with over 3 years of hands-on experience in C++ development, specializing in Win32 applications and system-level programming.</p>
          <div className="flex items-center gap-6 text-gray-600 flex-wrap">
            <a href="https://www.linkedin.com/in/saran-kg/"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a href="mailto:gsaran252000@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-red-50 hover:text-red-600 transition-colors duration-200">
              <Mail size={20} />
              <span>Email</span>
            </a>

            <a href="https://github.com/gsaran252000"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a href="https://drive.google.com/file/d/1LttCO6TKSD-ZfVkHxOqQYVVmBGre8xjL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-green-50 hover:text-green-700 transition-colors duration-200 font-medium">
              📄 <span>Resume</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Experience
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
                  <p className="text-gray-600">Zoho</p>
                </div>
                <span className="text-gray-500 text-sm">May 2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>Led <strong>end-to-end</strong> software development processes, from <strong>requirements analysis</strong> to <strong>deployment</strong>, for enterprise-level solutions.</li>
                <li>Delivered optimized <strong>patching mechanisms</strong> across both <strong>on-premise</strong> and <strong>cloud platforms</strong>, improving overall system <strong>reliability</strong>.</li>
                <li>Designed <strong>scalable</strong>, <strong>secure</strong>, and <strong>maintainable</strong> enterprise applications, addressing diverse organizational needs. Successfully migrated a legacy <strong>C++ codebase</strong> to <strong>Visual Studio 2022</strong> with <strong>C++17 standards</strong>.</li>
                <li>Implemented <strong>hotfixes</strong> for <strong>critical issues</strong>, improving system <strong>performance</strong> and minimizing <strong>downtime</strong>. Developed a <strong>patch deployment failure analysis</strong> feature, reducing <strong>resolution times</strong> and <strong>support tickets</strong> by <strong>60%</strong>.</li>
                <li>Developed <strong>proof of concepts</strong> for customer-requested features and assessed <strong>feasibility</strong>. Optimized the codebase for <strong>performance</strong>, <strong>scalability</strong>, <strong>security</strong>, and <strong>maintainability</strong>, boosting <strong>customer satisfaction</strong>.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Software Engineer Intern</h3>
                  <p className="text-gray-600">Zoho</p>
                </div>
                <span className="text-gray-500 text-sm">Sept 2021 - May 2022</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
  <li>Analyzed the <strong>codebase</strong> and handled different <strong>customer tickets</strong> and made some quick <strong>hot fixes</strong> for minor issues. Actively engaged in <strong>debugging</strong> for <strong>system optimization</strong>.</li>
  <li>Gained hands-on experience with <strong>enterprise software development</strong></li>
  <li>Participated in <strong>code reviews</strong> and <strong>team discussions</strong></li>
</ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
            Projects
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                <a href="https://www.manageengine.com/vulnerability-management/help/system-quarantine-policy.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
  System Quarantine Policy
  <ExternalLink size={16} />
</a>
                </h3>
                <p className="text-gray-700">
                  Developed the Agent component that enforces quarantine rules using WinDivert DLL for network blocking. Helped organizations isolate non-compliant systems to reduce attack surface.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  <a href="https://www.manageengine.com/patch-management/help/patch-outside-deployment-window.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                    Patch Outside Deployment Window
                    <ExternalLink size={16} />
                  </a>
                </h3>
                <p className="text-gray-700">
                  Built functionality to allow patching critical vulnerabilities even outside the predefined maintenance window. Reduced manual overhead and improved security posture.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  <a href="https://www.manageengine.com/products/desktop-central/how-to/windows-1123h2-feature-pack-deployment.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                    Windows Feature Pack Deployment
                    <ExternalLink size={16} />
                  </a>
                </h3>
                <p className="text-gray-700">
                  Implemented seamless deployment of Windows Feature Packs, automating the extraction and installation process via setup.exe. Streamlined OS feature updates in enterprise environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
            Skills
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Languages</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    C
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    C++
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Python
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Frameworks</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Windows Api
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Boost
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    React
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Visual Studio 2022
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Cmake
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    VS Code
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Google Test (Unit testing for C++)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            Education
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">B.Tech in Electronics And Instrumentation Engineering</h3>
                <p className="text-gray-600">Anna University</p>
              </div>
              <span className="text-gray-500 text-sm">2018 - 2022</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;