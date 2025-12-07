import React from 'react';

export default function IndiaMapSVG({ onStateClick, onStateHover, selectedStateId }) {
  // Comprehensive list of all Indian states and union territories with proper geographical positioning
  const states = [
    // Northern States
    { id: 'jammu-and-kashmir', name: 'Jammu and Kashmir', path: "M280 40L320 35L340 50L350 80L330 85L310 75L285 70Z", color: '#e3f2fd' },
    { id: 'ladakh', name: 'Ladakh', path: "M350 30L390 25L410 45L400 65L380 60L355 50Z", color: '#f3e5f5' },
    { id: 'himachal-pradesh', name: 'Himachal Pradesh', path: "M310 75L340 80L350 95L320 100L300 90Z", color: '#e8f5e8' },
    { id: 'punjab', name: 'Punjab', path: "M285 95L315 100L320 115L295 120L280 105Z", color: '#fff3e0' },
    { id: 'chandigarh', name: 'Chandigarh', path: "M300 105L305 110L300 115L295 110Z", color: '#fce4ec' },
    { id: 'haryana', name: 'Haryana', path: "M295 115L325 120L340 140L315 145L285 130Z", color: '#e0f2f1' },
    { id: 'delhi', name: 'Delhi', path: "M320 125L330 130L325 140L315 135Z", color: '#f1f8e9' },
    { id: 'uttarakhand', name: 'Uttarakhand', path: "M340 95L370 100L375 125L350 130L335 115Z", color: '#e8eaf6' },
    { id: 'uttar-pradesh', name: 'Uttar Pradesh', path: "M315 145L385 150L395 185L365 190L340 175L310 165Z", color: '#fafafa' },
    
    // Central States  
    { id: 'rajasthan', name: 'Rajasthan', path: "M225 140L310 150L315 200L280 210L240 195L220 170Z", color: '#fff8e1' },
    { id: 'madhya-pradesh', name: 'Madhya Pradesh', path: "M280 185L365 195L375 230L340 240L305 225L275 210Z", color: '#f3e5f5' },
    { id: 'chhattisgarh', name: 'Chhattisgarh', path: "M375 230L415 235L420 265L395 270L370 255Z", color: '#e8f5e8' },
    
    // Western States
    { id: 'gujarat', name: 'Gujarat', path: "M180 200L240 210L235 260L195 270L170 240Z", color: '#e1f5fe' },
    { id: 'daman-and-diu', name: 'Daman and Diu', path: "M190 240L200 245L195 250L185 245Z", color: '#ffebee' },
    { id: 'dadra-and-nagar-haveli', name: 'Dadra and Nagar Haveli', path: "M205 250L215 255L210 260L200 255Z", color: '#f9fbe7' },
    { id: 'maharashtra', name: 'Maharashtra', path: "M235 260L340 270L355 320L320 330L280 315L240 295Z", color: '#fff3e0' },
    { id: 'goa', name: 'Goa', path: "M280 315L295 325L290 335L275 330Z", color: '#e8f5e8' },
    
    // Southern States
    { id: 'karnataka', name: 'Karnataka', path: "M290 335L355 340L360 385L325 395L295 380Z", color: '#fce4ec' },
    { id: 'kerala', name: 'Kerala', path: "M295 380L325 390L335 435L310 445L285 425Z", color: '#e0f2f1' },
    { id: 'tamil-nadu', name: 'Tamil Nadu', path: "M335 385L385 390L395 435L370 445L340 425Z", color: '#f1f8e9' },
    { id: 'puducherry', name: 'Puducherry', path: "M360 420L370 425L365 430L355 425Z", color: '#ffebee' },
    { id: 'andhra-pradesh', name: 'Andhra Pradesh', path: "M355 320L410 325L415 365L385 375L350 360Z", color: '#e8eaf6' },
    { id: 'telangana', name: 'Telangana', path: "M340 270L385 275L390 310L365 320L335 305Z", color: '#f3e5f5' },
    
    // Eastern States
    { id: 'odisha', name: 'Odisha', path: "M395 270L450 275L460 320L430 330L400 315Z", color: '#fff8e1' },
    { id: 'jharkhand', name: 'Jharkhand', path: "M395 235L445 240L450 275L420 280L390 265Z", color: '#e1f5fe' },
    { id: 'west-bengal', name: 'West Bengal', path: "M450 240L495 245L510 290L485 300L460 285Z", color: '#f9fbe7' },
    { id: 'bihar', name: 'Bihar', path: "M395 190L450 195L455 235L425 240L390 225Z", color: '#ffebee' },
    
    // Northeastern States
    { id: 'sikkim', name: 'Sikkim', path: "M485 180L500 185L495 200L480 195Z", color: '#e8f5e8' },
    { id: 'assam', name: 'Assam', path: "M510 200L580 205L590 240L560 245L520 230Z", color: '#fce4ec' },
    { id: 'arunachal-pradesh', name: 'Arunachal Pradesh', path: "M520 160L590 165L600 200L570 205L530 190Z", color: '#e0f2f1' },
    { id: 'nagaland', name: 'Nagaland', path: "M580 230L610 235L605 250L575 245Z", color: '#f1f8e9' },
    { id: 'manipur', name: 'Manipur', path: "M575 250L600 255L595 270L570 265Z", color: '#e8eaf6' },
    { id: 'mizoram', name: 'Mizoram', path: "M560 270L585 275L580 290L555 285Z", color: '#f3e5f5' },
    { id: 'tripura', name: 'Tripura', path: "M540 275L565 280L560 295L535 290Z", color: '#fff8e1' },
    { id: 'meghalaya', name: 'Meghalaya', path: "M520 245L555 250L550 265L525 260Z", color: '#e1f5fe' },
    
    // Island Territories
    { id: 'andaman-and-nicobar-islands', name: 'Andaman and Nicobar Islands', path: "M650 380L665 385L670 420L655 425L645 400Z", color: '#f9fbe7' },
    { id: 'lakshadweep', name: 'Lakshadweep', path: "M150 380L165 385L160 400L145 395Z", color: '#ffebee' }
  ];

  const handleMouseEnter = (state) => {
    onStateHover(state.id);
  };
  
  const handleClick = (state) => {
    onStateClick(state.id);
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-4">
      <svg 
        viewBox="0 0 700 500" 
        className="w-full h-full drop-shadow-lg"
        aria-label="Interactive map of India"
      >
        {/* Map title */}
        <text x="350" y="30" textAnchor="middle" className="fill-gray-700 text-lg font-bold">
          🇮🇳 Interactive Map of India
        </text>
        
        {/* States and UTs */}
        <g>
          {states.map(state => (
            <path
              key={state.id}
              id={state.id}
              d={state.path}
              className={`cursor-pointer transition-all duration-300 stroke-white stroke-2 ${
                selectedStateId === state.id 
                  ? 'fill-orange-400 stroke-orange-600 stroke-4 drop-shadow-lg' 
                  : 'hover:fill-orange-200 hover:stroke-orange-400 hover:stroke-3'
              }`}
              fill={selectedStateId === state.id ? '#fb923c' : state.color}
              onClick={() => handleClick(state)}
              onMouseEnter={() => handleMouseEnter(state)}
            />
          ))}
        </g>
        
        {/* Legend */}
        <g transform="translate(20, 400)">
          <rect x="0" y="0" width="160" height="80" fill="white" stroke="#ccc" rx="8" opacity="0.9"/>
          <text x="10" y="20" className="fill-gray-700 text-sm font-semibold">Legend:</text>
          <text x="10" y="40" className="fill-gray-600 text-xs">• Hover to explore</text>
          <text x="10" y="55" className="fill-gray-600 text-xs">• Click to learn more</text>
          <text x="10" y="70" className="fill-gray-600 text-xs">• 28 States + 8 UTs</text>
        </g>
      </svg>
    </div>
  );
}