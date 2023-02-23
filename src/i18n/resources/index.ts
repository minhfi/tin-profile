import { languages } from '../languages'
import { ensureObject } from 'src/utils/helpers.utils'

import review from './review.json'
// ... import more modules

// initial resources
const resources: any = {
  en: {
    translation: {
      about_me_description1: 'My name is Dang Tin (Lupin), and I am from Vietnam. I am a product and user interaction designer with over 4 years of experience working in photography, graphic design, and technical product design such as brand design, website design, and mobile application design.',
      about_me_description2: "To become the product designer I am today, I first understood the customer's needs, then did research to come up with the best solution for the UI and UX of the product.",
      about_me_description3: 'For me, design is more than just making things look good. It is a powerful tool for communication and has a great influence on the success of any project. It helps to provide high-quality products and services that lead to a better human user experience and customer satisfaction.',
      profile_description1: 'Design, to me, is more than just making things look nice. It is a powerful tool for communication and has a great influence on the success of any project. It helps to deliver high-quality products and services that lead to a better user experience and customer satisfaction.',
      profile_description2: "I'm a UI/UX Designer! I have more than 4 years of experience in user experience design for cross-platform applications, websites, and software. I am fluent in the leading software for design at the present time. In addition, my experience is not only in research and design but also from a business perspective. As a result, I am always motivated by the passion and core values of each business product associated with customers to create modern and useful user interfaces in order to achieve the end goal.",
      profile_title1: 'ACHIEVEMENTS',
      profile_title2: 'EXPERIENCE',
      profile_title3: 'EDUCATION',
      profile_title4: 'SKILL',
      profile_win_content: "At DesignCrowd, I've Won Over 100 Design Contests.",
      workflow_title1: 'Receive',
      workflow_content1: 'Receive information about projects and products to be built.',
      workflow_title2: 'Treatment',
      workflow_content2: 'Processing information, creating a research environment.',
      workflow_title3: 'Come up with ideas',
      workflow_content3: 'Start StyleCape and gather all of the necessary ideas, from detail to overall.',
      workflow_title4: 'Design',
      workflow_content4_ux: "Develop prototypes that solve the user's pain points.",
      workflow_content4_ui: 'Initialize UI (Visual Design System)',
      workflow_title5: 'Test & Publish',
      workflow_content5: 'Test Requirements -> Test Versions -> Feedback -> Release Final Version.',
      contact: 'Contact me if my profile interests you!',
      company_anvietsonghong_content1: 'Web UI development is based on the concept of multi-fashion products developed by An Viet Song Hong Joint Stock Company (ARR for short).',
      company_kemnghia_content1: 'Graphic design and visual support for multi-channel promotion. Provide publications and develop features that need to be changed on the website.',
      company_matbao_content1: "Contributor reviews and improves an existing website's user interface:",
      company_viettien_content1: 'Website: Renovate the commercial website, create a connection system, and provide customer support and lookup.',
      company_viettien_content2: 'App: Developing an online event platform and incorporating loyalty ideas into the app.',
      company_gmark_content1: 'Research and build a CRM software system.',
      company_gmark_content2: 'Developing an application ecosystem for business digitization: CRM and ERP',
      company_gmark_content3: 'Investment, Restructuring, and Corporate Governance Platform',
      company_propzy_content1: 'Website: Renovate a commercial website. optimize the user experience. App: Shared experience across two platforms (web and app).',
      company_propzy_content2: 'App Propzy',
      company_propzy_content3: 'The platform connects Residents (App) to Management Board (Web).',
      company_ocb_content1: 'Collaborators build CRM systems, distribution management systems, and operations for the department.',
      company_sta_content1: 'Branding: Conduct research and change the overall image of the brand from brand guidelines to official guidelines.',
      company_sta_content2: 'App & Web: Developing an ecosystem for logistics Connect the Customer and the Forwarder.',
      company_dinovative_content1: 'Building Blockchain Products:',
      company_dinovative_content2: 'Developing a system of affiliated businesses:',
      company_dinovative_content3: 'Flying is right!'
    }
  },
  vn: {
    translation: {
      about_me_description1: 'Tôi tên là Đăng Tín (Lupin) và tôi đến từ Việt Nam.Tôi là một Nhà thiết kế Sản phẩm và tương tác người dùng với hơn 4 năm kinh nghiệm làm việc trong Photograhpy, Thiết kế Đồ họa và Thiết kế Sản phẩm Kỹ thuật số như thiết kế Thương hiệu, Trang web và Ứng dụng Di động.',
      about_me_description2: 'Để trở thành Chuyên viên về Product Designer như ngày hôm nay, tôi hiểu nhu cầu của khách hàng, sau đó tôi nghiên cứu và đưa ra giải pháp tốt nhất với UI/ UX trong sản phẩm.',
      about_me_description3: 'Đối với tôi, Thiết kế không chỉ là làm cho mọi thứ trông đẹp và tốt. Nó là một công cụ mạnh mẽ để giao tiếp và có ảnh hưởng lớn đến sự thành công của bất kỳ dự án nào. Nó giúp cung cấp các sản phẩm và dịch vụ chất lượng cao dẫn đến trải nghiệm sử dụng tuyệt vời của con người tốt hơn và mang lại sự hài lòng từ khách hàng.',
      profile_description1: 'Với tôi, Design không chỉ là tạo nên mọi thứ trông đẹp và tốt. Đó là công cụ đắc lực cho sự giao tiếp và là sự ảnh hưởng lớn cho thành công của mọi dự án. Nó giúp cung cấp sản phẩm và dịch vụ chất lượng cao dẫn đến trải nghiệm người dùng tốt hơn và mang đến sự hài lòng từ khách hàng.',
      profile_description2: 'Tôi là UI/UX Designer! Tôi có hơn 4 năm kinh nghiệm trong thiết kế trải nghiệm người dùng trên đa nền tảng Application,Website & Sofware. Tôi thông thạo các phần mềm đi đầu cho việc thiết kế ở thời điểm hiện tại. Ngoài ra, kinh nghiệm của tôi không chỉ dừng lại ở việc nghiên cứu và thiết kế, mà còn là quan điểm của doanh nghiệp. Chính vì vậy, tôi luôn thúc đẩy bởi niềm đam mê và cốt lõi giá trị mỗi sản phẩm của doanh nghiệp liên kết kết với khách hàng để tạo ra những giao diện người dùng hiện đại và thật tiện ích cho đến mục tiêu cuối cùng.',
      profile_title1: 'THÀNH TÍCH',
      profile_title2: 'KINH NGHIỆM',
      profile_title3: 'HỌC VẤN',
      profile_title4: 'KỸ NĂNG',
      profile_win_content: 'Chiến thắng hơn 100 cuộc thi Thiết kế tại DesignCrowd',
      workflow_title1: 'Tiếp nhận',
      workflow_content1: 'Tiếp nhận thông tin dự án, sản phẩm cần xây dựng.',
      workflow_title2: 'Xử lí',
      workflow_content2: 'Xử lí thông tin, tạo môi trường Research.',
      workflow_title3: 'Lên ý tưởng',
      workflow_content3: 'Khởi tạo StyleCape, lên các ý tưởng cần thiết từ chi tiết đến tổng thể.',
      workflow_title4: 'Design',
      workflow_content4_ux: '- Phát triển các mẫu thử giải quyết Painpoint của User.',
      workflow_content4_ui: '- Khởi tạo hệ thống thiết kế UI - Visual.',
      workflow_title5: 'Kiểm tra & Xuất bản',
      workflow_content5: 'Kiểm tra yêu cầu -> Xuất bản các phiên bản thử nghiệm -> Thu thập phản hồi -> Đưa ra phiên bản cuối.',
      contact: 'Liên hệ tôi, nếu hồ sơ của tôi làm bạn hứng thú!',
      company_anvietsonghong_content1: 'Phát triển UI Web dựa trên khái niệm đa sản phẩm thời trang của Công ty Cổ phần An Việt Sông Hồng (viết tắt là ARR).',
      company_kemnghia_content1: 'Thiết kế đồ hoạ, visual hổ trợ quảng bá đa kênh. Cung cấp các ấn phẩm, phát triển tính năng cần thay đổi trên Website.',
      company_matbao_content1: 'Cộng tác viên đánh giá và cải tạo giao diện người dùng cho trang Web hiện tại:',
      company_viettien_content1: 'Website: Cải tạo website thương mại, xây dựng hệ thống kết nối, hỗ trợ và tra cứu từ khách hàng.',
      company_viettien_content2: 'App: Phát triển nền tảng tổ chức sự kiện trực tuyến, kết hợp ý tưởng Loyalti trên ứng dụng.',
      company_gmark_content1: 'Nghiên cứu và xây dựng hệ thống CRM Software.',
      company_gmark_content2: 'Phát triển Hệ sinh thái Ứng dụng cho số hoá doanh nghiệp: CRM, ERP.',
      company_gmark_content3: 'Nền tảng Đầu tư, Tái cấu trúc & Quản trị Doanh nghiệp',
      company_propzy_content1: 'Website: Cải tạo Website thương mại. Tối ưu hoá trãi nghiệm người dùng. App: Đồng trải nghiệm trên 2 nền tảng Web & App.',
      company_propzy_content2: 'App Propzy',
      company_propzy_content3: 'Nền tảng kết nối Cư dân (App) đến BQL (Website), và ngược lại.',
      company_ocb_content1: 'Cộng tác viên xây dựng hệ thống CRM, quản lý phân phối và điều hành cho nội bộ phận.',
      company_sta_content1: 'Branding: Ngiên cứu, và thay đổi toàn bộ hình ảnh thương hiệu từ Brand Guidline đến Offical.',
      company_sta_content2: 'App & Web: Phát triển hệ sinh thái phục vụ cho Logistics. Kết nối Customer & Forwarder trên hai nền tảng App và Web.',
      company_dinovative_content1: 'Xây dựng các Product thuộc về Blockchain:',
      company_dinovative_content2: 'Phát triển hệ thống các doanh nghiệp liên kết:',
      company_dinovative_content3: 'Bay là thích ngay!'
    }
  }
}

// merge resources
const modules: any = {
  review
  // ...modules
}

const langs = Object.keys(languages)
const defaultDefined = langs.reduce(
  (result, lang) => ({
    ...result,
    [lang]: {}
  }),
  {}
)

Object.keys(modules).map((mod) => {
  const modResource: any = Object.assign(
    {},
    defaultDefined,
    ensureObject(modules[mod])
  )

  for (const lang of langs) {
    Object.assign(
      resources[lang].translation,
      Object.keys(modResource[lang]).reduce(
        (result, key) => ({
          ...result,
          [`${mod}.${key}`]: modResource[lang][key]
        }),
        {}
      )
    )
  }

  return null
})

export default resources
