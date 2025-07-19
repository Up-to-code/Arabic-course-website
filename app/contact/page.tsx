"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  HeadphonesIcon,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "العنوان",
      details: ["الرياض، المملكة العربية السعودية", "حي الملك فهد، طريق الملك عبدالعزيز"],
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Phone,
      title: "الهاتف",
      details: ["+966 50 123 4567", "+966 11 234 5678"],
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@academy.com", "support@academy.com"],
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["الأحد - الخميس: 9:00 ص - 6:00 م", "الجمعة - السبت: مغلق"],
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "الدردشة المباشرة",
      description: "تحدث مع فريق الدعم الفني مباشرة",
      action: "بدء المحادثة",
      available: true,
    },
    {
      icon: HeadphonesIcon,
      title: "الدعم الهاتفي",
      description: "اتصل بنا للحصول على مساعدة فورية",
      action: "اتصل الآن",
      available: true,
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      description: "أرسل استفسارك وسنرد خلال 24 ساعة",
      action: "إرسال رسالة",
      available: true,
    },
    {
      icon: Globe,
      title: "مركز المساعدة",
      description: "تصفح الأسئلة الشائعة والأدلة",
      action: "زيارة المركز",
      available: true,
    },
  ]

  const subjects = [
    "استفسار عام",
    "مشكلة تقنية",
    "استفسار عن الدورات",
    "طلب استرداد",
    "اقتراح أو شكوى",
    "شراكة أو تعاون",
    "أخرى",
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك! تواصل معنا في أي وقت وسنكون سعداء للإجابة على استفساراتك ومساعدتك في رحلتك التعليمية
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">أرسل لنا رسالة</CardTitle>
                <p className="text-gray-600">املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن</p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-gray-600">شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">الاسم الكامل *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="أدخل اسمك الكامل"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">البريد الإلكتروني *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="أدخل بريدك الإلكتروني"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="أدخل رقم هاتفك"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">موضوع الرسالة *</Label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">اختر الموضوع</option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">الرسالة *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="اكتب رسالتك هنا..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button type="submit" className="w-full btn-primary text-lg py-3">
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الرسالة
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Support Options & Map */}
          <div className="space-y-8">
            {/* Support Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">طرق الدعم الأخرى</CardTitle>
                <p className="text-gray-600">اختر الطريقة الأنسب للتواصل معنا</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 space-x-reverse p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <option.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{option.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                        >
                          {option.action}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">موقعنا</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">خريطة الموقع</p>
                    <p className="text-sm text-gray-500">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">تابعنا على وسائل التواصل</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 space-x-reverse justify-center">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">أسئلة شائعة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">إليك بعض الأسئلة الأكثر شيوعاً التي نتلقاها من طلابنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">كيف يمكنني التسجيل في الدورات؟</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  يمكنك التسجيل بسهولة من خلال إنشاء حساب جديد، ثم تصفح الدورات واختيار ما يناسبك والضغط على "التسجيل في
                  الدورة".
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">هل يمكنني الحصول على شهادة؟</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  نعم، نقدم شهادات إتمام معتمدة لجميع الدورات عند إكمالها بنجاح واجتياز الاختبارات النهائية.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">ما هي طرق الدفع المتاحة؟</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  نقبل جميع بطاقات الائتمان الرئيسية، التحويل البنكي، والدفع عبر المحافظ الإلكترونية مثل STC Pay و Apple
                  Pay.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">هل يمكنني استرداد المبلغ؟</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  نعم، نوفر ضمان استرداد المبلغ خلال 30 يوماً من تاريخ الشراء إذا لم تكن راضياً عن الدورة.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">لم تجد إجابة لسؤالك؟</p>
            <Button variant="outline">زيارة مركز المساعدة</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
