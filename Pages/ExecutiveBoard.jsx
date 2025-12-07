
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Crown, Book, Code, Lightbulb, MessageSquare } from 'lucide-react';

const coreMembers = [
  {
    name: "Nakshatra Thatipamula",
    role: "Founder & App Developer",
    description: "The driving force behind Legacy of India. Initiated the idea, leads app development, and provides overall creative and technical direction. Balances innovation with leadership to keep the project impactful and inspiring."
  },
  {
    name: "Amogh B.",
    role: "Strategy & Core Member",
    description: "Plays a central role in shaping the vision and long-term roadmap of Legacy of India. Acts as a co-founder in strategy and decision-making, while also supporting technical development and innovation at the core of the project."
  },
  {
    name: "D.A.L.Merlyn",
    role: "Documentation & PR Head",
    description: "Responsible for content creation, documentation, and outreach. Ensures cultural and historical information is accurate, well-researched, and effectively presented, while also handling external communication and public engagement."
  },
  {
    name: "Siri Meghana V",
    role: "Communication Lead",
    description: "Manages internal and external communication. Builds strong connections between the team and the community, ensures clear messaging, and promotes collaboration to expand the Legacy of India network."
  }
];

const RoleIcon = ({ role }) => {
  const lowerRole = role.toLowerCase();
  if (lowerRole.includes('founder')) return <Crown className="w-6 h-6" />;
  if (lowerRole.includes('app lead') || lowerRole.includes('developer')) return <Code className="w-6 h-6" />;
  if (lowerRole.includes('strategy') || lowerRole.includes('core')) return <Lightbulb className="w-6 h-6" />;
  if (lowerRole.includes('documentation') || lowerRole.includes('pr')) return <Book className="w-6 h-6" />;
  if (lowerRole.includes('communication')) return <MessageSquare className="w-6 h-6" />;
  return <Users className="w-6 h-6" />;
};

const getRoleColor = (role) => {
  const lowerRole = role.toLowerCase();
  if (lowerRole.includes('founder')) return 'from-purple-500 to-pink-500';
  if (lowerRole.includes('app lead')) return 'from-blue-500 to-indigo-500';
  if (lowerRole.includes('strategy')) return 'from-green-500 to-teal-500';
  if (lowerRole.includes('documentation') || lowerRole.includes('pr')) return 'from-orange-500 to-red-500';
  if (lowerRole.includes('communication')) return 'from-cyan-500 to-blue-500';
  return 'from-gray-500 to-gray-600';
};

export default function ExecutiveBoard() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            💫 Executive Board
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Meet the passionate team of young innovators behind The Legacy of India, combining technology, creativity, and leadership to celebrate India's incredible heritage.
          </motion.p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {coreMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl border-4 border-transparent hover:border-purple-200 transition-all duration-300 p-8 group hover:scale-[1.02]"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${getRoleColor(member.role)} rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300`}>
                  <RoleIcon role={member.role} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h2>
                  <p className="text-purple-600 font-semibold text-lg">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              ✨ Growing Together
            </h3>
            <p className="text-lg leading-relaxed mb-6 text-purple-100 max-w-4xl mx-auto">
              The Legacy of India Executive Board is a passionate team of young innovators who combine technology, creativity, and leadership to celebrate India's heritage. With diverse roles spanning app development, strategy, communication, documentation, and outreach, the team is united by a common goal — to build an interactive platform that educates, inspires, and connects students.
            </p>
            
            {/* Join Team Call to Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur rounded-2xl p-8 inline-block"
            >
              <h4 className="text-xl font-bold mb-4">🌟 Want to Join Our Team? 🌟</h4>
              <p className="mb-6 text-purple-100">
                The community is growing, and new members are always welcome to join this journey!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeKASO2OX1OqmmricMlptqQM-ybSqgm4ce0YY_4vpVLUFh3eQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-purple-50 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Users className="w-5 h-5" />
                Join Our Team
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
