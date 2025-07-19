"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Star, Clock, Users, ArrowLeft, Grid, List } from "lucide-react"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")

  const categories = [
    { id: "all", name: "جميع الدورات", count: 250 },
    { id: "programming", name: "البرمجة", count: 85 },
    { id: "design", name: "التصميم", count: 42 },
    { id: "marketing", name: "التسويق", count: 38 },
    { id: "business", name: "الأعمال", count: 35 },
    { id: "languages", name: "اللغات", count: 28 },
    { id: "photography", name: "التصوير", count: 22 },
  ]

  const courses = [
    {
      id: 1,
      title: "تطوير تطبيقات الويب بـ React و Next.js",
      instructor: "أحمد محمد",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      students: 1250,
      duration: "12 ساعة",
      lessons: 45,
      level: "متوسط",
      image: "/placeholder.svg?height=200&width=300",
      category: "programming",
      description: "تعلم بناء تطبيقات ويب حديثة وتفاعلية باستخدام React و Next.js مع أفضل الممارسات",
      tags: ["React", "Next.js", "JavaScript", "Frontend"],
    },
    {
      id: 2,
      title: "التصميم الجرافيكي الاحترافي بـ Adobe Creative Suite",
      instructor: "فاطمة أحمد",
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      students: 890,
      duration: "8 ساعات",
      lessons: 32,
      level: "مبتدئ",
      image: "/placeholder.svg?height=200&width=300",
      category: "design",
      description: "احترف التصميم الجرافيكي باستخدام Photoshop و Illustrator و InDesign",
      tags: ["Photoshop", "Illustrator", "InDesign", "Design"],
    },
    {
      id: 3,
      title: "التسويق الرقمي الشامل ووسائل التواصل الاجتماعي",
      instructor: "محمد علي",
      price: 249,
      originalPrice: 349,
      rating: 4.7,
      students: 2100,
      duration: "15 ساعة",
      lessons: 58,
      level: "متوسط",
      image: "/placeholder.svg?height=200&width=300",
      category: "marketing",
      description: "تعلم استراتيجيات التسويق الرقمي الحديثة وإدارة حملات وسائل التواصل الاجتماعي",
      tags: ["SEO", "Social Media", "Google Ads", "Analytics"],
    },
    {
      id: 4,
      title: "Python للمبتدئين - من الصفر إلى الاحتراف",
      instructor: "سارة حسن",
      price: 179,
      originalPrice: 249,
      rating: 4.6,
      students: 1580,
      duration: "20 ساعة",
      lessons: 75,
      level: "مبتدئ",
      image: "/placeholder.svg?height=200&width=300",
      category: "programming",
      description: "تعلم لغة Python من الأساسيات حتى المشاريع المتقدمة مع التطبيق العملي",
      tags: ["Python", "Programming", "Data Science", "Backend"],
    },
    {
      id: 5,
      title: "إدارة الأعمال والقيادة الفعالة",
      instructor: "خالد الأحمد",
      price: 329,
      originalPrice: 429,
      rating: 4.8,
      students: 750,
      duration: "10 ساعات",
      lessons: 38,
      level: "متقدم",
      image: "/placeholder.svg?height=200&width=300",
      category: "business",
      description: "طور مهاراتك في إدارة الأعمال والقيادة لتحقيق النجاح المهني",
      tags: ["Management", "Leadership", "Strategy", "Business"],
    },
    {
      id: 6,
      title: "تعلم اللغة الإنجليزية للأعمال",
      instructor: "نور الدين",
      price: 149,
      originalPrice: 199,
      rating: 4.5,
      students: 920,
      duration: "6 ساعات",
      lessons: 24,
      level: "متوسط",
      image: "/placeholder.svg?height=200&width=300",
      category: "languages",
      description: "احترف اللغة الإنجليزية في بيئة العمل والتواصل المهني",
      tags: ["English", "Business", "Communication", "Language"],
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default: // popular
        return b.students - a.students
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">جميع الدورات التدريبية</h1>
          <p className="text-gray-600 text-lg">اكتشف مجموعة واسعة من الدورات المصممة لتطوير مهاراتك المهنية</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">البحث</label>
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="ابحث عن دورة..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">التصنيفات</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-right px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">ترتيب حسب</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="popular">الأكثر شعبية</option>
                  <option value="rating">الأعلى تقييماً</option>
                  <option value="price-low">السعر: من الأقل للأعلى</option>
                  <option value="price-high">السعر: من الأعلى للأقل</option>
                  <option value="newest">الأحدث</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center space-x-4 space-x-reverse">
                <span className="text-gray-600">
                  عرض {sortedCourses.length} من {courses.length} دورة
                </span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Courses Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}>
              {sortedCourses.map((course) => (
                <Card
                  key={course.id}
                  className={`card hover:scale-105 transition-all duration-300 ${
                    viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                  }`}
                >
                  <div className={viewMode === "list" ? "sm:w-1/3" : ""}>
                    <div className="relative">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={300}
                        height={200}
                        className={`object-cover ${
                          viewMode === "list"
                            ? "w-full h-48 sm:h-full rounded-t-xl sm:rounded-r-none sm:rounded-l-xl"
                            : "w-full h-48 rounded-t-xl"
                        }`}
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find((cat) => cat.id === course.category)?.name}
                      </div>
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        خصم {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                      </div>
                    </div>
                  </div>

                  <CardContent className={`p-6 ${viewMode === "list" ? "sm:w-2/3 flex flex-col justify-between" : ""}`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-600 font-medium">{course.level}</span>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                      <p className="text-gray-600 mb-2">بواسطة {course.instructor}</p>

                      {viewMode === "list" && <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>}

                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 ml-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 ml-1" />
                          {course.students} طالب
                        </div>
                        <div>{course.lessons} درس</div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
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

            {sortedCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">لم يتم العثور على دورات</h3>
                <p className="text-gray-600 mb-4">جرب تغيير معايير البحث أو التصفية</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                >
                  إعادة تعيين الفلاتر
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
