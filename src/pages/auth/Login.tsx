
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Lock } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-legal-light py-12">
        <div className="container max-w-lg px-4">
          <div className="text-center mb-8">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-legal-primary text-white mb-4">
              <Lock className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-legal-primary">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to your account to continue</p>
          </div>

          <Card className="border-0 shadow-lg">
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="user">User</TabsTrigger>
                <TabsTrigger value="lawyer">Lawyer</TabsTrigger>
              </TabsList>

              <TabsContent value="user">
                <CardHeader>
                  <CardTitle>User Login</CardTitle>
                  <CardDescription>Access your account to manage templates and appointments.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="text-sm font-medium">Password</label>
                          <Link to="/forgot-password" className="text-sm text-legal-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input id="password" type="password" placeholder="••••••••" />
                      </div>
                      <Button type="submit" className="bg-legal-primary hover:bg-legal-secondary">Login</Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-2 border-t p-6">
                  <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-legal-primary hover:underline">
                      Sign up
                    </Link>
                  </p>
                </CardFooter>
              </TabsContent>

              <TabsContent value="lawyer">
                <CardHeader>
                  <CardTitle>Lawyer Login</CardTitle>
                  <CardDescription>Access your professional dashboard.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="lawyer-email" className="text-sm font-medium">Email</label>
                        <Input id="lawyer-email" type="email" placeholder="you@example.com" />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <label htmlFor="lawyer-password" className="text-sm font-medium">Password</label>
                          <Link to="/forgot-password" className="text-sm text-legal-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input id="lawyer-password" type="password" placeholder="••••••••" />
                      </div>
                      <Button type="submit" className="bg-legal-primary hover:bg-legal-secondary">Login</Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-2 border-t p-6">
                  <p className="text-center text-sm text-gray-600">
                    Not registered as a lawyer?{" "}
                    <Link to="/lawyer/register" className="text-legal-primary hover:underline">
                      Register here
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

export default Login;
