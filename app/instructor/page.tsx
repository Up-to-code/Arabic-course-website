"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  Plus,
  Edit,
  Eye,
  Star,
  BarChart3,
  Upload,
  Settings,
  MessageSquare,
} from "lucide-react"

export default function InstructorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showCreateCourse, setShowCreateCourse] = useState(false)

  const instructorStats = {
    totalCourses: 8,
    totalStudents: 2450,
    totalEarnings: 45600,
    monthlyEarnings: 8900,
    averageRating: 4.8,
    totalReviews: 324,
  }

  const courses = [
    {
      id: 1,
      title: "تطوير تطبيقات الويب بـ React",
      students: 1250,
      rating: 4.8,
      reviews: 156,
      earnings: 18750,
      status: "منشورة",
      lastUpdated: "2024-01-15",
      image: "/placeholder.svg?height=120&width=200",
      price: 299,
    },
    {
      id: 2,
      title: "JavaScript المتقدم للمطورين",
      students: 890,
      rating: 4.7,
      reviews: 98,
      earnings: 12340,
      status: "منشورة",
      lastUpdated: "2024-01-10",
      image: "/placeholder.svg?height=120&width=200",
      price: 249,
    },
    {
      id: 3,
      title: "Node.js وبناء APIs",
      students: 310,
      rating: 4.9,
      reviews: 70,
      earnings: 14570,
      status: "مسودة",
      lastUpdated: "2024-01-12",
      image: "/placeholder.svg?height=120&width=200",
      price: 399,
    },
  ]

  const recentActivity = [
    {
      type: "enrollment",
      message: "طالب جديد سجل في دورة React",
      time: "منذ 5 دقائق",
      icon: Users,
    },
    {
      type: "review",
      message: "تقييم جديد 5 نجوم على دورة JavaScript",
      time: "منذ 30 دقيقة",
      icon: Star,
    },
    {
      type: "earning",
      message: "تم إضافة 299 ر.س إلى أرباحك",
      time: "منذ ساعة",
      icon: DollarSign,
    },
    {
      type: "question",
      message: "سؤال جديد في دورة Node.js",
      time: "منذ 2 ساعة",
      icon: MessageSquare,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم المدرب</h1>
              <p className="text-gray-600 mt-1">إدارة دوراتك ومتابعة أداءك</p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button onClick={() => setShowCreateCourse(true)}>
                <Plus className="w-4 h-4 ml-2" />
                إنشاء دورة جديدة
              </Button>
              <Button variant="outline">
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
              <div className="text-2xl font-bold text-gray-900">{instructorStats.totalCourses}</div>
              <div className="text-sm text-gray-600">إجمالي الدورات</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{instructorStats.totalStudents.toLocaleString()}</div>
              <div className="text-sm text-gray-600">إجمالي الطلاب</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{instructorStats.totalEarnings.toLocaleString()}</div>
              <div className="text-sm text-gray-600">إجمالي الأرباح (ر.س)</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{instructorStats.monthlyEarnings.toLocaleString()}</div>
              <div className="text-sm text-gray-600">أرباح هذا الشهر</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{instructorStats.averageRating}</div>
              <div className="text-sm text-gray-600">متوسط التقييم</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <MessageSquare className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{instructorStats.totalReviews}</div>
              <div className="text-sm text-gray-600">إجمالي التقييمات</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="courses">دوراتي</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
            <TabsTrigger value="earnings">الأرباح</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>النشاط الأخير</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3 space-x-reverse">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <activity.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>إحصائيات سريعة</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">طلاب جدد هذا الأسبوع</span>
                      <span className="font-bold text-green-600">+47</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">تقييمات جديدة</span>
                      <span className="font-bold text-blue-600">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">أسئلة معلقة</span>
                      <span className="font-bold text-orange-600">3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">معدل الإكمال</span>
                      <span className="font-bold text-purple-600">78%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>الدورة الأكثر شعبية</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <Image
                        src="/placeholder.svg?height=80&width=120"
                        alt="أفضل دورة"
                        width={120}
                        height={80}
                        className="w-full h-20 object-cover rounded mb-3"
                      />
                      <h4 className="font-medium text-sm mb-1">تطوير تطبيقات الويب بـ React</h4>
                      <p className="text-xs text-gray-600">1,250 طالب</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">إدارة الدورات</h2>
              <Button onClick={() => setShowCreateCourse(true)}>
                <Plus className="w-4 h-4 ml-2" />
                إنشاء دورة جديدة
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
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
                      <Badge className={course.status === "منشورة" ? "bg-green-500" : "bg-yellow-500"}>
                        {course.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">الطلاب:</span>
                        <span className="font-medium">{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">التقييم:</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current ml-1" />
                          <span className="font-medium">{course.rating}</span>
                          <span className="text-gray-500 mr-1">({course.reviews})</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">الأرباح:</span>
                        <span className="font-medium text-green-600">{course.earnings.toLocaleString()} ر.س</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">آخر تحديث:</span>
                        <span className="text-gray-500">{course.lastUpdated}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Edit className="w-4 h-4 ml-1" />
                        تعديل
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 ml-1" />
                        عرض
                      </Button>
                      <Button size="sm" variant="outline">
                        <BarChart3 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">تحليلات الأداء</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>نمو الطلاب</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">رسم بياني لنمو الطلاب</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>الأرباح الشهرية</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">رسم بياني للأرباح</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>أداء الدورات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{course.title}</h4>
                          <div className="flex items-center mt-1">
                            <div className="w-full bg-gray-200 rounded-full h-2 ml-4">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${(course.students / 1500) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{course.students}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>التقييمات والمراجعات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center">
                        <span className="text-sm w-8">{stars}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current ml-2" />
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${Math.random() * 80 + 10}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{Math.floor(Math.random() * 100)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">تقرير الأرباح</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {instructorStats.totalEarnings.toLocaleString()} ر.س
                  </div>
                  <div className="text-gray-600">إجمالي الأرباح</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {instructorStats.monthlyEarnings.toLocaleString()} ر.س
                  </div>
                  <div className="text-gray-600">أرباح هذا الشهر</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2,450 ر.س</div>
                  <div className="text-gray-600">متوسط الأرباح الشهرية</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>تفاصيل الأرباح حسب الدورة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-right py-3">الدورة</th>
                        <th className="text-right py-3">الطلاب</th>
                        <th className="text-right py-3">السعر</th>
                        <th className="text-right py-3">إجمالي الأرباح</th>
                        <th className="text-right py-3">الحالة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.id} className="border-b">
                          <td className="py-3">
                            <div className="flex items-center space-x-3 space-x-reverse">
                              <Image
                                src={course.image || "/placeholder.svg"}
                                alt={course.title}
                                width={40}
                                height={30}
                                className="w-10 h-8 object-cover rounded"
                              />
                              <span className="font-medium">{course.title}</span>
                            </div>
                          </td>
                          <td className="py-3">{course.students.toLocaleString()}</td>
                          <td className="py-3">{course.price} ر.س</td>
                          <td className="py-3 font-bold text-green-600">{course.earnings.toLocaleString()} ر.س</td>
                          <td className="py-3">
                            <Badge className={course.status === "منشورة" ? "bg-green-500" : "bg-yellow-500"}>
                              {course.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Create Course Modal */}
      {showCreateCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>إنشاء دورة جديدة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="courseTitle">عنوان الدورة</Label>
                <Input id="courseTitle" placeholder="أدخل عنوان الدورة" />
              </div>

              <div>
                <Label htmlFor="courseDescription">وصف الدورة</Label>
                <Textarea id="courseDescription" placeholder="أدخل وصف مفصل للدورة" rows={4} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="coursePrice">السعر (ر.س)</Label>
                  <Input id="coursePrice" type="number" placeholder="299" />
                </div>
                <div>
                  <Label htmlFor="courseCategory">التصنيف</Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>البرمجة</option>
                    <option>التصميم</option>
                    <option>التسويق</option>
                    <option>الأعمال</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="courseImage">صورة الدورة</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">اسحب وأفلت الصورة هنا أو انقر للتحديد</p>
                </div>
              </div>

              <div className="flex justify-end space-x-4 space-x-reverse pt-4">
                <Button variant="outline" onClick={() => setShowCreateCourse(false)}>
                  إلغاء
                </Button>
                <Button onClick={() => setShowCreateCourse(false)}>إنشاء الدورة</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
