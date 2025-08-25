import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Sparkles, 
  Wand2, 
  Image, 
  FileText,
  Target,
  BarChart3,
  Download,
  RefreshCw,
  Eye,
  Palette,
  Settings
} from "lucide-react";

const Generate = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedContent, setGeneratedContent] = useState({
    headlines: [
      "Transform Your Business with AI-Powered Solutions",
      "Revolutionize Your Workflow in Just 5 Minutes",
      "Join 10,000+ Companies Already Saving Time with AI"
    ],
    bodyCopy: [
      "Discover how leading companies are using AI to streamline operations, boost productivity, and drive growth. Our platform makes it easy to get started with powerful automation tools.",
      "Stop wasting time on repetitive tasks. Our AI-powered platform automates your workflow so you can focus on what matters most - growing your business.",
      "Experience the future of business automation. Transform complex processes into simple, AI-driven workflows that save time and increase efficiency."
    ],
    ctas: ["Get Started Free", "Try AI Now", "Start Your Journey", "Book Demo"],
    images: [
      { url: "/api/placeholder/400/300", style: "Modern", description: "Clean business interface" },
      { url: "/api/placeholder/400/300", style: "Bold", description: "Dynamic growth visualization" },
      { url: "/api/placeholder/400/300", style: "Minimalist", description: "Simple productivity concept" }
    ]
  });

  const [briefData, setBriefData] = useState({
    campaignName: "",
    objective: "",
    targetAudience: "",
    keyMessage: "",
    cta: ""
  });

  const startGeneration = () => {
    setGenerating(true);
    setProgress(0);
    
    // Simulate AI generation process
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setGenerating(false);
          setCurrentStep(3);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const renderBriefStep = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Campaign Brief</h2>
        <p className="text-muted-foreground">Tell us about your campaign goals and target audience</p>
      </div>

      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="campaignName">Campaign Name</Label>
          <Input
            id="campaignName"
            placeholder="e.g., Summer Product Launch"
            value={briefData.campaignName}
            onChange={(e) => setBriefData({...briefData, campaignName: e.target.value})}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="objective">Primary Objective</Label>
          <Select value={briefData.objective} onValueChange={(value) => setBriefData({...briefData, objective: value})}>
            <SelectTrigger>
              <SelectValue placeholder="What's your main goal?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sales">Drive Sales</SelectItem>
              <SelectItem value="leads">Generate Leads</SelectItem>
              <SelectItem value="awareness">Brand Awareness</SelectItem>
              <SelectItem value="engagement">Increase Engagement</SelectItem>
              <SelectItem value="traffic">Website Traffic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="audience">Target Audience</Label>
          <Input
            id="audience"
            placeholder="e.g., Tech professionals aged 25-40"
            value={briefData.targetAudience}
            onChange={(e) => setBriefData({...briefData, targetAudience: e.target.value})}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Key Message</Label>
          <Textarea
            id="message"
            placeholder="What's the main value proposition you want to communicate?"
            value={briefData.keyMessage}
            onChange={(e) => setBriefData({...briefData, keyMessage: e.target.value})}
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cta">Preferred Call-to-Action</Label>
          <Input
            id="cta"
            placeholder="e.g., Sign Up Free, Learn More, Buy Now"
            value={briefData.cta}
            onChange={(e) => setBriefData({...briefData, cta: e.target.value})}
          />
        </div>
      </div>

      <Button variant="hero" onClick={startGeneration} className="w-full" size="lg">
        <Wand2 className="h-5 w-5 mr-2" />
        Generate AI Content
      </Button>
    </div>
  );

  const renderGenerationStep = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="p-3 bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
          <Sparkles className="h-8 w-8 text-accent animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold">AI is Creating Your Content</h2>
        <p className="text-muted-foreground">Our advanced AI models are analyzing your brief and generating personalized content</p>
      </div>

      <Card className="p-6 bg-gradient-card">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Generation Progress</span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3" />
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${progress > 20 ? 'bg-accent' : 'bg-muted'}`} />
              <span className={progress > 20 ? 'text-foreground' : 'text-muted-foreground'}>
                Analyzing campaign objectives
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${progress > 40 ? 'bg-accent' : 'bg-muted'}`} />
              <span className={progress > 40 ? 'text-foreground' : 'text-muted-foreground'}>
                Researching target audience
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${progress > 60 ? 'bg-accent' : 'bg-muted'}`} />
              <span className={progress > 60 ? 'text-foreground' : 'text-muted-foreground'}>
                Generating personalized copy
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${progress > 80 ? 'bg-accent' : 'bg-muted'}`} />
              <span className={progress > 80 ? 'text-foreground' : 'text-muted-foreground'}>
                Creating visual concepts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${progress === 100 ? 'bg-accent' : 'bg-muted'}`} />
              <span className={progress === 100 ? 'text-foreground' : 'text-muted-foreground'}>
                Optimizing for performance
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderResultsStep = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="p-3 bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
          <Eye className="h-8 w-8 text-accent" />
        </div>
        <h2 className="text-2xl font-bold">Your AI-Generated Content</h2>
        <p className="text-muted-foreground">Review and customize your personalized ad content</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Headlines</h3>
            </div>
            <div className="space-y-2">
              {generatedContent.headlines.map((headline, index) => (
                <Card key={index} className="p-4 hover:bg-accent/5 cursor-pointer border-l-4 border-l-primary/20">
                  <p className="font-medium">{headline}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">Body Copy</h3>
            </div>
            <div className="space-y-2">
              {generatedContent.bodyCopy.map((copy, index) => (
                <Card key={index} className="p-4 hover:bg-accent/5 cursor-pointer">
                  <p className="text-sm leading-relaxed">{copy}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-accent-orange" />
              <h3 className="font-semibold">Call-to-Action</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {generatedContent.ctas.map((cta, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-accent-orange/10">
                  {cta}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image className="h-5 w-5 text-accent-blue" />
              <h3 className="font-semibold">Visual Concepts</h3>
            </div>
            <div className="grid gap-4">
              {generatedContent.images.map((image, index) => (
                <Card key={index} className="p-4 hover:shadow-card transition-all cursor-pointer">
                  <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <Image className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{image.style}</Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Performance Prediction */}
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-primary">Performance Prediction</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">8.7%</div>
                  <div className="text-sm text-primary/80">Expected CTR</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">94%</div>
                  <div className="text-sm text-primary/80">Audience Match</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={() => setCurrentStep(1)}>
          Generate New Version
        </Button>
        <Button variant="outline">
          <Palette className="h-4 w-4 mr-2" />
          Customize
        </Button>
        <Button variant="generate">
          <Download className="h-4 w-4 mr-2" />
          Export Content
        </Button>
      </div>
    </div>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">AI Ad Generator</h1>
              <p className="text-muted-foreground">
                Create personalized advertisements powered by advanced AI technology
              </p>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                      currentStep >= step 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step}
                    </div>
                    <span className={`text-sm ${
                      currentStep >= step ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step === 1 ? 'Brief' : step === 2 ? 'Generate' : 'Review'}
                    </span>
                    {step < 3 && <div className="w-8 h-0.5 bg-border" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <Card className="p-8 shadow-elevated bg-gradient-card border">
              {currentStep === 1 && !generating && renderBriefStep()}
              {(currentStep === 2 || generating) && renderGenerationStep()}
              {currentStep === 3 && !generating && renderResultsStep()}
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Generate;