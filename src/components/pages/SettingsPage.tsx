import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTheme } from '@/hooks/useTheme';
import { useToast } from "@/components/ui/use-toast";

const SettingsPage = () => {
  const { theme, font, setTheme, setFont } = useTheme();
  const { toast } = useToast();
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize how the app looks and feels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="theme-mode">Dark mode</Label>
              <Switch 
                id="theme-mode" 
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Toggle between light and dark mode
            </p>
          </div>
          
          <div className="space-y-4">
            <Label>Font Style</Label>
            <RadioGroup 
              defaultValue={font}
              onValueChange={(value) => setFont(value as 'sans' | 'serif' | 'mono')}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sans" id="sans" />
                <Label htmlFor="sans" className="font-sans text-lg">Sans Serif</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="serif" id="serif" />
                <Label htmlFor="serif" className="font-serif text-lg">Serif</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mono" id="mono" />
                <Label htmlFor="mono" className="font-mono text-lg">Monospace</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Configure how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="block">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label className="block">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive alerts on this device</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label className="block">Payment Reminders</Label>
              <p className="text-sm text-muted-foreground">Get reminded about upcoming payments</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Language</CardTitle>
          <CardDescription>Choose your preferred language</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="english">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="english" id="english" />
              <Label htmlFor="english">English</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="uzbek" id="uzbek" />
              <Label htmlFor="uzbek">O'zbek</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button onClick={handleSaveSettings}>Save Settings</Button>
      </div>
    </div>
  );
};

export default SettingsPage;
