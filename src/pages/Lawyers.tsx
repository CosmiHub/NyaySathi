
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Search, User, Star, Briefcase, Calendar, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const lawyers = [
  {
    id: 1,
    name: "Jessica Chen",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    specialization: "Family Law",
    experience: "12 years",
    rating: 4.9,
    reviews: 124,
    cases: 348,
    winRate: "92%",
    available: true
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    specialization: "Corporate Law",
    experience: "15 years",
    rating: 4.8,
    reviews: 98,
    cases: 215,
    winRate: "89%",
    available: true
  },
  {
    id: 3,
    name: "Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    specialization: "Criminal Defense",
    experience: "8 years",
    rating: 4.7,
    reviews: 76,
    cases: 192,
    winRate: "86%",
    available: false
  },
  {
    id: 4,
    name: "Rahul Patel",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    specialization: "Intellectual Property",
    experience: "10 years",
    rating: 4.9,
    reviews: 87,
    cases: 156,
    winRate: "94%",
    available: true
  },
  {
    id: 5,
    name: "Lisa Thompson",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    specialization: "Real Estate Law",
    experience: "9 years",
    rating: 4.6,
    reviews: 64,
    cases: 129,
    winRate: "88%",
    available: true
  },
  {
    id: 6,
    name: "James Wilson",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    specialization: "Tax Law",
    experience: "14 years",
    rating: 4.8,
    reviews: 93,
    cases: 187,
    winRate: "91%",
    available: false
  }
];

const specializations = [
  "All Specializations",
  "Family Law",
  "Corporate Law",
  "Criminal Defense",
  "Intellectual Property",
  "Real Estate Law",
  "Tax Law",
  "Immigration Law",
  "Employment Law"
];

const Lawyers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-legal-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Briefcase className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Find a Qualified Lawyer</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Connect with experienced lawyers specialized in your specific legal matters.
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Input 
                  placeholder="Search by name, specialization, or location..."
                  className="pl-10 py-6 rounded-lg text-black"
                />
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-[240px] py-6 bg-white text-black">
                  <SelectValue placeholder="Select specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {specializations.map((specialization) => (
                      <SelectItem key={specialization} value={specialization.toLowerCase().replace(' ', '-')}>
                        {specialization}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="bg-legal-accent hover:bg-legal-accent/90 text-legal-primary py-6 px-8">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Lawyers Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-legal-primary">Available Lawyers</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Show:</span>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Lawyers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Lawyers</SelectItem>
                    <SelectItem value="available">Available Now</SelectItem>
                    <SelectItem value="top-rated">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lawyers.map((lawyer) => (
                <Card key={lawyer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      {lawyer.available ? (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-500 hover:bg-green-600">
                            <Check className="h-3 w-3 mr-1" />
                            Available Now
                          </Badge>
                        </div>
                      ) : (
                        <div className="absolute top-4 right-4">
                          <Badge variant="outline" className="bg-white text-gray-500 border-gray-300">
                            Not Available
                          </Badge>
                        </div>
                      )}
                      
                      <div className="p-6 flex gap-4 items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-sm">
                          <img 
                            src={lawyer.photo} 
                            alt={lawyer.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{lawyer.name}</h3>
                          <p className="text-legal-primary font-medium">{lawyer.specialization}</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="ml-1 font-semibold">{lawyer.rating}</span>
                            <span className="text-gray-500 ml-1">({lawyer.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-6 py-4 border-t border-gray-100">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-gray-500 text-xs">Experience</p>
                          <p className="font-semibold">{lawyer.experience}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Cases</p>
                          <p className="font-semibold">{lawyer.cases}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Win Rate</p>
                          <p className="font-semibold">{lawyer.winRate}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 border-t p-4">
                    <div className="w-full flex gap-3">
                      <Button variant="outline" className="flex-1">View Profile</Button>
                      <Button disabled={!lawyer.available} className={`flex-1 ${lawyer.available ? 'bg-legal-primary hover:bg-legal-secondary' : ''}`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="px-8">Load More</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Lawyers;
