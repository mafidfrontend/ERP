import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const initialProfileData = {
  id: 1,
  name: 'Aziz Karimov',
  email: 'aziz.karimov@gmail.com',
  phone: '+998 90 123 45 67',
  group: 'Advanced English B2',
  address: 'Tashkent, Mirzo Ulugbek district',
  birthday: '2004-05-20',
  parentPhone: '+998 90 987 65 43',
  joinDate: '2025-01-15',
  profileImage: 'https://i.pravatar.cc/300?img=11'
};

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        ) : (
          <div className="space-x-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button onClick={handleSaveProfile}>Save Changes</Button>
          </div>
        )}
      </div>
      
      <div className="grid gap-6 md:grid-cols-[250px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="mb-4 rounded-full overflow-hidden w-32 h-32 border-4 border-primary">
              <img 
                src={profileData.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl">{profileData.name}</h3>
              <p className="text-muted-foreground">{profileData.group}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                {isEditing ? (
                  <Input 
                    name="name"
                    value={profileData.name} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <div className="p-2 border rounded-md">{profileData.name}</div>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                {isEditing ? (
                  <Input 
                    name="email"
                    value={profileData.email} 
                    onChange={handleInputChange} 
                    type="email"
                  />
                ) : (
                  <div className="p-2 border rounded-md">{profileData.email}</div>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                {isEditing ? (
                  <Input 
                    name="phone"
                    value={profileData.phone} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <div className="p-2 border rounded-md">{profileData.phone}</div>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Address</label>
                {isEditing ? (
                  <Input 
                    name="address"
                    value={profileData.address} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <div className="p-2 border rounded-md">{profileData.address}</div>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Date of Birth</label>
                {isEditing ? (
                  <Input 
                    name="birthday"
                    value={profileData.birthday} 
                    onChange={handleInputChange} 
                    type="date"
                  />
                ) : (
                  <div className="p-2 border rounded-md">
                    {new Date(profileData.birthday).toLocaleDateString()}
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Parent's Phone</label>
                {isEditing ? (
                  <Input 
                    name="parentPhone"
                    value={profileData.parentPhone} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <div className="p-2 border rounded-md">{profileData.parentPhone}</div>
                )}
              </div>
            </div>
          </CardContent>
          
          <CardHeader className="border-t mt-6 pt-6">
            <CardTitle>Academic Information</CardTitle>
            <CardDescription>Your course details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Group</label>
                <div className="p-2 border rounded-md">{profileData.group}</div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Join Date</label>
                <div className="p-2 border rounded-md">
                  {new Date(profileData.joinDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
