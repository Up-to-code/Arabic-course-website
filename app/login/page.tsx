"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Mail, Lock, User, Phone, BookOpen, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Illustration */}
          <div className="hidden lg:block">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="التعلم الرقمي"
                width={500}
                height={400}
                className="mx-auto mb-8"
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">انضم إلى مجتمع المتعلمين</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                اكتشف آلاف الدورات التدريبية وطور مهاراتك مع أفضل المدربين في الوطن العربي
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full max-w-md mx-auto">
            <Card className="shadow-2xl border-0">
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {isLogin ? "تسجيل الدخول" : "إنشاء حساب جديد"}
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  {isLogin ? "أهلاً بك مرة أخرى! سجل دخولك للمتابعة" : "ابدأ رحلتك التعليمية معنا اليوم"}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <div className="relative">
                        <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required={!isLogin}
                          placeholder="أدخل اسمك الكامل"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pr-10"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="أدخل بريدك الإلكتروني"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pr-10"
                      />
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <div className="relative">
                        <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="أدخل رقم هاتفك"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pr-10"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="password">كلمة المرور</Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="أدخل كلمة المرور"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pr-10 pl-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                      <div className="relative">
                        <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showPassword ? "text" : "password"}
                          required={!isLogin}
                          placeholder="أعد إدخال كلمة المرور"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="pr-10"
                        />
                      </div>
                    </div>
                  )}

                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="ml-2" />
                        <span className="text-sm text-gray-600">تذكرني</span>
                      </label>
                      <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                        نسيت كلمة المرور؟
                      </Link>
                    </div>
                  )}

                  <Button type="submit" className="w-full btn-primary text-lg py-3">
                    {isLogin ? "تسجيل الدخول" : "إنشاء الحساب"}
                  </Button>
                </form>

                <div className="relative">
                  <Separator />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500">أو</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="space-y-3">
                  <Button variant="outline" className="w-full py-3 bg-transparent" type="button">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      alt="Google"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                    {isLogin ? "تسجيل الدخول" : "التسجيل"} باستخدام Google
                  </Button>
                  <Button variant="outline" className="w-full py-3 bg-transparent" type="button">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                    {isLogin ? "تسجيل الدخول" : "التسجيل"} باستخدام Facebook
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-gray-600">
                    {isLogin ? "ليس لديك حساب؟" : "لديك حساب بالفعل؟"}
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-blue-600 hover:text-blue-700 font-medium mr-1"
                    >
                      {isLogin ? "إنشاء حساب جديد" : "تسجيل الدخول"}
                    </button>
                  </p>
                </div>

                {!isLogin && (
                  <div className="text-center text-xs text-gray-500 leading-relaxed">
                    بإنشاء حساب، فإنك توافق على{" "}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                      شروط الخدمة
                    </Link>{" "}
                    و{" "}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                      سياسة الخصوصية
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="text-center mt-6">
              <Link href="/" className="text-blue-600 hover:text-blue-700 flex items-center justify-center">
                <ArrowLeft className="w-4 h-4 ml-2" />
                العودة إلى الصفحة الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
