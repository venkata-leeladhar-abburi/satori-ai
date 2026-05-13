const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const startTag = '{/* Workflow Tools Grid Section */}';
const endTag = '{/* Metrics Section */}';

const startIndex = code.indexOf(startTag);
const endIndex = code.indexOf(endTag);

const newFeatures = `        {/* Features 1: Designed to simplify customer management */}
        <section className="bg-[#FDFBF7] pt-24 pb-12 border-t border-[#EAE0D5]">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#FF5C00] rounded-[1px]" />
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Features</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-serif text-[#3E1C00] mb-6 tracking-tight leading-[1.1]">
              Designed to simplify<br/>customer management
            </h2>
            <p className="text-[15px] text-stone-500 max-w-xl mx-auto leading-relaxed">
              Nex CRM helps businesses manage relationships, close<br/>deals faster, and simplify daily operations.
            </p>
          </div>

          <div className="w-full px-4">
            <div className="max-w-[1000px] mx-auto border-y border-[#EAE0D5] grid md:grid-cols-3 bg-[#FDFBF7]">
              
              {/* Card 1: Total Contacts */}
              <div className="p-10 lg:p-12 flex flex-col items-center justify-between text-center border-b md:border-b-0 md:border-r border-[#EAE0D5] bg-[#FDFBF7]">
                <div className="w-full h-[180px] flex items-end justify-center gap-4 mb-8">
                  <div className="w-16 h-[100px] bg-[#3E1C00] rounded-md relative flex items-end justify-center pb-2">
                    <span className="text-white text-[11px] font-bold">12K</span>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-white rounded-full border border-stone-100 flex items-center justify-center shadow-sm">
                      <ArrowUpRight className="w-3 h-3 text-[#FF5C00]" />
                    </div>
                  </div>
                  <div className="w-16 h-[140px] bg-[#FF5C00] rounded-md relative flex items-end justify-center pb-2">
                    <span className="text-white text-[11px] font-bold">24K</span>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-white rounded-full border border-stone-100 flex items-center justify-center shadow-sm">
                      <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#FF5C00] rounded-[1px]" />
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Total Contacts</span>
                </div>
                <h3 className="text-[15px] text-stone-400 leading-snug">Easily add, edit, and organize client information.</h3>
              </div>

              {/* Card 2: Target Audience */}
              <div className="p-10 lg:p-12 flex flex-col items-center justify-between text-center border-b md:border-b-0 md:border-r border-[#EAE0D5] bg-[#FDFBF7]">
                <div className="w-full h-[180px] flex flex-col items-center justify-center mb-8 relative">
                   <div className="flex items-center gap-1 mb-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                     <span className="text-[11px] text-emerald-500 font-bold">+15%</span>
                   </div>
                   <div className="text-[2.5rem] font-bold text-[#FF5C00] leading-none mb-6">$608.00</div>
                   <div className="flex items-end justify-center gap-1.5 h-[60px]">
                      {[40, 20, 60, 40, 80, 50, 70, 30, 90, 60, 40, 70, 50, 30].map((h, i) => (
                        <div key={i} className="w-1.5 rounded-full bg-[#EAE0D5]" style={{ height: \`\${h}%\` }} />
                      ))}
                   </div>
                   <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FDFBF7] to-transparent" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#FF5C00] rounded-[1px]" />
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Target Audience</span>
                </div>
                <h3 className="text-[15px] text-stone-400 leading-snug">Track where your leads come from and analyze.</h3>
              </div>

              {/* Card 3: Performance */}
              <div className="p-10 lg:p-12 flex flex-col items-center justify-between text-center bg-[#FDFBF7]">
                <div className="w-full h-[180px] flex items-center justify-center mb-8 relative">
                  <div className="relative w-40 h-20 overflow-hidden">
                    {/* Gauge background */}
                    <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-[16px] border-[#EAE0D5] border-b-transparent border-l-transparent transform rotate-45" />
                    {/* Gauge fill */}
                    <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-[16px] border-[#FF5C00] border-b-transparent border-l-transparent transform rotate-45" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', rotate: '-30deg' }} />
                  </div>
                  <div className="absolute bottom-6 flex flex-col items-center">
                    <span className="text-[2rem] font-bold text-[#3E1C00] leading-none">88%</span>
                    <span className="text-[9px] text-stone-400 font-bold uppercase tracking-widest">PERFORMANCE</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#FF5C00] rounded-[1px]" />
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Performance</span>
                </div>
                <h3 className="text-[15px] text-stone-400 leading-snug">Track performance metrics in real time.</h3>
              </div>
              
            </div>
          </div>
        </section>

        {/* Features 2: Simplify daily tasks */}
        <section className="bg-[#FDFBF7] pb-24">
          <div className="max-w-[1000px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column (Text) */}
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-[#FF5C00] rounded-[1px]" />
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Features</span>
                </div>
                <h2 className="text-4xl md:text-[3.5rem] font-serif text-[#3E1C00] mb-6 tracking-tight leading-[1.1]">
                  Simplify daily tasks and<br/>optimize workflows
                </h2>
                <p className="text-[15px] text-stone-500 mb-12 max-w-sm leading-relaxed">
                  Nex CRM helps businesses manage relationships, close deals faster.
                </p>

                <div className="space-y-8 w-full">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 mt-1 rounded bg-orange-100 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-[#FF5C00] rounded-[2px]" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#3E1C00] mb-2">Quickly create and assign tasks</h4>
                      <p className="text-[13px] text-stone-500 leading-relaxed max-w-[280px]">Nex CRM helps businesses manage relationships, close deals faster.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 mt-1 rounded bg-[#F6F3EC] flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-[#3E1C00] rounded-[2px]" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-stone-400 mb-2">Set deadlines and priorities</h4>
                      <p className="text-[13px] text-stone-400 leading-relaxed max-w-[280px]">Nex CRM helps businesses manage relationships, close deals faster.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 mt-1 rounded bg-[#F6F3EC] flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-[#3E1C00] rounded-[2px]" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-stone-400 mb-2">Monitor team performance</h4>
                      <p className="text-[13px] text-stone-400 leading-relaxed max-w-[280px]">Nex CRM helps businesses manage relationships, close deals faster.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Bento Graphic) */}
              <div className="bg-[#FAF8F3] rounded-[2rem] p-8 lg:p-12 relative flex items-center justify-center min-h-[500px]">
                <div className="w-full max-w-[360px] flex flex-col gap-4 relative z-10">
                  
                  {/* Top: Task List */}
                  <div className="bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden">
                    <div className="bg-[#3E1C00] p-4 flex justify-between items-center">
                      <span className="text-white font-bold text-xs">Task List</span>
                      <button className="bg-white/10 text-white text-[10px] px-2 py-1 rounded">View all</button>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-stone-200" />
                          <span className="text-[11px] font-bold text-[#3E1C00]">Follow up with client A</span>
                        </div>
                        <span className="text-[9px] text-[#FF5C00] font-bold bg-orange-50 px-2 py-0.5 rounded">High</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full bg-[#FF5C00] flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-[11px] font-bold text-stone-400 line-through">Prepare Q3 report</span>
                        </div>
                        <span className="text-[9px] text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded">Done</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Chart */}
                  <div className="bg-white rounded-xl shadow-lg border border-stone-100 p-5">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-[11px] font-bold text-[#3E1C00] mb-1">Task completion rate</h4>
                        <span className="text-[9px] text-stone-400">Weekly overview</span>
                      </div>
                      <button className="text-[9px] text-stone-400 font-bold border border-stone-100 rounded px-2 py-1">This Week</button>
                    </div>
                    <div className="flex items-end justify-between gap-2 h-20">
                      {[30, 40, 20, 80, 50, 40, 30].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2">
                          <div className={\`w-full rounded-sm \${i === 3 ? 'bg-[#FF5C00]' : 'bg-[#EAE0D5]'}\`} style={{ height: \`\${h}%\` }} />
                          <span className="text-[8px] font-bold text-stone-400">{'SMTWTFS'[i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Calendar dots */}
                  <div className="bg-white rounded-xl shadow-lg border border-stone-100 p-5 flex justify-between items-center">
                     <div>
                        <h4 className="text-[11px] font-bold text-[#3E1C00] mb-1">Task distribution</h4>
                        <span className="text-[9px] text-stone-400">Monthly map</span>
                     </div>
                     <div className="grid grid-cols-[repeat(10,minmax(0,1fr))] gap-1">
                        {[...Array(30)].map((_, i) => (
                           <div key={i} className="w-1.5 h-1.5 rounded-[2px]" style={{ backgroundColor: [4, 7, 12, 14, 15, 22].includes(i) ? '#FF5C00' : '#EAE0D5' }} />
                        ))}
                     </div>
                  </div>

                </div>
                {/* Background grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

            </div>
          </div>
        </section>
`;

code = code.substring(0, startIndex) + newFeatures + '\n' + code.substring(endIndex);
fs.writeFileSync('src/app/page.tsx', code);
console.log('Features blocks updated.');
