import React from 'react';
import skillsList from '../../public/scripts/skills';

const Skills = () => {
  return (
    <div className="py-8 text-white">
      <div className="container mx-auto">
        <h2 className="text-lg font-medium mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {skillsList.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
            >
              <img src={skill.icon} alt="" className='mr-2 w-8 h-8'/>
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;