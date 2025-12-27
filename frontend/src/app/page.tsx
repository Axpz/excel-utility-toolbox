import Link from "next/link";
import {
  Sparkles,
  Eraser,
  RefreshCw,
  Search,
  Shield,
  Zap,
  Lock,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tools = [
  {
    title: "Image to Excel",
    description: "Convert images to Excel spreadsheets",
    icon: Sparkles,
    href: "/tools/image-to-excel",
    status: "active",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Formula Generator",
    description: "Generate complex Excel formulas using natural language",
    icon: Sparkles,
    href: "/tools/formula-generator",
    status: "coming-soon",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Text Cleaner",
    description: "Remove spaces, duplicates, extract numbers, and more",
    icon: Eraser,
    href: "/tools/text-cleaner",
    status: "active",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Format Converter",
    description: "Convert between CSV, JSON, XML, and Excel formats",
    icon: RefreshCw,
    href: "/tools/format-converter",
    status: "coming-soon",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "VLOOKUP Helper",
    description: "Simplify VLOOKUP and XLOOKUP operations",
    icon: Search,
    href: "/tools/vlookup-helper",
    status: "coming-soon",
    gradient: "from-orange-500 to-red-500",
  },
];

const features = [
  {
    icon: Lock,
    title: "Privacy First",
    description: "All processing happens in your browser. No data ever leaves your device.",
  },
  {
    icon: Zap,
    title: "Instant & Fast",
    description: "No uploads, no waiting. Results appear instantly as you work.",
  },
  {
    icon: Shield,
    title: "No Sign-Up Required",
    description: "Start using tools immediately. Zero friction, zero hassle.",
  },
];

const faqs = [
  {
    question: "Is my data safe?",
    answer: "Absolutely. All processing happens locally in your browser using JavaScript. Your data never touches our servers or leaves your device.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No! All tools are completely free and accessible without any registration or login.",
  },
  {
    question: "What file formats are supported?",
    answer: "Currently, you can paste text directly. We're working on supporting Excel (.xlsx), CSV, and other common formats.",
  },
  {
    question: "Will this work offline?",
    answer: "Once the page loads, most tools will work offline since all processing happens in your browser.",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#1D6F42]/10 text-[#1D6F42] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield size={16} />
            Privacy-First · No Upload · 100% Browser-Based
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#1D6F42] to-green-700 bg-clip-text text-transparent">
            Excel Utility Toolbox
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Professional Excel utilities that respect your privacy. 
            Clean data, generate formulas, and transform spreadsheets - 
            all processed locally in your browser with zero uploads.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools/text-cleaner">
              <button className="px-8 py-4 bg-[#1D6F42] text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40">
                Try Text Cleaner →
              </button>
            </Link>
            <a href="#tools">
              <button className="px-8 py-4 bg-white text-foreground rounded-xl font-semibold hover:bg-gray-50 transition-all border border-gray-200">
                Browse All Tools
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-[#1D6F42]/50 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1D6F42] text-white mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Tools</h2>
          <p className="text-muted-foreground">Choose a tool to get started</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            const isActive = tool.status === "active";
            
            return (
              <Link 
                href={isActive ? tool.href : "#"} 
                key={index}
                className={!isActive ? "pointer-events-none" : ""}
              >
                <Card className={`h-full transition-all hover:shadow-xl border-2 ${
                  isActive 
                    ? "hover:border-[#1D6F42] cursor-pointer" 
                    : "opacity-60"
                }`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${tool.gradient} flex items-center justify-center text-white shadow-lg`}>
                        <Icon size={24} />
                      </div>
                      {!isActive && (
                        <Badge variant="secondary" className="text-xs">
                          Coming Soon
                        </Badge>
                      )}
                      {isActive && (
                        <Badge variant="success" className="text-xs">
                          Active
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <Card className="border-0 shadow-none bg-white/50">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-bold mb-6 text-[#1D6F42]">
              Why Excel Utility Toolbox?
            </h2>
            
            <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
              <p>
                Excel is the world&apos;s most powerful spreadsheet tool, but common tasks like cleaning data, 
                removing duplicates, or generating complex formulas can be time-consuming and repetitive. 
                Our Excel Utility Toolbox brings you a curated collection of browser-based tools designed 
                to supercharge your productivity.
              </p>
              
              <p>
                Unlike traditional desktop add-ins or cloud services that require uploading sensitive data, 
                our tools run entirely in your browser. This means your financial records, customer lists, 
                and business data never leave your device. It&apos;s the perfect solution for professionals who 
                value both efficiency and data privacy.
              </p>
              
              <p>
                Whether you&apos;re a data analyst cleaning messy datasets, a business owner managing inventory 
                spreadsheets, or a student organizing research data, our tools help you work faster and smarter. 
                No installation required, no subscriptions, no waiting - just instant, powerful utilities that 
                respect your privacy and your time.
              </p>

              <p className="font-semibold text-foreground">
                Start with our Text Cleaner tool to remove unwanted spaces, eliminate duplicate entries, 
                extract numbers, and transform text case - all with a single click. More powerful tools 
                are coming soon, including an AI-powered formula generator and advanced data transformation utilities.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
