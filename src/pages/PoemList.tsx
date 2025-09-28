import { Link } from "react-router-dom";
import { poems } from "@/data/poems";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import fatherSonImage from "@/assets/father-son-sunset.jpg";

const PoemList = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl animate-glow">
              Happy 46th Birthday, Dad!
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white/90 mb-8 drop-shadow-lg">
              shhhhh
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
              Late night coding session of 28 September.
            </p>
          </div>
        </div>
      </div>

      {/* Poems Grid */}
      <div className="container mx-auto px-4 py-16 -mt-12 relative z-20">
        <div className="text-center mb-12 animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground/90 mb-4">
            Select a card to view.
          </h3>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poems.map((poem, index) => (
            <Link 
              key={poem.id} 
              to={`/poem/${poem.id}`} 
              className="group block animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="h-full transition-all duration-500 hover:shadow-warm hover:shadow-glow hover:-translate-y-2 hover:bg-gradient-card-hover bg-gradient-card border-0 backdrop-blur-sm group-hover:scale-[1.02] transform-gpu">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center text-white font-bold text-lg shadow-soft">
                      {index + 1}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-serif font-semibold text-primary group-hover:text-accent transition-all duration-300 line-height-tight">
                    {poem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 font-light">
                    {poem.content.slice(0, 2).join(" ")}...
                  </p>
                  <div className="flex items-center text-sm text-accent/80 font-medium group-hover:text-accent transition-all duration-300">
                    <span>Read full poem</span>
                    <svg className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Decorative Element */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-sunset shadow-glow">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <p className="mt-4 text-muted-foreground font-light">
            hehehehehehehehehehehehe
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoemList;