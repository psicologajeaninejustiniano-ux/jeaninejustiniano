import { Instagram } from "lucide-react";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/jeanine.justiniano?igsh=b2x6aHUzMmFzYnZn",
  tiktok: "https://www.tiktok.com/@jjusmo?_r=1&_d=ej6micjm82ehij&sec_uid=MS4wLjABAAAASWnCVHd9TwfBGnONatJTvJ4oVr7kttrllWp3IJpGX3kTpTHPzRGcojHrs2Mq_b8R&share_author_id=7173271059012092933&sharer_language=es&source=h5_m&u_code=e57cc5mk79e39c&timestamp=1769554180&user_id=7173271059012092933&sec_user_id=MS4wLjABAAAASWnCVHd9TwfBGnONatJTvJ4oVr7kttrllWp3IJpGX3kTpTHPzRGcojHrs2Mq_b8R&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7599628808564246293&share_link_id=414aef27-6140-46b8-b4ab-9e8a3c36c5fe&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1",
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="section-padding bg-card py-12">
      <div className="container-therapy">
        <div className="text-center">
          <h3 className="font-serif text-2xl text-foreground mb-2">
            Jeanine Justiniano
          </h3>
          <p className="text-muted-foreground mb-6">
            Psicóloga · Santa Cruz, Bolivia
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>

          <div className="max-w-xl mx-auto space-y-4 text-sm text-muted-foreground">
            <p>
              Todo lo que compartas conmigo es confidencial. 
              Tu privacidad está protegida bajo el código ético profesional.
            </p>
            <p className="text-xs opacity-80">
              Este sitio tiene fines informativos. El contenido no reemplaza 
              una consulta psicológica profesional.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Jeanine Justiniano
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
