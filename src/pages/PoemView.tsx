import { useParams, Link, useNavigate } from "react-router-dom";
import { poems } from "@/data/poems";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const PoemView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const currentPoemIndex = poems.findIndex(poem => poem.id === id);
  const poem = poems[currentPoemIndex];
  
  if (!poem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Poem not found</h1>
          <Link to="/">
            <Button variant="default">Back to poems</Button>
          </Link>
        </div>
      </div>
    );
  }

  const previousPoem = poems[currentPoemIndex - 1];
  const nextPoem = poems[currentPoemIndex + 1];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 px-6 py-3 rounded-full"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            All Poems
          </Button>
          <div className="flex items-center gap-3 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <Heart className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-muted-foreground font-medium">
              {currentPoemIndex + 1} of {poems.length}
            </span>
          </div>
        </div>

        {/* Poem Card */}
        <Card className="mb-12 bg-gradient-card border-0 shadow-warm shadow-glow backdrop-blur-sm animate-slide-up">
          <CardHeader className="text-center pb-8 pt-12">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-sunset flex items-center justify-center shadow-soft mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v8h2v-8zm4 0h-2v8h2v-8zm4 0h-2v8h2v-8zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5V5h18V3.5C21 2.67 20.33 2 19.5 2z"/>
                  <path d="M19 7H5v11c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V7z"/>
                </svg>
              </div>
              <CardTitle className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4 leading-tight">
                {poem.title}
              </CardTitle>
              {poem.author && (
                <p className="text-muted-foreground text-lg font-light italic">by {poem.author}</p>
              )}
            </div>
          </CardHeader>
          <CardContent className="max-w-3xl mx-auto px-8 pb-12">
            <div className="space-y-6">
              {poem.content.map((line, index) => (
                <p 
                  key={index} 
                  className={`text-lg md:text-xl leading-relaxed transition-all duration-500 animate-fade-in font-light ${
                    line.trim() === '' ? 'h-6' : 'text-foreground/90 hover:text-foreground'
                  }`}
                  style={{ 
                    animationDelay: `${index * 150 + 300}ms`,
                    fontFamily: line.trim() === '' ? 'inherit' : 'inherit'
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
            
            {/* Decorative quote marks */}
            <div className="flex justify-center mt-12">
              <div className="text-6xl text-accent/20 font-serif leading-none">"</div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 animate-fade-in min-w-0 overflow-hidden">
          {previousPoem ? (
            <Link to={`/poem/${previousPoem.id}`} className="flex-1 min-w-0">
              <Button variant="outline" className="w-full max-w-full justify-start group h-14 md:h-16 bg-gradient-card hover:bg-gradient-card-hover border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
                <ChevronLeft className="h-5 w-5 mr-3 group-hover:-translate-x-2 transition-all duration-300 text-accent" />
                <div className="text-left min-w-0">
                  <div className="text-xs text-muted-foreground font-medium mb-1">Previous</div>
                  <div className="font-semibold truncate text-foreground group-hover:text-primary transition-colors max-w-full">
                    {previousPoem.title}
                  </div>
                </div>
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <div className="flex-shrink-0 mx-2">
            <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center shadow-soft">
              <Heart className="w-6 h-6 text-white animate-pulse" />
            </div>
          </div>

          {nextPoem ? (
            <Link to={`/poem/${nextPoem.id}`} className="flex-1 min-w-0">
              <Button variant="outline" className="w-full max-w-full justify-end group h-14 md:h-16 bg-gradient-card hover:bg-gradient-card-hover border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
                <div className="text-right min-w-0">
                  <div className="text-xs text-muted-foreground font-medium mb-1">Next</div>
                  <div className="font-semibold truncate text-foreground group-hover:text-primary transition-colors max-w-full">
                    {nextPoem.title}
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-all duration-300 text-accent" />
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PoemView;