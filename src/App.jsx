import "./App.css";
import { Sparkles } from "lucide-react";

import founderImg from "./assets/founder.jpg";
import founder2Img from "./assets/founder2.jpg";
import founder3Img from "./assets/founder3.jpg";
import guest1 from "./assets/guest1.png";
import guest2 from "./assets/guest2.png";
import guest3 from "./assets/guest3.png";

const stats = [
  { value: "40%", label: "Tối ưu chi phí vận hành" },
  { value: "24/7", label: "AI hỗ trợ xử lý công việc" },
  { value: "3x", label: "Tăng tốc độ phản hồi" },
  { value: "SME", label: "Tập trung doanh nghiệp vừa & nhỏ" },
];

const problems = [
  {
    title: "Chủ doanh nghiệp SME",
    problem: "Quy trình vận hành phụ thuộc quá nhiều vào con người.",
    solution: "Thiết kế mô hình làm việc kết hợp giữa nhân viên AI và nhân viên thật.",
  },
  {
    title: "Đội sales / CSKH",
    problem: "Bỏ sót khách, trả lời chậm, dữ liệu lead rời rạc.",
    solution: "AI chatbot + CRM + cảnh báo tự động giúp chăm sóc khách nhanh hơn.",
  },
  {
    title: "Phòng vận hành",
    problem: "Báo cáo, nhập liệu, kiểm tra dữ liệu còn làm thủ công.",
    solution: "Tự động hóa quy trình lặp lại bằng n8n, AI và Google Sheet/Supabase.",
  },
  {
    title: "Chủ shop / Dịch vụ",
    problem: "Muốn dùng AI nhưng không biết bắt đầu từ đâu.",
    solution: "Tư vấn lộ trình chuyển đổi AI theo từng bước, dễ áp dụng, tiết kiệm chi phí.",
  },
];

const projects = [
  {
    title: "AI Chatbot tư vấn & lọc lead",
    desc: "Xây chatbot trả lời tự động, ghi nhận nhu cầu, xin SĐT và chuyển lead nóng cho nhân viên thật.",
    tags: ["AI Chatbot", "CRM", "Zalo", "n8n"],
    result: "Giảm bỏ sót khách",
  },
  {
    title: "Quy trình AI + Nhân sự thật",
    desc: "Thiết kế lại luồng làm việc để AI xử lý việc lặp lại, con người tập trung vào tư vấn và chốt đơn.",
    tags: ["Workflow", "AI Staff", "man-in-loop"],
    result: "Tối ưu đến 40% chi phí",
  },
  {
    title: "Dashboard vận hành SME",
    desc: "Tự động tổng hợp dữ liệu bán hàng, lead, chăm sóc khách và báo cáo cho quản lý.",
    tags: ["Dashboard", "Automation", "Data"],
    result: "Ra quyết định nhanh hơn",
  },
];

const techs = [
  "OpenAI",
  "Claude",
  "n8n",
  "Make",
  "Supabase",
  "Vercel",
  "React",
  "Google Sheets",
  "Zalo OA",
  "Telegram Bot",
  "CRM",
  "Python",
];

const testimonials = [
  {
    name: "Anh Minh",
    role: "Chủ doanh nghiệp dịch vụ",
    avatar: guest1,
    text: "Phong giúp tôi nhìn lại toàn bộ quy trình vận hành và chỉ ra phần nào nên để AI xử lý, phần nào cần con người giữ lại.",
  },
  {
    name: "Chị Hạnh",
    role: "Quản lý và phát triển kinh doanh",
    avatar: guest2,
    text: "Sau khi có chatbot và cảnh báo lead, đội sales phản hồi nhanh hơn và ít bỏ sót khách hơn trước.",
  },
  {
    name: "Anh Quân",
    role: "Founder SME về lĩnh vực bán lẻ",
    avatar: guest3,
    text: "Điểm tôi thích là giải pháp không phức tạp. Làm từng bước, dễ hiểu, áp dụng được ngay vào doanh nghiệp nhỏ.",
  },
];

function App() {
  return (
    <main className="page">
      <header className="header">
        <div className="logo">
          phong<span>.ai</span>
        </div>

        <nav>
          <a href="#home">Trang chủ</a>
          <a href="#projects">Giải pháp</a>
          <a href="#skills">Công nghệ</a>
          <a href="#contact">Liên hệ</a>
        </nav>

        <button
  className="headerBtn"
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  <div className="headerBtnIcon">📅</div>

  <div className="headerBtnText">
    <strong>Đặt lịch hẹn miễn phí</strong>
    <span>Tư vấn 1:1 cùng Phong</span>
  </div>

  <div className="headerBtnArrow">→</div>
</button>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <div className="pill">
            AI CONSULTING • SME AUTOMATION • HUMAN + AI WORKFLOW
          </div>

          <h1>
            Tôi giúp doanh nghiệp <span>tối ưu vận hành bằng AI</span>
          </h1>

          <p>
            "Tôi tư vấn và triển khai quy trình làm việc kết hợp giữa nhân viên
            AI và nhân viên thật, giúp doanh nghiệp vừa và nhỏ tối ưu đến 40%
            chi phí vận hành."
          </p>

          <div className="heroActions">
            <a href="#projects" className="heroPrimaryBtn">
  Xem giải pháp nổi bật →
</a>
            <a href="https://zalo.me" target="_blank">
              Nhắn tin Zalo
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="portraitCard">
            <div className="portraitGlow"></div>
            <img src={founderImg} alt="Phong AI Consultant" />
          </div>

          <div className="floatingCard top">
            <strong>AI WORKFLOW</strong>
            <small>Đang tối ưu vận hành ●</small>
          </div>

          <div className="floatingCard bottom">
            <strong>AI Transformation Consultant</strong>
            <small>SME • Automation • Operation</small>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map((item) => (
          <div className="statCard" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="logos">
        <span>PHÙ HỢP CHO</span>
        <b>SME</b>
        <b>Retail</b>
        <b>Service</b>
        <b>Education</b>
        <b>Agency</b>
      </section>

      <section className="panel">
        <div className="sectionHead">
          <h2>Tôi giúp doanh nghiệp giải quyết vấn đề gì?</h2>
        </div>

        <div className="problemGrid">
          {problems.map((item) => (
            <div className="problemCard" key={item.title}>
              <div className="icon">
  <Sparkles size={20} strokeWidth={2.4} />
</div>
              <h3>{item.title}</h3>
              <p>
                <b>Vấn đề:</b> {item.problem}
              </p>
              <p>
                <b>Giải pháp:</b> {item.solution}
              </p>
            </div>
          ))}
        </div>

        <div id="projects" className="sectionHead spaced">
          <h2>Giải pháp nổi bật</h2>
          <a href="#contact">Trao đổi tư vấn →</a>
        </div>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <div className="projectCard" key={project.title}>
              <div className="projectImage">
                <img
                  src={[founderImg, founder2Img, founder3Img][index]}
                  alt={project.title}
                />
              </div>

              <div className="projectContent">
                <h3>{project.title}</h3>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p>{project.desc}</p>
                <strong>{project.result}</strong>
              </div>
            </div>
          ))}
        </div>

        <div id="skills" className="sectionHead spaced">
          <h2>Công nghệ & công cụ triển khai</h2>
        </div>

        <div className="techStack">
          {techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="sectionHead spaced">
          <h2>Khách hàng nói gì về phong.ai</h2>
        </div>

        <div className="testimonialGrid">
          {testimonials.map((item) => (
            <div className="testimonialCard" key={item.name}>
              <img
  className="avatar"
  src={item.avatar}
  alt={item.name}
/>
              <h3>{item.name}</h3>
              <small>{item.role}</small>
              <div className="stars">★★★★★</div>
              <p>“{item.text}”</p>
            </div>
          ))}
        </div>

        <section id="contact" className="finalCta">
          <h2>Sẵn sàng xây quy trình vận hành kết hợp AI + con người?</h2>
          <p>
            "Tôi giúp doanh nghiệp vừa và nhỏ bắt đầu chuyển đổi AI theo cách
            thực tế, tiết kiệm và có thể đo lường hiệu quả!"
          </p>

          <div className="ctaBtns">
            <button>Đặt lịch tư vấn miễn phí</button>
            <button className="ghost phoneGhost">
  <span className="phoneIcon">☎</span>
  <span className="phoneText">
    <small>Gọi trực tiếp</small>
    <strong>0918 099 904</strong>
  </span>
</button>
            <a
  className="ghost emailGhost"
  href="mailto:linhchithuymoc@gmail.com"
>
  <span className="emailIcon">✉</span>

  <span className="emailText">
    <small>Gửi email</small>
    <strong>linhchithuymoc@gmail.com</strong>
  </span>
</a>
          </div>
        </section>
      </section>

      <footer>
        <div className="logo">
          phong<span>.ai</span>
        </div>
        <p>© 2026 phong.ai — AI Transformation Consultant for SME</p>
      </footer>
    </main>
  );
}

export default App;