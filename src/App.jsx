import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Applications from './pages/Applications.jsx'
import Agents from './pages/Agents.jsx'
import Tracing from './pages/Tracing.jsx'
import Sessions from './pages/Sessions.jsx'
import Users from './pages/Users.jsx'
import Evaluation from './pages/Evaluation.jsx'
import LlmJudge from './pages/LlmJudge.jsx'
import HumanAnnotation from './pages/HumanAnnotation.jsx'
import Datasets from './pages/Datasets.jsx'

export default function App() {
  return (
    <div className="ml-64">
      <aside className="fixed inset-y-0 left-0 w-64 bg-slate-900 border-r border-slate-800 shadow-sm z-50 text-slate-200">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-sm font-semibold">Agent Hub</h1>
        </div>
        <nav className="px-4 py-4 space-y-6">
          <div className="space-y-1">
            <NavLink to="/" end className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer font-medium`}>Dashboard</NavLink>
            <NavLink to="/applications" className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer`}>Applications</NavLink>
          </div>
          <div className="space-y-1">
            <p className="px-3 text-xs uppercase tracking-wide text-slate-400">Configuration</p>
            <NavLink to="/applications" className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer`}>Applications</NavLink>
            <NavLink to="/agents" className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer`}>Agents</NavLink>
          </div>
          <div className="space-y-1">
            <p className="px-3 text-xs uppercase tracking-wide text-slate-400">Observability</p>
            <NavLink to="/tracing" className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer`}>Tracing</NavLink>
            <NavLink to="/sessions" className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer`}>Sessions</NavLink>
            <NavLink to="/users" className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer`}>Users</NavLink>
          </div>
          <div className="space-y-1">
            <p className="px-3 text-xs uppercase tracking-wide text-slate-400">Evaluation</p>
            <NavLink to="/evaluation" className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer`}>Evaluation</NavLink>
            <NavLink to="/llm-judge" className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer`}>LLM-as-a-Judge</NavLink>
            <NavLink to="/human-annotation" className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer`}>Human Annotation</NavLink>
            <NavLink to="/datasets" className={({isActive})=>`block px-3 py-2 rounded-md ${isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'} cursor-pointer`}>Datasets</NavLink>
          </div>
        </nav>
        <div className="absolute bottom-4 left-6 flex items-center space-x-2 text-slate-400">
          <div className="status-dot status-active"></div>
          <span className="text-sm">Live</span>
        </div>
      </aside>

      <header className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-end">
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-700">
              <span className="text-sm">Signed in as</span>
              <span className="font-medium">User</span>
            </div>
            <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              Log out
            </button>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/tracing" element={<Tracing />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/users" element={<Users />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/llm-judge" element={<LlmJudge />} />
            <Route path="/human-annotation" element={<HumanAnnotation />} />
            <Route path="/datasets" element={<Datasets />} />
          </Routes>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Agent Application Management Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
