import { AtSign, Phone, Github, Linkedin, Globe, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

const Developer = () => {
    const skills = [
        "React.js", "Redux", "Context API", "Tailwind CSS", "JavaScript (ES6+)",
        "HTML5", "CSS3", "C++", "SQL", "Git", "GitHub", "VS Code", "Vite"
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                    <div className="relative">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                            <img
                                src="https://rajivsharma.vercel.app/_next/image?url=%2Fprofile.jpg&w=640&q=75"
                                alt="Rajiv Sharma"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-2 border-white" title="Available for work"></div>
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-4xl font-bold mb-2">Rajiv Sharma</h1>
                        <h2 className="text-xl text-primary font-medium mb-4">ReactJS Developer</h2>
                        <p className="text-muted-foreground mb-6">
                            Passionate frontend developer with a strong foundation in building responsive and user-friendly web applications.
                            Dedicated to writing clean, maintainable code and creating seamless user experiences.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <Button asChild variant="outline" size="sm">
                                <a href="https://github.com/rajivsharma25" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" /> GitHub
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="sm">
                                <a href="https://linkedin.com/in/rajivsharma25" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-4 h-4" /> LinkedIn
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="sm">
                                <a href="https://rajivsharma.vercel.app" target="_blank" rel="noopener noreferrer">
                                    <Globe className="w-4 h-4" /> Portfolio
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column - Contact & Skills */}
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Contact Info</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3 text-sm">
                                    <AtSign className="w-4 h-4 shrink-0 text-primary" />
                                    <a href="mailto:rajivsharma93056@gmail.com" className="hover:text-primary transition-colors">
                                        rajivsharma93056@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone className="w-4 h-4 shrink-0 text-primary" />
                                    <a href="tel:+919305635022" className="hover:text-primary transition-colors">+91 9305635022</a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <MapPin className="w-4 h-4 shrink-0 text-primary" />
                                    <span>Noida, Uttar Pradesh, India</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Technical Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Experience & Projects */}
                    <div className="md:col-span-2 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Professional Experience</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold text-lg">Bodmas Education Services</h3>
                                        <span className="text-sm text-muted-foreground">May 2025 – Present</span>
                                    </div>
                                    <p className="text-primary text-sm mb-2">ReactJS Developer</p>
                                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                        <li>Developing and maintaining modern web applications using ReactJS.</li>
                                        <li>Building reusable React components and implementing state management.</li>
                                    </ul>
                                </div>

                                <Separator />

                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold text-lg">TATA STRIVE Skill Development Centre</h3>
                                        <span className="text-sm text-muted-foreground">Dec 2024 – Mar 2025</span>
                                    </div>
                                    <p className="text-primary text-sm mb-2">AWS Cloud Practitioner Training</p>
                                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                        <li>Completed comprehensive training in AWS cloud computing services.</li>
                                        <li>Gained hands-on experience in cloud architecture design and security.</li>
                                    </ul>
                                </div>

                                <Separator />

                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold text-lg">CETPA Infotech Pvt. Ltd.</h3>
                                        <span className="text-sm text-muted-foreground">July 2023 – Aug 2023</span>
                                    </div>
                                    <p className="text-primary text-sm mb-2">Web Development Internship</p>
                                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                        <li>Enhanced web development proficiency in HTML5, CSS3, JavaScript, and ReactJS.</li>
                                        <li>Developed a Doctor Appointment Website with user registration and scheduling.</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Certifications</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold">AWS Certified Cloud Practitioner</h3>
                                        <span className="text-sm text-muted-foreground">April 2025</span>
                                    </div>
                                    <p className="text-sm text-primary">AWS</p>
                                </div>
                                <Separator />
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold">Introduction to SQL</h3>
                                        <span className="text-sm text-muted-foreground">October 2023</span>
                                    </div>
                                    <p className="text-sm text-primary">Simplilearn</p>
                                </div>
                                <Separator />
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold">Basics of C++</h3>
                                        <span className="text-sm text-muted-foreground">August 2023</span>
                                    </div>
                                    <p className="text-sm text-primary">Udemy</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Education</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold">IMS Engineering College (AKTU)</h3>
                                        <span className="text-sm text-muted-foreground">2020 – 2024</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Bachelor of Technology in Computer Science and Engineering</p>
                                    <p className="text-sm text-primary mt-1">CGPA: 7.56/10</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;
