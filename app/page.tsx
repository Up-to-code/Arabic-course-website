"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Star, Play, ArrowLeft, CheckCircle, TrendingUp, Clock, Globe } from "lucide-react"

export default function HomePage() {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    certificates: 0,
  })

  useEffect(() => {
    // Animate stats on load
    const finalStats = { students: 15000, courses: 250, instructors: 85, certificates: 12000 }
    const duration = 2000
    const steps = 60
    const increment = {
      students: finalStats.students / steps,
      courses: finalStats.courses / steps,
      instructors: finalStats.instructors / steps,
      certificates: finalStats.certificates / steps,
    }

    let currentStep = 0
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setStats({
          students: Math.floor(increment.students * currentStep),
          courses: Math.floor(increment.courses * currentStep),
          instructors: Math.floor(increment.instructors * currentStep),
          certificates: Math.floor(increment.certificates * currentStep),
        })
        currentStep++
      } else {
        setStats(finalStats)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const featuredCourses = [
    {
      id: 1,
      title: "تطوير تطبيقات الويب بـ React",
      instructor: "أحمد محمد",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      students: 1250,
      duration: "12 ساعة",
      image: "/placeholder.svg?height=200&width=300",
      category: "البرمجة",
    },
    {
      id: 2,
      title: "التصميم الجرافيكي للمبتدئين",
      instructor: "فاطمة أحمد",
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      students: 890,
      duration: "8 ساعات",
      image: "/placeholder.svg?height=200&width=300",
      category: "التصميم",
    },
    {
      id: 3,
      title: "التسويق الرقمي الشامل",
      instructor: "محمد علي",
      price: 249,
      originalPrice: 349,
      rating: 4.7,
      students: 2100,
      duration: "15 ساعة",
      image: "/placeholder.svg?height=200&width=300",
      category: "التسويق",
    },
  ]

  const testimonials = [
    {
      name: "سارة أحمد",
      role: "مطورة ويب",
      content: "الدورات هنا غيرت مساري المهني بالكامل. المحتوى ممتاز والمدربين محترفين جداً.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "عبدالله محمد",
      role: "مصمم جرافيك",
      content: "أفضل منصة تعليمية جربتها. الشرح واضح والأمثلة عملية ومفيدة.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "نور الهدى",
      role: "مسوقة رقمية",
      content: "تعلمت مهارات جديدة ساعدتني في الحصول على وظيفة أحلامي. شكراً لكم!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                ابدأ رحلتك في
                <span className="block text-yellow-300">التعلم الرقمي</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                اكتشف آلاف الدورات التدريبية في البرمجة، التصميم، التسويق وأكثر. تعلم من خبراء المجال واحصل على شهادات
                معتمدة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                  >
                    <BookOpen className="w-5 h-5 ml-2" />
                    استكشف الدورات
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  <Play className="w-5 h-5 ml-2" />
                  شاهد العرض التوضيحي
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="التعلم الرقمي"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-medium">15,000+ طالب نشط</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.students.toLocaleString()}+</div>
              <div className="text-gray-600">طالب مسجل</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.courses}+</div>
              <div className="text-gray-600">دورة تدريبية</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.instructors}+</div>
              <div className="text-gray-600">مدرب خبير</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.certificates.toLocaleString()}+</div>
              <div className="text-gray-600">شهادة صادرة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">الدورات المميزة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختر من بين أفضل الدورات التدريبية المصممة خصيصاً لتطوير مهاراتك المهنية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <Card
                key={course.id}
                className="card hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </div>
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    خصم {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">بواسطة {course.instructor}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.students} طالب)</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 ml-1" />
                      {course.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span className="text-2xl font-bold text-blue-600">{course.price} ر.س</span>
                      <span className="text-lg text-gray-400 line-through">{course.originalPrice} ر.س</span>
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <Button className="btn-primary">
                        عرض التفاصيل
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses">
              <Button size="lg" className="btn-secondary">
                عرض جميع الدورات
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">لماذا تختار أكاديميتنا؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم تجربة تعليمية متميزة تجمع بين الجودة والمرونة والدعم المستمر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">تعلم من أي مكان</h3>
              <p className="text-gray-600 leading-relaxed">
                ادرس في الوقت والمكان المناسب لك مع منصتنا المتاحة على جميع الأجهزة
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">شهادات معتمدة</h3>
              <p className="text-gray-600 leading-relaxed">
                احصل على شهادات معتمدة تضيف قيمة حقيقية لسيرتك الذاتية ومسارك المهني
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">تتبع التقدم</h3>
              <p className="text-gray-600 leading-relaxed">
                راقب تقدمك وإنجازاتك مع نظام متقدم لتتبع الأداء والإحصائيات التفصيلية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">ماذا يقول طلابنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اقرأ تجارب طلابنا الناجحة وكيف غيرت دوراتنا مسارهم المهني
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-full ml-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">ابدأ رحلتك التعليمية اليوم</h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            انضم إلى آلاف الطلاب الذين طوروا مهاراتهم وحققوا أهدافهم المهنية معنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <BookOpen className="w-5 h-5 ml-2" />
                تصفح الدورات
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                إنشاء حساب مجاني
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
