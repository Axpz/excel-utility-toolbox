"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Eraser, 
  Copy, 
  RotateCcw, 
  Check,
  Type,
  Hash,
  Trash2
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TextCleaner() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [copied, setCopied] = useState(false);

  const removeAllSpaces = () => {
    const result = inputText.replace(/\s+/g, "");
    setOutputText(result);
  };

  const removeDuplicates = () => {
    const lines = inputText.split("\n");
    const uniqueLines = [...new Set(lines)];
    setOutputText(uniqueLines.join("\n"));
  };

  const extractNumbers = () => {
    const numbers = inputText.match(/\d+/g);
    setOutputText(numbers ? numbers.join("\n") : "");
  };

  const convertToUppercase = () => {
    setOutputText(inputText.toUpperCase());
  };

  const convertToLowercase = () => {
    setOutputText(inputText.toLowerCase());
  };

  const copyToClipboard = async () => {
    if (!outputText) return;
    
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const reset = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1D6F42] text-white mb-4 shadow-lg shadow-green-600/30">
          <Eraser size={32} />
        </div>
        <h1 className="text-4xl font-bold mb-3 text-[#1D6F42]">Text Cleaner</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Clean and transform your Excel data instantly. All processing happens in your browser - your data never leaves your device.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Input</CardTitle>
            <CardDescription>Paste your text or table data here</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Paste your data here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[300px] font-mono text-sm"
            />
            <div className="mt-3 text-xs text-muted-foreground">
              {inputText.length} characters · {inputText.split("\n").length} lines
            </div>
          </CardContent>
        </Card>

        {/* Output Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              Output
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                disabled={!outputText}
                className={cn(
                  "transition-all",
                  copied && "bg-green-50 text-green-600 border-green-200"
                )}
              >
                {copied ? (
                  <>
                    <Check size={16} className="mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </CardTitle>
            <CardDescription>Cleaned result appears here</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Result will appear here..."
              value={outputText}
              readOnly
              className="min-h-[300px] font-mono text-sm bg-gray-50"
            />
            <div className="mt-3 text-xs text-muted-foreground">
              {outputText.length} characters · {outputText.split("\n").length} lines
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Actions</CardTitle>
          <CardDescription>Choose a text transformation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Button
              onClick={removeAllSpaces}
              disabled={!inputText}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-[#1D6F42] hover:text-white transition-all"
            >
              <Eraser size={20} />
              <div className="text-center">
                <div className="font-semibold">Remove Spaces</div>
                <div className="text-xs opacity-70">Delete all whitespace</div>
              </div>
            </Button>

            <Button
              onClick={removeDuplicates}
              disabled={!inputText}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-[#1D6F42] hover:text-white transition-all"
            >
              <Trash2 size={20} />
              <div className="text-center">
                <div className="font-semibold">Remove Duplicates</div>
                <div className="text-xs opacity-70">Keep unique lines only</div>
              </div>
            </Button>

            <Button
              onClick={extractNumbers}
              disabled={!inputText}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-[#1D6F42] hover:text-white transition-all"
            >
              <Hash size={20} />
              <div className="text-center">
                <div className="font-semibold">Extract Numbers</div>
                <div className="text-xs opacity-70">Only keep digits</div>
              </div>
            </Button>

            <Button
              onClick={convertToUppercase}
              disabled={!inputText}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-[#1D6F42] hover:text-white transition-all"
            >
              <Type size={20} />
              <div className="text-center">
                <div className="font-semibold">UPPERCASE</div>
                <div className="text-xs opacity-70">Convert to capitals</div>
              </div>
            </Button>

            <Button
              onClick={convertToLowercase}
              disabled={!inputText}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-[#1D6F42] hover:text-white transition-all"
            >
              <Type size={20} />
              <div className="text-center">
                <div className="font-semibold">lowercase</div>
                <div className="text-xs opacity-70">Convert to lowercase</div>
              </div>
            </Button>

            <Button
              onClick={reset}
              disabled={!inputText && !outputText}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-red-500 hover:text-white transition-all"
            >
              <RotateCcw size={20} />
              <div className="text-center">
                <div className="font-semibold">Reset</div>
                <div className="text-xs opacity-70">Clear all</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Info Section */}
      <Card className="mt-6 bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1D6F42] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-[#1D6F42] mb-1">100% Private & Secure</h3>
              <p className="text-sm text-gray-700">
                All processing happens in your browser. Your data is never uploaded to any server. No tracking, no logging, no data collection.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

