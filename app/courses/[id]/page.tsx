"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Play,
  Star,
  Clock,
  Users,
  Award,
  CheckCircle,
  Download,
  Share2,
  Heart,
  BookOpen,
  Globe,
  Smartphone,
  Trophy,
  ArrowLeft,
  PlayCircle,
} from "lucide-react"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [activeLesson, setActiveLesson] = useState(0)

  // Mock course data - in real app, fetch based on params.id
  const course = {
    id: 1,
    title: "تطوير تطبيقات الويب بـ React و Next.js",
    subtitle: "تعلم بناء تطبيقات ويب حديثة وتفاعلية من الصفر حتى الاحتراف",
    instructor: {
      name: "أحمد محمد",
      title: "مطور Full Stack",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
      students: 15000,
      courses: 12,
      bio: "مطور ويب محترف مع أكثر من 8 سنوات من الخبرة في تطوير التطبيقات باستخدام React و Node.js",
    },
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 1250,
    students: 8500,
    duration: "12 ساعة",
    lessons: 45,
    level: "متوسط",
    language: "العربية",
    lastUpdated: "2024-01-15",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder.svg?height=400&width=600",
    category: "البرمجة",
    tags: ["React", "Next.js", "JavaScript", "Frontend", "Web Development"],
    description: `
      في هذه الدورة الشاملة، ستتعلم كيفية بناء تطبيقات ويب حديثة وتفاعلية باستخدام React و Next.js. 
      سنبدأ من الأساسيات وننتقل تدريجياً إلى المفاهيم المتقدمة مع التطبيق العملي على مشاريع حقيقية.
      
      ستتعلم كيفية إنشاء واجهات مستخدم جذابة وتفاعلية، وإدارة الحالة، والتعامل مع APIs، 
      وتحسين الأداء، ونشر التطبيقات على الإنترنت.
    `,
    whatYouWillLearn: [
      "أساسيات React و JSX",
      "إدارة الحالة باستخدام useState و useEffect",
      "التوجيه والملاحة في Next.js",
      "التعامل مع APIs و Fetch Data",
      "تصميم واجهات مستخدم متجاوبة",
      "تحسين الأداء والـ SEO",
      "نشر التطبيقات على Vercel",
      "أفضل الممارسات في تطوير React",
    ],
    requirements: [
      "معرفة أساسية بـ HTML و CSS",
      "فهم أساسيات JavaScript",
      "لا يتطلب خبرة سابقة في React",
      "حاسوب مع إمكانية تثبيت Node.js",
    ],
    curriculum: [
      {
        title: "مقدمة في React",
        lessons: 8,
        duration: "2 ساعة",
        items: [
          { title: "ما هو React؟", duration: "15 دقيقة", type: "video", free: true },
          { title: "إعداد بيئة التطوير", duration: "20 دقيقة", type: "video", free: true },
          { title: "أول مكون React", duration: "18 دقيقة", type: "video", free: false },
          { title: "فهم JSX", duration: "22 دقيقة", type: "video", free: false },
          { title: "Props والمكونات", duration: "25 دقيقة", type: "video", free: false },
          { title: "التمرين العملي الأول", duration: "30 دقيقة", type: "exercise", free: false },
          { title: "State والأحداث", duration: "28 دقيقة", type: "video", free: false },
          { title: "مراجعة الوحدة", duration: "12 دقيقة", type: "quiz", free: false },
        ],
      },
      {
        title: "Next.js الأساسيات",
        lessons: 10,
        duration: "2.5 ساعة",
        items: [
          { title: "مقدمة في Next.js", duration: "18 دقيقة", type: "video", free: false },
          { title: "إنشاء مشروع Next.js", duration: "15 دقيقة", type: "video", free: false },
          { title: "نظام التوجيه", duration: "25 دقيقة", type: "video", free: false },
          { title: "الصفحات والتخطيطات", duration: "22 دقيقة", type: "video", free: false },
          { title: "CSS Modules و Styled Components", duration: "20 دقيقة", type: "video", free: false },
          { title: "الصور والوسائط", duration: "18 دقيقة", type: "video", free: false },
          { title: "API Routes", duration: "28 دقيقة", type: "video", free: false },
          { title: "تمرين: بناء مدونة بسيطة", duration: "45 دقيقة", type: "exercise", free: false },
          { title: "اختبار الوحدة", duration: "15 دقيقة", type: "quiz", free: false },
        ],
      },
      {
        title: "إدارة الحالة المتقدمة",
        lessons: 12,
        duration: "3 ساعات",
        items: [
          { title: "useState المتقدم", duration: "20 دقيقة", type: "video", free: false },
          { title: "useEffect والتأثيرات الجانبية", duration: "25 دقيقة", type: "video", free: false },
          { title: "useContext لإدارة الحالة العامة", duration: "30 دقيقة", type: "video", free: false },
          { title: "useReducer للحالات المعقدة", duration: "28 دقيقة", type: "video", free: false },
          { title: "Custom Hooks", duration: "22 دقيقة", type: "video", free: false },
          { title: "Redux Toolkit", duration: "35 دقيقة", type: "video", free: false },
          { title: "تمرين: تطبيق إدارة المهام", duration: "50 دقيقة", type: "exercise", free: false },
          { title: "أفضل الممارسات", duration: "18 دقيقة", type: "video", free: false },
          { title: "تحسين الأداء", duration: "25 دقيقة", type: "video", free: false },
          { title: "اختبار عملي", duration: "30 دقيقة", type: "exercise", free: false },
          { title: "مراجعة شاملة", duration: "20 دقيقة", type: "video", free: false },
          { title: "اختبار الوحدة", duration: "12 دقيقة", type: "quiz", free: false },
        ],
      },
      {
        title: "التعامل مع APIs والبيانات",
        lessons: 8,
        duration: "2.5 ساعة",
        items: [
          { title: "مقدمة في REST APIs", duration: "18 دقيقة", type: "video", free: false },
          { title: "Fetch API و Axios", duration: "22 دقيقة", type: "video", free: false },
          { title: "إدارة حالات التحميل والأخطاء", duration: "25 دقيقة", type: "video", free: false },
          { title: "SWR لجلب البيانات", duration: "28 دقيقة", type: "video", free: false },
          { title: "تمرين: تطبيق الطقس", duration: "40 دقيقة", type: "exercise", free: false },
          { title: "GraphQL الأساسيات", duration: "30 دقيقة", type: "video", free: false },
          { title: "التعامل مع النماذج", duration: "20 دقيقة", type: "video", free: false },
          { title: "اختبار الوحدة", duration: "15 دقيقة", type: "quiz", free: false },
        ],
      },
      {
        title: "المشروع النهائي والنشر",
        lessons: 7,
        duration: "2 ساعة",
        items: [
          { title: "تخطيط المشروع النهائي", duration: "15 دقيقة", type: "video", free: false },
          { title: "بناء تطبيق التجارة الإلكترونية", duration: "45 دقيقة", type: "exercise", free: false },
          { title: "تحسين الأداء والـ SEO", duration: "20 دقيقة", type: "video", free: false },
          { title: "اختبار التطبيق", duration: "18 دقيقة", type: "video", free: false },
          { title: "النشر على Vercel", duration: "22 دقيقة", type: "video", free: false },
          { title: "مراجعة نهائية", duration: "15 دقيقة", type: "video", free: false },
          { title: "الخطوات التالية", duration: "10 دقيقة", type: "video", free: false },
        ],
      },
    ],
  }

  const reviews = [
    {
      name: "سارة أحمد",
      rating: 5,
      date: "2024-01-10",
      comment: "دورة ممتازة جداً! الشرح واضح والأمثلة عملية. تعلمت الكثير وأصبحت قادرة على بناء تطبيقات React بثقة.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "محمد علي",
      rating: 5,
      date: "2024-01-08",
      comment: "المدرب محترف جداً والمحتوى منظم بشكل ممتاز. المشاريع العملية ساعدتني كثيراً في فهم المفاهيم.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "فاطمة حسن",
      rating: 4,
      date: "2024-01-05",
      comment: "دورة جيدة جداً للمبتدئين في React. أتمنى لو كان هناك المزيد من التمارين العملية.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Link href="/courses" className="text-blue-400 hover:text-blue-300 flex items-center">
                  <ArrowLeft className="w-4 h-4 ml-2" />
                  العودة إلى الدورات
                </Link>
              </div>

              <div className="mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.subtitle}</p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current ml-1" />
                  <span className="font-semibold ml-1">{course.rating}</span>
                  <span className="text-gray-300">({course.reviews} تقييم)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 ml-1" />
                  {course.students.toLocaleString()} طالب
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 ml-1" />
                  {course.duration}
                </div>
                <div className="flex items-center text-gray-300">
                  <BookOpen className="w-5 h-5 ml-1" />
                  {course.lessons} درس
                </div>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse mb-6">
                <Image
                  src={course.instructor.image || "/placeholder.svg"}
                  alt={course.instructor.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">بواسطة {course.instructor.name}</p>
                  <p className="text-gray-300 text-sm">{course.instructor.title}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Video Preview & Enrollment */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <div className="relative">
                  <Image
                    src={course.videoUrl || "/placeholder.svg"}
                    alt="معاينة الدورة"
                    width={400}
                    height={225}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-t-xl">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Play className="w-6 h-6 ml-2" />
                      معاينة الدورة
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 space-x-reverse mb-2">
                      <span className="text-3xl font-bold text-blue-600">{course.price} ر.س</span>
                      <span className="text-xl text-gray-400 line-through">{course.originalPrice} ر.س</span>
                    </div>
                    <div className="text-green-600 font-medium">
                      وفر {course.originalPrice - course.price} ر.س (
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%)
                    </div>
                  </div>

                  {!isEnrolled ? (
                    <div className="space-y-3">
                      <Button className="w-full btn-primary text-lg py-3" onClick={() => setIsEnrolled(true)}>
                        التسجيل في الدورة
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Heart className="w-4 h-4 ml-2" />
                        إضافة للمفضلة
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Share2 className="w-4 h-4 ml-2" />
                        مشاركة الدورة
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center font-medium">
                        <CheckCircle className="w-5 h-5 inline ml-2" />
                        مسجل في الدورة
                      </div>
                      <Button className="w-full btn-primary">
                        <PlayCircle className="w-4 h-4 ml-2" />
                        متابعة التعلم
                      </Button>
                    </div>
                  )}

                  <div className="mt-6 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 ml-2" />
                      اللغة: {course.language}
                    </div>
                    <div className="flex items-center">
                      <Smartphone className="w-4 h-4 ml-2" />
                      متاح على الجوال والحاسوب
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 ml-2" />
                      شهادة إتمام معتمدة
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 ml-2" />
                      موارد قابلة للتحميل
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
                <TabsTrigger value="curriculum">المنهج</TabsTrigger>
                <TabsTrigger value="instructor">المدرب</TabsTrigger>
                <TabsTrigger value="reviews">التقييمات</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">وصف الدورة</h3>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      {course.description.split("\n").map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold mt-8 mb-4">ما ستتعلمه في هذه الدورة</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 ml-3 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold mt-8 mb-4">المتطلبات</h4>
                    <ul className="space-y-2">
                      {course.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full ml-3 mt-2 flex-shrink-0"></div>
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">منهج الدورة</h3>
                    <div className="space-y-4">
                      {course.curriculum.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="border rounded-lg">
                          <div className="p-4 bg-gray-50 border-b">
                            <div className="flex justify-between items-center">
                              <h4 className="text-lg font-semibold">{section.title}</h4>
                              <div className="text-sm text-gray-600">
                                {section.lessons} دروس • {section.duration}
                              </div>
                            </div>
                          </div>
                          <div className="divide-y">
                            {section.items.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="p-4 flex items-center justify-between hover:bg-gray-50">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center ml-3">
                                    {lesson.type === "video" && <Play className="w-4 h-4 text-blue-600" />}
                                    {lesson.type === "exercise" && <BookOpen className="w-4 h-4 text-blue-600" />}
                                    {lesson.type === "quiz" && <Trophy className="w-4 h-4 text-blue-600" />}
                                  </div>
                                  <div>
                                    <p className="font-medium">{lesson.title}</p>
                                    <p className="text-sm text-gray-600">{lesson.duration}</p>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2 space-x-reverse">
                                  {lesson.free && (
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                                      مجاني
                                    </span>
                                  )}
                                  {lesson.free ? (
                                    <Button size="sm" variant="outline">
                                      <Play className="w-4 h-4 ml-1" />
                                      معاينة
                                    </Button>
                                  ) : (
                                    <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 space-x-reverse mb-6">
                      <Image
                        src={course.instructor.image || "/placeholder.svg"}
                        alt={course.instructor.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{course.instructor.name}</h3>
                        <p className="text-gray-600 mb-4">{course.instructor.title}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{course.instructor.rating}</div>
                            <div className="text-sm text-gray-600">تقييم المدرب</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">
                              {course.instructor.students.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">طالب</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{course.instructor.courses}</div>
                            <div className="text-sm text-gray-600">دورة</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">8+</div>
                            <div className="text-sm text-gray-600">سنوات خبرة</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">نبذة عن المدرب</h4>
                      <p className="text-gray-700 leading-relaxed">{course.instructor.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold">تقييمات الطلاب</h3>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current ml-1" />
                        <span className="text-xl font-bold ml-2">{course.rating}</span>
                        <span className="text-gray-600">({course.reviews} تقييم)</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {reviews.map((review, index) => (
                        <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start space-x-4 space-x-reverse">
                            <Image
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.name}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">{review.name}</h4>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center mt-6">
                      <Button variant="outline">عرض المزيد من التقييمات</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Course Features */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">تتضمن هذه الدورة:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-600 ml-2" />
                      {course.duration} من المحتوى حسب الطلب
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 text-blue-600 ml-2" />
                      {course.lessons} درس
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 text-blue-600 ml-2" />
                      موارد قابلة للتحميل
                    </div>
                    <div className="flex items-center">
                      <Smartphone className="w-4 h-4 text-blue-600 ml-2" />
                      الوصول عبر الجوال والحاسوب
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-blue-600 ml-2" />
                      شهادة إتمام
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-blue-600 ml-2" />
                      وصول مدى الحياة
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Courses */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">دورات ذات صلة</h4>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex space-x-3 space-x-reverse">
                        <Image
                          src={`/placeholder.svg?height=60&width=80&query=Related course ${i}`}
                          alt={`دورة ذات صلة ${i}`}
                          width={80}
                          height={60}
                          className="w-20 h-15 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h5 className="font-medium text-sm line-clamp-2 mb-1">
                            دورة تطوير تطبيقات الجوال بـ React Native
                          </h5>
                          <p className="text-xs text-gray-600 mb-1">أحمد محمد</p>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 fill-current ml-1" />
                            <span className="text-xs">4.7</span>
                            <span className="text-xs text-blue-600 font-semibold mr-2">199 ر.س</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
