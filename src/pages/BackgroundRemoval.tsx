import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

export default function BackgroundRemoval() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [fileName, setFileName] = useState<string>('');

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      setOriginalImage(event.target?.result as string);
      setProcessedImage(null);
    };
    reader.readAsDataURL(file);
    toast.success('Image uploaded successfully');
  };

  const handleRemoveBackground = async () => {
    if (!originalImage) {
      toast.error('Please upload an image first');
      return;
    }

    setProcessing(true);
    toast.info('Processing... This may take a moment');

    try {
      const img = new Image();
      img.src = originalImage;
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const blob = await removeBackground(img);
      const url = URL.createObjectURL(blob);
      setProcessedImage(url);
      toast.success('Background removed successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to remove background. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `no-bg-${fileName}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Image downloaded!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Background Removal Tool</h1>
          <p className="text-gray-600">Upload team member photos to remove backgrounds</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Original Image</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center min-h-[400px] flex flex-col items-center justify-center bg-white">
              {originalImage ? (
                <img src={originalImage} alt="Original" className="max-w-full max-h-[350px] object-contain" />
              ) : (
                <div>
                  <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-500 mb-4">Upload an image to get started</p>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Button asChild>
                      <span>
                        <Upload className="w-4 h-4 mr-2" />
                        Choose Image
                      </span>
                    </Button>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              )}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Processed Image</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center min-h-[400px] flex flex-col items-center justify-center bg-checkered">
              {processing ? (
                <div>
                  <Loader2 className="w-16 h-16 mx-auto mb-4 text-primary animate-spin" />
                  <p className="text-gray-600">Removing background...</p>
                </div>
              ) : processedImage ? (
                <img src={processedImage} alt="Processed" className="max-w-full max-h-[350px] object-contain" />
              ) : (
                <p className="text-gray-400">Processed image will appear here</p>
              )}
            </div>
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <label htmlFor="file-upload-2" className="cursor-pointer">
            <Button variant="outline" asChild>
              <span>
                <Upload className="w-4 h-4 mr-2" />
                Upload New Image
              </span>
            </Button>
          </label>
          <input
            id="file-upload-2"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          
          <Button
            onClick={handleRemoveBackground}
            disabled={!originalImage || processing}
            className="bg-primary hover:bg-primary/90"
          >
            {processing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              'Remove Background'
            )}
          </Button>

          <Button
            onClick={handleDownload}
            disabled={!processedImage}
            variant="outline"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-blue-900">Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Upload a team member photo</li>
            <li>Click "Remove Background" to process the image</li>
            <li>Download the processed image</li>
            <li>Replace the original file in public/lovable-uploads/ with the downloaded file</li>
          </ol>
        </div>
      </div>

      <style>{`
        .bg-checkered {
          background-image: 
            linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
            linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
            linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
      `}</style>
    </div>
  );
}
