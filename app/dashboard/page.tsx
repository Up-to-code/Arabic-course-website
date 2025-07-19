"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
  Download,
  Calendar,
  Target,
  CheckCircle,
  Users,
  BarChart3,
  Settings,
  Bell,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("courses")

  const enrolledCourses = [
    {
      id: 1,
      title: "تطوير تطبيقات الويب بـ React",
      instructor: "أحمد محمد",
      progress: 65,
      totalLessons: 45,
      completedLessons: 29,
      duration: "12 ساعة",
      image: "/placeholder.svg?height=120&width=200",
      lastAccessed: "2024-01-15",
      certificate: false,
      nextLesson: "إدارة الحالة باستخدام Redux",
    },
    {
      id: 2,
      title: "التصميم الجرافيكي الاحترافي",
      instructor: "فاطمة أحمد",
      progress: 100,
      totalLessons: 32,
      completedLessons: 32,
      duration: "8 ساعات",
      image: "/placeholder.svg?height=120&width=200",
      lastAccessed: "2024-01-10",
      certificate: true,
      nextLesson: null,
    },
    {
      id: 3,
      title: "التسويق الرقمي الشامل",
      instructor: "محمد علي",
      progress: 25,
      totalLessons: 58,
      completedLessons: 14,
      duration: "15 ساعة",
      image: "/placeholder.svg?height=120&width=200",
      lastAccessed: "2024-01-12",
      certificate: false,
      nextLesson: "استراتيجيات وسائل التواصل الاجتماعي",
    },
  ]

  const certificates = [
    {
      id: 1,
      courseName: "التصميم الجرافيكي الاحترافي",
      instructor: "فاطمة أحمد",
      completionDate: "2024-01-10",
      certificateId: "CERT-2024-001",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      courseName: "أساسيات التسويق الرقمي",
      instructor: "سارة حسن",
      completionDate: "2023-12-20",
      certificateId: "CERT-2023-045",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const achievements = [
    {
      title: "المتعلم المتفاني",
      description: "أكمل 5 دورات بنجاح",
      icon: Award,
      earned: true,
      date: "2024-01-10",
    },
    {
      title: "سريع التعلم",
      description: "أكمل دورة في أقل من أسبوع",
      icon: TrendingUp,
      earned: true,
      date: "2024-01-05",
    },
    {
      title: "خبير التقنية",
      description: "أكمل 3 دورات في البرمجة",
      icon: Target,
      earned: false,
      date: null,
    },
    {
      title: "المشارك النشط",
      description: "شارك في 10 مناقشات",
      icon: Users,
      earned: false,
      date: null,
    },
  ]

  const stats = {
    totalCourses: 3,
    completedCourses: 1,
    totalHours: 35,
    completedHours: 20,
    certificates: 2,
    currentStreak: 7,
  }

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
              <p className="text-gray-600 mt-1">مرحباً بك، تابع تقدمك التعليمي</p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 ml-2" />
                الإشعارات
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 ml-2" />
                الإعدادات
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.totalCourses}</div>
              <div className="text-sm text-gray-600">إجمالي الدورات</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.completedCourses}</div>
              <div className="text-sm text-gray-600">دورات مكتملة</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.completedHours}</div>
              <div className="text-sm text-gray-600">ساعات التعلم</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.certificates}</div>
              <div className="text-sm text-gray-600">الشهادات</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.currentStreak}</div>
              <div className="text-sm text-gray-600">أيام متتالية</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {Math.round((stats.completedHours / stats.totalHours) * 100)}%
              </div>
              <div className="text-sm text-gray-600">معدل الإنجاز</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="courses">دوراتي</TabsTrigger>
            <TabsTrigger value="progress">التقدم</TabsTrigger>
            <TabsTrigger value="certificates">الشهادات</TabsTrigger>
            <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">دوراتي المسجلة</h2>
              <Link href="/courses">
                <Button variant="outline">تصفح المزيد من الدورات</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={200}
                      height={120}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      {course.certificate ? (
                        <Badge className="bg-green-500">مكتملة</Badge>
                      ) : (
                        <Badge variant="secondary">{course.progress}%</Badge>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">بواسطة {course.instructor}</p>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>التقدم</span>
                          <span>
                            {course.completedLessons}/{course.totalLessons} دروس
                          </span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 ml-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 ml-1" />
                          {course.lastAccessed}
                        </div>
                      </div>

                      {course.nextLesson && (
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-800 font-medium">الدرس التالي:</p>
                          <p className="text-sm text-blue-600">{course.nextLesson}</p>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Link href={`/courses/${course.id}`} className="flex-1">
                          <Button className="w-full">
                            <Play className="w-4 h-4 ml-2" />
                            متابعة التعلم
                          </Button>
                        </Link>
                        {course.certificate && (
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">تقرير التقدم</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>إحصائيات التعلم</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>إجمالي ساعات التعلم</span>
                    <span className="font-bold">{stats.completedHours} ساعة</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>متوسط التعلم اليومي</span>
                    <span className="font-bold">2.5 ساعة</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>أطول سلسلة تعلم</span>
                    <span className="font-bold">12 يوم</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>معدل الإنجاز</span>
                    <span className="font-bold text-green-600">85%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>النشاط الأسبوعي</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"].map((day, index) => (
                      <div key={day} className="flex items-center justify-between">
                        <span className="text-sm">{day}</span>
                        <div className="flex-1 mx-4">
                          <Progress value={Math.random() * 100} className="h-2" />
                        </div>
                        <span className="text-sm text-gray-600">{Math.floor(Math.random() * 4)}ساعة</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>التقدم في الدورات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="flex items-center space-x-4 space-x-reverse">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={60}
                        height={40}
                        className="w-15 h-10 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{course.title}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <Progress value={course.progress} className="flex-1 ml-4" />
                          <span className="text-sm text-gray-600">{course.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">شهاداتي</h2>
              <Button variant="outline">
                <Download className="w-4 h-4 ml-2" />
                تحميل الكل
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={`شهادة ${cert.courseName}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-500">معتمدة</Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{cert.courseName}</h3>
                    <p className="text-gray-600 text-sm mb-2">بواسطة {cert.instructor}</p>
                    <p className="text-gray-500 text-sm mb-3">تاريخ الإنجاز: {cert.completionDate}</p>
                    <p className="text-gray-500 text-xs mb-4">رقم الشهادة: {cert.certificateId}</p>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Download className="w-4 h-4 ml-2" />
                        تحميل
                      </Button>
                      <Button variant="outline">مشاركة</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {certificates.length === 0 && (
              <div className="text-center py-12">
                <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد شهادات بعد</h3>
                <p className="text-gray-600 mb-4">أكمل دوراتك للحصول على شهادات معتمدة</p>
                <Link href="/courses">
                  <Button>تصفح الدورات</Button>
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">الإنجازات والجوائز</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`${
                    achievement.earned ? "border-green-200 bg-green-50" : "border-gray-200"
                  } transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          achievement.earned ? "bg-green-100" : "bg-gray-100"
                        }`}
                      >
                        <achievement.icon
                          className={`w-6 h-6 ${achievement.earned ? "text-green-600" : "text-gray-400"}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-bold text-lg mb-1 ${
                            achievement.earned ? "text-green-800" : "text-gray-600"
                          }`}
                        >
                          {achievement.title}
                        </h3>
                        <p className={`text-sm mb-2 ${achievement.earned ? "text-green-700" : "text-gray-500"}`}>
                          {achievement.description}
                        </p>
                        {achievement.earned && achievement.date && (
                          <p className="text-xs text-green-600">تم الحصول عليها في {achievement.date}</p>
                        )}
                        {!achievement.earned && (
                          <Badge variant="outline" className="text-xs">
                            لم يتم الحصول عليها بعد
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
