import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Geliştirdiğim Projeler
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="E-Ticaret Uygulaması (E-Commerce App):"
          description="Bu React projesi, kullanıcıların çevrimiçi alışveriş yapabileceği bir e-ticaret platformu oluşturmayı amaçlar. Kullanıcılar ürünleri arayabilir, sepetlerine ekleyebilir ve sipariş verebilir. Ödeme işlemleri ve kullanıcı hesap yönetimi gibi temel özellikler içerir."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Kişisel Blog Uygulaması (Personal Blog App):"
          description="Bu proje, kullanıcıların kendi kişisel bloglarını oluşturabileceği ve yayınlayabileceği bir platformu hedefler. Kullanıcılar yazıları düzenleyebilir, yorumlar yapabilir ve bloglarını kişiselleştirebilir. Ayrıca, kullanıcıların sosyal medya paylaşımları yapmasını sağlayacak özellikler eklemek de mümkün."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Görev Yönetim Uygulaması (Task Management App):"
          description="Bu proje, kullanıcıların görevlerini yönetmelerine yardımcı olan bir görev yönetim uygulaması geliştirmeyi amaçlar. Kullanıcılar görevleri ekleyebilir, düzenleyebilir, tamamlayabilir ve takip edebilir. Ayrıca, öncelikler, hatırlatıcılar ve kategoriler gibi özellikler eklemek mümkün olabilir."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Hava Durumu Uygulaması (Weather App):"
          description="Bu proje, kullanıcılara gerçek zamanlı hava durumu bilgilerini gösteren bir uygulama oluşturmayı hedefler. Kullanıcılar konumlarını veya şehirlerini seçebilir ve hava durumu tahminlerini görüntüleyebilir. Ek olarak, günlük veya saatlik hava durumu bilgileri sunmak için farklı veri kaynakları kullanılabilir."
        />
        
      </div>
    </div>
  );
};

export default Projects;