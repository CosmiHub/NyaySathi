
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { UserPlus } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-legal-light py-12">
        <div className="container max-w-lg px-4">
          <div className="text-center mb-8">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-legal-primary text-white mb-4">
              <UserPlus className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-legal-primary">Create Account</h1>
            <p className="text-gray-600 mt-2">Join us to access legal templates and services</p>
          </div>

          <Card className="border-0 shadow-lg">
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="user">User</TabsTrigger>
                <TabsTrigger value="lawyer">Lawyer</TabsTrigger>
              </TabsList>

              <TabsContent value="user">
                <CardHeader>
                  <CardTitle>User Registration</CardTitle>
                  <CardDescription>Create an account to access legal templates and services.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                          <Input id="first-name" placeholder="John" />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                          <Input id="last-name" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <Input id="password" type="password" placeholder="••••••••" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</label>
                        <Input id="confirm-password" type="password" placeholder="••••••••" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label htmlFor="terms" className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          I agree to the{" "}
                          <Link to="/terms" className="text-legal-primary hover:underline">
                            terms of service
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy" className="text-legal-primary hover:underline">
                            privacy policy
                          </Link>
                        </label>
                      </div>
                      <Button type="submit" className="bg-legal-primary hover:bg-legal-secondary">Register</Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-2 border-t p-6">
                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-legal-primary hover:underline">
                      Sign in
                    </Link>
                  </p>
                </CardFooter>
              </TabsContent>

              <TabsContent value="lawyer">
                <CardHeader>
                  <CardTitle>Lawyer Registration</CardTitle>
                  <CardDescription>Create a professional account to offer your legal services.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <label htmlFor="lawyer-first-name" className="text-sm font-medium">First name</label>
                          <Input id="lawyer-first-name" placeholder="John" />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="lawyer-last-name" className="text-sm font-medium">Last name</label>
                          <Input id="lawyer-last-name" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="lawyer-email" className="text-sm font-medium">Email</label>
                        <Input id="lawyer-email" type="email" placeholder="you@example.com" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="lawyer-phone" className="text-sm font-medium">Phone</label>
                        <Input id="lawyer-phone" type="tel" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="bar-number" className="text-sm font-medium">Bar Registration Number</label>
                        <Input id="bar-number" placeholder="e.g., BAR12345" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="specialization" className="text-sm font-medium">Primary Specialization</label>
                        <Input id="specialization" placeholder="e.g., Family Law, Corporate Law" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="lawyer-password" className="text-sm font-medium">Password</label>
                        <Input id="lawyer-password" type="password" placeholder="••••••••" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="lawyer-confirm-password" className="text-sm font-medium">Confirm Password</label>
                        <Input id="lawyer-confirm-password" type="password" placeholder="••••••••" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="lawyer-terms" />
                        <label htmlFor="lawyer-terms" className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          I agree to the{" "}
                          <Link to="/terms" className="text-legal-primary hover:underline">
                            terms of service
                          </Link>,{" "}
                          <Link to="/privacy" className="text-legal-primary hover:underline">
                            privacy policy
                          </Link>, and{" "}
                          <Link to="/lawyer-terms" className="text-legal-primary hover:underline">
                            lawyer guidelines
                          </Link>
                        </label>
                      </div>
                      <Button type="submit" className="bg-legal-primary hover:bg-legal-secondary">Register</Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-2 border-t p-6">
                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-legal-primary hover:underline">
                      Sign in
                    </Link>
                  </p>
                </CardFooter>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
