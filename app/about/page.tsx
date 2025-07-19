import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Globe, BookOpen, Heart, Lightbulb, Shield } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "15,000+", label: "طالب نشط" },
    { icon: BookOpen, value: "250+", label: "دورة تدريبية" },
    { icon: Award, value: "85+", label: "مدرب خبير" },
    { icon: Globe, value: "12+", label: "دولة عربية" },
  ]

  const values = [
    {
      icon: Target,
      title: "التميز في التعليم",
      description: "نسعى لتقديم أعلى معايير الجودة في المحتوى التعليمي والتدريب العملي",
    },
    {
      icon: Heart,
      title: "الشغف بالتطوير",
      description: "نؤمن بأن التعلم المستمر هو مفتاح النجاح في عالم التكنولوجيا المتطور",
    },
    {
      icon: Shield,
      title: "الثقة والمصداقية",
      description: "نبني علاقات طويلة الأمد مع طلابنا من خلال الشفافية والالتزام بالوعود",
    },
    {
      icon: Lightbulb,
      title: "الابتكار والإبداع",
      description: "نطور باستمرار طرق تعليمية جديدة ومبتكرة لضمان أفضل تجربة تعليمية",
    },
  ]

  const team = [
    {
      name: "د. أحمد محمد",
      role: "المؤسس والرئيس التنفيذي",
      image: "/placeholder.svg?height=200&width=200",
      bio: "خبير في تطوير البرمجيات مع أكثر من 15 عام من الخبرة في التعليم التقني",
      specialties: ["إدارة المشاريع", "البرمجة", "القيادة"],
    },
    {
      name: "فاطمة أحمد",
      role: "مديرة المحتوى التعليمي",
      image: "/placeholder.svg?height=200&width=200",
      bio: "متخصصة في تصميم المناهج التعليمية وتطوير المحتوى الرقمي التفاعلي",
      specialties: ["تصميم المناهج", "UX/UI", "التعليم الرقمي"],
    },
    {
      name: "محمد علي",
      role: "مدير التسويق الرقمي",
      image: "/placeholder.svg?height=200&width=200",
      bio: "خبير في التسويق الرقمي ووسائل التواصل الاجتماعي مع سجل حافل في النمو",
      specialties: ["التسويق الرقمي", "SEO", "وسائل التواصل"],
    },
    {
      name: "سارة حسن",
      role: "مديرة تجربة المستخدم",
      image: "/placeholder.svg?height=200&width=200",
      bio: "متخصصة في تحسين تجربة المستخدم وضمان رضا الطلاب عن المنصة التعليمية",
      specialties: ["تجربة المستخدم", "تحليل البيانات", "خدمة العملاء"],
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "تأسيس الأكاديمية",
      description: "بدأنا رحلتنا بهدف تقديم تعليم تقني عالي الجودة باللغة العربية",
    },
    {
      year: "2021",
      title: "أول 1000 طالب",
      description: "وصلنا إلى أول ألف طالب وأطلقنا 25 دورة تدريبية متخصصة",
    },
    {
      year: "2022",
      title: "التوسع الإقليمي",
      description: "توسعنا لخدمة 8 دول عربية وأضفنا المزيد من التخصصات",
    },
    {
      year: "2023",
      title: "شراكات استراتيجية",
      description: "أقمنا شراكات مع كبرى الشركات التقنية لتوفير فرص عمل لخريجينا",
    },
    {
      year: "2024",
      title: "15,000 طالب",
      description: "وصلنا إلى 15,000 طالب نشط مع معدل رضا 98% وأكثر من 250 دورة",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">من نحن</h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            نحن أكاديمية التعلم الرقمي، منصة تعليمية رائدة تهدف إلى تمكين الشباب العربي من اكتساب المهارات التقنية
            المطلوبة في سوق العمل الحديث
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <BookOpen className="w-5 h-5 ml-2" />
              تصفح دوراتنا
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent"
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">رؤيتنا ورسالتنا</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">رؤيتنا</h3>
                  <p className="text-gray-700 leading-relaxed">
                    أن نكون المنصة التعليمية الرائدة في الوطن العربي لتعليم المهارات التقنية والرقمية، ونساهم في بناء
                    جيل من المبدعين والمبتكرين القادرين على قيادة التحول الرقمي في المنطقة.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">رسالتنا</h3>
                  <p className="text-gray-700 leading-relaxed">
                    نقدم تعليماً تقنياً عالي الجودة باللغة العربية، من خلال دورات تدريبية متخصصة ومحتوى تفاعلي يواكب أحدث
                    التطورات التكنولوجية، لتمكين الأفراد من تحقيق أهدافهم المهنية والمساهمة في التنمية الاقتصادية.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="رؤيتنا ورسالتنا"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">قيمنا الأساسية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتحدد هويتنا كمؤسسة تعليمية رائدة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">رحلتنا عبر السنوات</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تعرف على أهم المحطات والإنجازات التي حققناها منذ تأسيس الأكاديمية
            </p>
          </div>

          <div className="relative">
            <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                    <Card className="p-6">
                      <CardContent className="p-0">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                            {milestone.year}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full absolute right-1/2 transform translate-x-1/2 border-4 border-white"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">فريق العمل</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تعرف على الخبراء والمتخصصين الذين يقودون رحلة التعلم والتطوير في أكاديميتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">انضم إلى مجتمعنا التعليمي</h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            كن جزءاً من قصة نجاحنا وابدأ رحلتك التعليمية معنا اليوم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <BookOpen className="w-5 h-5 ml-2" />
              استكشف الدورات
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent"
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
