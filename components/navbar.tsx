"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User, BookOpen, Home, Phone, HelpCircle, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "الرئيسية", icon: Home },
    { href: "/courses", label: "الدورات", icon: BookOpen },
    { href: "/about", label: "من نحن", icon: User },
    { href: "/contact", label: "اتصل بنا", icon: Phone },
    { href: "/faq", label: "الأسئلة الشائعة", icon: HelpCircle },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">أكاديمية التعلم</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Link href="/login">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                <LogIn className="w-4 h-4 ml-2" />
                تسجيل الدخول
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="btn-primary">
                <User className="w-4 h-4 ml-2" />
                لوحة التحكم
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 ml-3" />
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/login"
                  className="flex items-center text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="w-5 h-5 ml-3" />
                  تسجيل الدخول
                </Link>
                <Link
                  href="/dashboard"
                  className="flex items-center text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-5 h-5 ml-3" />
                  لوحة التحكم
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
