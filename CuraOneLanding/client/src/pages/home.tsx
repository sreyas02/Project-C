import { WaitlistForm } from "@/components/waitlist-form";
import { useQuery } from "@tanstack/react-query";
import { 
  Calendar, 
  MessageSquare, 
  FileText, 
  DollarSign, 
  BarChart3, 
  Tablet,
  CheckCircle,
  CalendarCheck,
  Bot,
  TrendingUp,
  Smartphone,
  Bell,
  Shield,
  Users,
  UserCheck,
  Building2,
  Star,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

export default function Home() {
  const { data: stats } = useQuery<{ count: number }>({
    queryKey: ["/api/waitlist/stats"],
  });

  const waitlistCount = stats?.count || 500;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-medical-blue">CuraOne</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-600 hover:text-medical-blue px-3 py-2 text-sm font-medium transition-colors"
                  data-testid="link-features"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-600 hover:text-medical-blue px-3 py-2 text-sm font-medium transition-colors"
                  data-testid="link-solutions"
                >
                  Solutions
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-600 hover:text-medical-blue px-3 py-2 text-sm font-medium transition-colors"
                  data-testid="link-pricing"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-medical-blue px-3 py-2 text-sm font-medium transition-colors"
                  data-testid="link-contact"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('waitlist')}
                className="bg-medical-blue text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                data-testid="button-nav-join-waitlist"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-gray to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Smart Practice Management That Actually{" "}
                <span className="text-medical-blue">Works</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Streamline your clinic operations, enhance patient communication, and grow your practice with CuraOne's comprehensive healthcare management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('waitlist')}
                  className="bg-medical-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                  data-testid="button-hero-join-waitlist"
                >
                  Join Waitlist - Get 10% Off
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success-green mr-2" />
                  <span>Free 30-day trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success-green mr-2" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success-green mr-2" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare technology dashboard" 
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-hero-dashboard"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success-green rounded-full"></div>
                  <span className="text-sm font-medium" data-testid="text-clinic-count">200+ Clinics Trust CuraOne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Healthcare Management Shouldn't Be This Hard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every clinic faces unique challenges. Whether you're a solo practitioner or managing multiple locations, these problems sound familiar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-red-50 border border-red-100 rounded-xl p-8" data-testid="card-small-clinics">
              <div className="text-center mb-6">
                <UserCheck className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-2">Small Clinics (1-5 Providers)</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Drowning in paperwork and administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Missed appointments costing thousands monthly</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Patients frustrated with long wait times for responses</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Using multiple disconnected systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-8" data-testid="card-medium-clinics">
              <div className="text-center mb-6">
                <Users className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-2">Medium Clinics (5-20 Providers)</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Staff coordination becoming a nightmare</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Inconsistent patient communication standards</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Difficulty tracking performance across providers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Billing errors leading to revenue loss</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-8" data-testid="card-large-clinics">
              <div className="text-center mb-6">
                <Building2 className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-2">Large Clinics (20+ Providers)</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Complex multi-location management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Compliance and reporting headaches</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Scaling communication without losing quality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Integration challenges with existing systems</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-medical-blue text-white px-6 py-3 rounded-lg">
              <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></div>
              <span className="font-semibold">Ready for a solution that actually works? Keep reading.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              One Platform, Every Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CuraOne transforms how clinics operate with intelligent automation, seamless communication, and powerful insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare professionals collaborating with technology" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-collaboration"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">Smart Practice Management</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-medical-blue text-white p-2 rounded-lg mr-4 flex-shrink-0">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Intelligent Scheduling</h4>
                    <p className="text-gray-600">AI-powered scheduling that reduces no-shows by 40% and optimizes provider utilization.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-healthcare-teal text-white p-2 rounded-lg mr-4 flex-shrink-0">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Automated Workflows</h4>
                    <p className="text-gray-600">Eliminate 80% of repetitive tasks with smart automation and customizable workflows.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-success-green text-white p-2 rounded-lg mr-4 flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Real-time Analytics</h4>
                    <p className="text-gray-600">Make data-driven decisions with comprehensive reporting and performance insights.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Patient using mobile health app for communication" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-mobile-health"
              />
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Advanced Patient Communication</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-medical-blue text-white p-2 rounded-lg mr-4 flex-shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Multi-channel Messaging</h4>
                    <p className="text-gray-600">Reach patients where they are - SMS, email, app notifications, and patient portal.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-healthcare-teal text-white p-2 rounded-lg mr-4 flex-shrink-0">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Smart Reminders</h4>
                    <p className="text-gray-600">Automated appointment reminders, medication alerts, and follow-up care notifications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-success-green text-white p-2 rounded-lg mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">HIPAA-Compliant</h4>
                    <p className="text-gray-600">Enterprise-grade security ensuring all communications meet healthcare compliance standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop juggling multiple systems. CuraOne brings all your practice management needs together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" data-testid="card-feature-appointments">
              <div className="text-center mb-4">
                <div className="bg-medical-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal">Appointment Management</h3>
              </div>
              <p className="text-gray-600 text-center">Smart scheduling with automated reminders, waitlist management, and real-time availability.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" data-testid="card-feature-communication">
              <div className="text-center mb-4">
                <div className="bg-healthcare-teal text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal">Patient Communication</h3>
              </div>
              <p className="text-gray-600 text-center">Secure messaging, automated follow-ups, and multi-channel patient engagement tools.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" data-testid="card-feature-ehr">
              <div className="text-center mb-4">
                <div className="bg-success-green text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal">Electronic Health Records</h3>
              </div>
              <p className="text-gray-600 text-center">Complete EHR system with customizable templates and integrated clinical workflows.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" data-testid="card-feature-billing">
              <div className="text-center mb-4">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal">Billing & Revenue</h3>
              </div>
              <p className="text-gray-600 text-center">Automated billing, insurance claims processing, and revenue cycle management.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" data-testid="card-feature-analytics">
              <div className="text-center mb-4">
                <div className="bg-indigo-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal">Analytics & Reporting</h3>
              </div>
              <p className="text-gray-600 text-center">Comprehensive dashboards with actionable insights and custom reporting capabilities.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" data-testid="card-feature-portal">
              <div className="text-center mb-4">
                <div className="bg-pink-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Tablet className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal">Patient Portal</h3>
              </div>
              <p className="text-gray-600 text-center">Self-service portal for appointments, forms, test results, and secure messaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-r from-medical-blue to-healthcare-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Join the CuraOne Revolution
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be among the first to experience the future of practice management. Join our waitlist and get 10% off your first year.
          </p>

          <WaitlistForm />

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white" data-testid="text-waitlist-count">{waitlistCount}+</div>
              <div className="text-blue-100">Clinics on waitlist</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">40%</div>
              <div className="text-blue-100">Reduction in no-shows</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2 hrs</div>
              <div className="text-blue-100">Saved daily per provider</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600">See what early beta users are saying about CuraOne</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-soft-gray rounded-xl p-6" data-testid="card-testimonial-1">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&face" 
                  alt="Dr. Sarah Johnson" 
                  className="w-12 h-12 rounded-full mr-4"
                  data-testid="img-testimonial-1"
                />
                <div>
                  <div className="font-semibold text-charcoal">Dr. Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Family Medicine</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"CuraOne has transformed how we communicate with patients. The automated reminders alone have reduced our no-shows by 35%."</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-soft-gray rounded-xl p-6" data-testid="card-testimonial-2">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&face" 
                  alt="Michael Chen" 
                  className="w-12 h-12 rounded-full mr-4"
                  data-testid="img-testimonial-2"
                />
                <div>
                  <div className="font-semibold text-charcoal">Michael Chen</div>
                  <div className="text-sm text-gray-600">Practice Administrator</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"The analytics dashboard gives us insights we never had before. We've optimized our operations and increased revenue by 22%."</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-soft-gray rounded-xl p-6" data-testid="card-testimonial-3">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&face" 
                  alt="Dr. Lisa Rodriguez" 
                  className="w-12 h-12 rounded-full mr-4"
                  data-testid="img-testimonial-3"
                />
                <div>
                  <div className="font-semibold text-charcoal">Dr. Lisa Rodriguez</div>
                  <div className="text-sm text-gray-600">Pediatrics</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Finally, a system that actually understands healthcare workflows. Our staff productivity has increased dramatically."</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">CuraOne</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Smart Practice Management & Patient Communication Software designed for modern healthcare providers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-linkedin">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-twitter">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-facebook">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-features-footer">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-pricing-footer">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-security">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-integrations">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-documentation">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-help-center">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-contact-us">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-system-status">System Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 CuraOne. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-terms">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-hipaa">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
