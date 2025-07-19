"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ChevronDown,
  Search,
  BookOpen,
  CreditCard,
  Award,
  Settings,
  HelpCircle,
  MessageSquare,
  Phone,
} from "lucide-react"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [openItems, setOpenItems] = useState<number[]>([])

  const categories = [
    { id: "all", name: "جميع الأسئلة", icon: HelpCircle, count: 24 },
    { id: "courses", name: "الدورات والتعلم", icon: BookOpen, count: 8 },
    { id: "payment", name: "الدفع والفواتير", icon: CreditCard, count: 6 },
    { id: "certificates", name: "الشهادات", icon: Award, count: 4 },
    { id: "account", name: "الحساب والإعدادات", icon: Settings, count: 6 },
  ]

  const faqs = [
    {
      id: 1,
      category: "courses",
      question: "كيف يمكنني التسجيل في دورة تدريبية؟",
      answer:
        "للتسجيل في دورة تدريبية، قم بإنشاء حساب جديد أو تسجيل الدخول إلى حسابك الحالي. ثم تصفح الدورات المتاحة، اختر الدورة التي تريدها، واضغط على زر 'التسجيل في الدورة'. ستحتاج إلى إكمال عملية الدفع لبدء الوصول إلى محتوى الدورة.",
      tags: ["تسجيل", "دورات", "بداية"],
      popular: true,
    },
    {
      id: 2,
      category: "courses",
      question: "هل يمكنني الوصول إلى الدورات مدى الحياة؟",
      answer:
        "نعم، بمجرد شراء الدورة، ستحصل على وصول مدى الحياة إلى جميع محتويات الدورة. يمكنك العودة إلى الدروس في أي وقت ومراجعة المواد حسب الحاجة. كما ستحصل على أي تحديثات مستقبلية للدورة مجاناً.",
      tags: ["وصول", "مدى الحياة", "محتوى"],
      popular: true,
    },
    {
      id: 3,
      category: "certificates",
      question: "كيف يمكنني الحصول على شهادة إتمام الدورة؟",
      answer:
        "للحصول على شهادة إتمام، يجب عليك إكمال جميع دروس الدورة واجتياز الاختبارات النهائية بنجاح. بعد إتمام هذه المتطلبات، ستظهر الشهادة في قسم 'شهاداتي' في لوحة التحكم الخاصة بك، ويمكنك تحميلها أو مشاركتها على LinkedIn.",
      tags: ["شهادة", "إتمام", "اختبار"],
      popular: true,
    },
    {
      id: 4,
      category: "payment",
      question: "ما هي طرق الدفع المقبولة؟",
      answer:
        "نقبل جميع بطاقات الائتمان الرئيسية (Visa, MasterCard, American Express)، بطاقات مدى، التحويل البنكي، والمحافظ الإلكترونية مثل STC Pay، Apple Pay، و Google Pay. جميع المعاملات محمية بتشفير SSL لضمان أمان بياناتك المالية.",
      tags: ["دفع", "بطاقات", "أمان"],
      popular: false,
    },
    {
      id: 5,
      category: "payment",
      question: "هل يمكنني استرداد المبلغ إذا لم أكن راضياً عن الدورة؟",
      answer:
        "نعم، نوفر ضمان استرداد المبلغ خلال 30 يوماً من تاريخ الشراء. إذا لم تكن راضياً عن الدورة لأي سبب، يمكنك طلب الاسترداد من خلال التواصل مع فريق الدعم. سيتم معالجة طلب الاسترداد خلال 5-7 أيام عمل.",
      tags: ["استرداد", "ضمان", "رضا"],
      popular: true,
    },
    {
      id: 6,
      category: "courses",
      question: "هل تتوفر الدورات باللغة العربية فقط؟",
      answer:
        "معظم دوراتنا متوفرة باللغة العربية مع ترجمة للمصطلحات التقنية. كما نوفر بعض الدورات باللغة الإنجليزية مع ترجمة عربية. يمكنك فلترة الدورات حسب اللغة من صفحة تصفح الدورات.",
      tags: ["لغة", "عربية", "ترجمة"],
      popular: false,
    },
    {
      id: 7,
      category: "account",
      question: "كيف يمكنني تغيير كلمة المرور الخاصة بي؟",
      answer:
        "لتغيير كلمة المرور، اذهب إلى لوحة التحكم واضغط على 'الإعدادات'. في قسم 'الأمان'، اضغط على 'تغيير كلمة المرور'. أدخل كلمة المرور الحالية والجديدة، ثم اضغط على 'حفظ التغييرات'. ستتلقى رسالة تأكيد عبر البريد الإلكتروني.",
      tags: ["كلمة مرور", "أمان", "إعدادات"],
      popular: false,
    },
    {
      id: 8,
      category: "courses",
      question: "هل يمكنني تحميل الدروس للمشاهدة دون اتصال بالإنترنت؟",
      answer:
        "حالياً، لا نوفر خيار تحميل الفيديوهات للمشاهدة دون اتصال. جميع المحتويات متاحة للمشاهدة عبر الإنترنت فقط لحماية حقوق الملكية الفكرية. ولكن يمكنك تحميل المواد المكتوبة والملفات المرفقة.",
      tags: ["تحميل", "دون اتصال", "فيديو"],
      popular: false,
    },
    {
      id: 9,
      category: "certificates",
      question: "هل الشهادات معتمدة ومعترف بها؟",
      answer:
        "شهاداتنا معتمدة من أكاديمية التعلم الرقمي ومعترف بها من قبل العديد من الشركات في المنطقة. كما نعمل على الحصول على اعتمادات دولية إضافية. الشهادات تتضمن رقم تحقق فريد يمكن للجهات المهتمة التحقق من صحتها.",
      tags: ["اعتماد", "اعتراف", "تحقق"],
      popular: true,
    },
    {
      id: 10,
      category: "account",
      question: "كيف يمكنني تحديث معلومات ملفي الشخصي؟",
      answer:
        "لتحديث معلومات ملفك الشخصي، اذهب إلى لوحة التحكم واضغط على 'الملف الشخصي'. يمكنك تعديل الاسم، البريد الإلكتروني، رقم الهاتف، والصورة الشخصية. لا تنس الضغط على 'حفظ التغييرات' بعد الانتهاء من التعديل.",
      tags: ["ملف شخصي", "تحديث", "معلومات"],
      popular: false,
    },
    {
      id: 11,
      category: "payment",
      question: "هل يمكنني الدفع بالتقسيط؟",
      answer:
        "نعم، نوفر خيارات دفع بالتقسيط للدورات التي تزيد قيمتها عن 500 ريال. يمكنك اختيار التقسيط على 3 أو 6 أشهر بدون فوائد إضافية. هذا الخيار متاح عند الدفع ببطاقات ائتمان محددة.",
      tags: ["تقسيط", "دفع", "أقساط"],
      popular: false,
    },
    {
      id: 12,
      category: "courses",
      question: "ما هو الحد الأدنى من المتطلبات التقنية لمتابعة الدورات؟",
      answer:
        "تحتاج إلى جهاز كمبيوتر أو هاتف ذكي مع اتصال إنترنت مستقر. المتصفحات المدعومة: Chrome, Firefox, Safari, Edge. للدورات البرمجية، قد تحتاج إلى تثبيت برامج إضافية سيتم توضيحها في بداية كل دورة.",
      tags: ["متطلبات", "تقنية", "متصفح"],
      popular: false,
    },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const popularFAQs = faqs.filter((faq) => faq.popular)

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">الأسئلة الشائعة</h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            نجيب على أكثر الأسئلة شيوعاً حول منصتنا التعليمية وخدماتنا
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث في الأسئلة الشائعة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-12 py-4 text-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">التصنيفات</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-right px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                          selectedCategory === category.id
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <category.icon className="w-5 h-5" />
                          <span>{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">لم تجد إجابة؟</h3>
                  <p className="text-gray-600 text-sm mb-4">تواصل مع فريق الدعم للحصول على مساعدة شخصية</p>
                  <div className="space-y-2">
                    <Button className="w-full" size="sm">
                      <MessageSquare className="w-4 h-4 ml-2" />
                      دردشة مباشرة
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      <Phone className="w-4 h-4 ml-2" />
                      اتصل بنا
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Popular FAQs */}
            {selectedCategory === "all" && searchTerm === "" && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">الأسئلة الأكثر شيوعاً</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {popularFAQs.slice(0, 4).map((faq) => (
                    <Card
                      key={faq.id}
                      className="hover:shadow-md transition-shadow duration-200 cursor-pointer"
                      onClick={() => toggleItem(faq.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{faq.question}</h3>
                            <div className="flex flex-wrap gap-1">
                              {faq.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                              openItems.includes(faq.id) ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {searchTerm
                    ? `نتائج البحث عن "${searchTerm}"`
                    : selectedCategory === "all"
                      ? "جميع الأسئلة"
                      : categories.find((cat) => cat.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-600 mt-1">{filteredFAQs.length} سؤال وجواب</p>
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq) => (
                  <Card key={faq.id} className="hover:shadow-md transition-shadow duration-200">
                    <Collapsible open={openItems.includes(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                      <CollapsibleTrigger className="w-full">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 text-right">
                              <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                              <div className="flex flex-wrap gap-2">
                                {faq.popular && <Badge className="bg-orange-100 text-orange-800">شائع</Badge>}
                                {faq.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <ChevronDown
                              className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 mr-4 ${
                                openItems.includes(faq.id) ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </CardContent>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="px-6 pb-6 pt-0">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">لم يتم العثور على نتائج</h3>
                  <p className="text-gray-600 mb-4">جرب تغيير كلمات البحث أو التصفية</p>
                  <Button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("all")
                    }}
                  >
                    إعادة تعيين البحث
                  </Button>
                </div>
              )}
            </div>

            {/* Still Need Help */}
            <Card className="mt-12 bg-blue-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ما زلت تحتاج مساعدة؟</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  إذا لم تجد إجابة لسؤالك، فريق الدعم الفني متاح لمساعدتك على مدار الساعة
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <MessageSquare className="w-4 h-4 ml-2" />
                    بدء محادثة مباشرة
                  </Button>
                  <Button variant="outline">
                    <Phone className="w-4 h-4 ml-2" />
                    الاتصال بالدعم
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
