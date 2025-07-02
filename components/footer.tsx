"use client";

export default function Footer() {
    return (
        <footer className="text-white relative overflow-hidden" style={{backgroundColor: '#065598'}}>
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Top Section - Brand and Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Sekotak
                            </h2>
                            <p className="text-xl opacity-90 max-w-md leading-relaxed">
                                Pure chocolate crafted with passion. 
                                Experience the finest cacao beans transformed into chocolate perfection.
                            </p>
                        </div>
                        
                        {/* Social Media with Pills */}
                        <div className="flex flex-wrap gap-3">
                            <a href="#" className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105" 
                               style={{backgroundColor: '#FFDE6A', color: '#065598'}}>
                                Follow us on Instagram
                            </a>
                            <a href="#" className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2 border-white/30 hover:border-white/60">
                                TikTok
                            </a>
                            <a href="#" className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2 border-white/30 hover:border-white/60">
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Stay Sweet!</h3>
                            <p className="opacity-90 text-lg">
                                Get the latest chocolate drops, recipes, and sweet stories delivered to your inbox.
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="your-email@example.com"
                                    className="flex-1 px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 transition-all duration-300"
                                    style={{'--tw-ring-color': '#FFDE6A'} as React.CSSProperties}
                                    onFocus={(e) => e.currentTarget.style.boxShadow = `0 0 0 4px rgba(255, 222, 106, 0.3)`}
                                    onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                                />
                                <button className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:opacity-90" 
                                        style={{backgroundColor: '#C3170E'}}>
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-sm opacity-75">
                                No spam, just chocolate goodness. Unsubscribe anytime.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Pills */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <a href="#" className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105" 
                           style={{backgroundColor: 'rgba(255, 222, 106, 0.2)', border: '2px solid rgba(255, 222, 106, 0.3)'}}>
                            Our Story
                        </a>
                        <a href="#" className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105" 
                           style={{backgroundColor: 'rgba(255, 222, 106, 0.2)', border: '2px solid rgba(255, 222, 106, 0.3)'}}>
                            Chocolate Collection
                        </a>
                        <a href="#" className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105" 
                           style={{backgroundColor: 'rgba(255, 222, 106, 0.2)', border: '2px solid rgba(255, 222, 106, 0.3)'}}>
                            Sustainability
                        </a>
                        <a href="#" className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105" 
                           style={{backgroundColor: 'rgba(255, 222, 106, 0.2)', border: '2px solid rgba(255, 222, 106, 0.3)'}}>
                            Contact Us
                        </a>
                        <a href="#" className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105" 
                           style={{backgroundColor: 'rgba(255, 222, 106, 0.2)', border: '2px solid rgba(255, 222, 106, 0.3)'}}>
                            FAQ
                        </a>
                        <a href="#" className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105" 
                           style={{backgroundColor: 'rgba(255, 222, 106, 0.2)', border: '2px solid rgba(255, 222, 106, 0.3)'}}>
                            Recipes
                        </a>
                    </div>
                </div>

                {/* Fun Facts Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center p-6 rounded-3xl" style={{backgroundColor: 'rgba(255, 222, 106, 0.1)'}}>
                        <div className="text-4xl mb-3">🌱</div>
                        <h4 className="font-bold text-lg mb-2">100% Sustainable</h4>
                        <p className="opacity-90">Direct trade with cacao farmers</p>
                    </div>
                    <div className="text-center p-6 rounded-3xl" style={{backgroundColor: 'rgba(211, 127, 74, 0.1)'}}>
                        <div className="text-4xl mb-3">🍫</div>
                        <h4 className="font-bold text-lg mb-2">Artisan Crafted</h4>
                        <p className="opacity-90">Small batch, premium quality</p>
                    </div>
                    <div className="text-center p-6 rounded-3xl" style={{backgroundColor: 'rgba(195, 23, 14, 0.1)'}}>
                        <div className="text-4xl mb-3">❤️</div>
                        <h4 className="font-bold text-lg mb-2">Made with Love</h4>
                        <p className="opacity-90">Every bar tells a story</p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-white/20 gap-6">
                    <div className="flex flex-wrap gap-6 text-sm opacity-75">
                        <a href="#" className="hover:opacity-100 transition-opacity duration-300">Privacy Policy</a>
                        <a href="#" className="hover:opacity-100 transition-opacity duration-300">Terms of Service</a>
                        <a href="#" className="hover:opacity-100 transition-opacity duration-300">Shipping Info</a>
                        <a href="#" className="hover:opacity-100 transition-opacity duration-300">Returns</a>
                    </div>
                    
                    <div className="text-center lg:text-right">
                        <p className="opacity-75 mb-2">
                            &copy; 2024 Sekotak Chocolate. All rights reserved.
                        </p>
                        <p className="text-sm opacity-60">
                            Crafted with 🍫 and lots of caffeine
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
                <div className="w-full h-full rounded-full" style={{backgroundColor: '#FFDE6A'}}></div>
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
                <div className="w-full h-full rounded-full" style={{backgroundColor: '#D67F4A'}}></div>
            </div>
        </footer>
    );
}