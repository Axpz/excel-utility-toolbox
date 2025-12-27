import Link from "next/link";
import { Search, ArrowLeft, Clock, HelpCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "VLOOKUP Helper - Coming Soon | Excel Utility Toolbox",
  description: "Simplify VLOOKUP and XLOOKUP operations. This feature is currently under development. Check back soon for updates.",
};

export default function VlookupHelperPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft size={18} />
        <span>Back to Home</span>
      </Link>

      {/* Main Content */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-orange-500 to-red-500 text-white mb-6 shadow-lg shadow-orange-500/30">
          <Search size={40} />
        </div>
        
        <Badge variant="secondary" className="mb-4">
          <Clock size={14} className="mr-1.5" />
          Under Development
        </Badge>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D6F42]">
          VLOOKUP Helper
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          This feature is currently under development. We&apos;re working hard to bring you an intuitive tool that simplifies VLOOKUP and XLOOKUP operations.
        </p>
      </div>

      {/* Feature Preview Card */}
      <Card className="mb-8 border-2 border-dashed border-muted">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              <HelpCircle size={20} />
            </div>
            <CardTitle className="text-xl">What to Expect</CardTitle>
          </div>
          <CardDescription>
            Here&apos;s what this tool will offer once it&apos;s ready
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#1D6F42] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                ✓
              </div>
              <span>Generate VLOOKUP and XLOOKUP formulas with visual guidance</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#1D6F42] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                ✓
              </div>
              <span>Interactive table selection and range detection</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#1D6F42] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                ✓
              </div>
              <span>Formula validation and error checking</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#1D6F42] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                ✓
              </div>
              <span>100% browser-based processing - your data never leaves your device</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Alternative Tools */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-lg text-[#1D6F42]">Try Our Other Tools</CardTitle>
          <CardDescription>
            While you wait, explore our available tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Link href="/tools/text-cleaner">
              <Button variant="outline" className="hover:bg-[#1D6F42] hover:text-white transition-all">
                Text Cleaner
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="hover:bg-[#1D6F42] hover:text-white transition-all">
                View All Tools
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Info Message */}
      <Card className="mt-8 border-0 shadow-none bg-white/50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1D6F42] text-white flex items-center justify-center shrink-0 mt-0.5">
              <Clock size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-[#1D6F42] mb-1">We&apos;re Working on It</h3>
              <p className="text-sm text-muted-foreground">
                Thank you for your patience. We&apos;re committed to delivering a high-quality, privacy-first tool that processes everything in your browser. 
                Check back soon for updates!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

