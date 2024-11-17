import styled from "styled-components";
import Topbar from "../components/Topbar";
import { Back } from "../components/Button";
import { Card, Col, Container, Row } from "react-bootstrap";
import Logo from "../components/Logo";
import { LuBuilding2, LuRocket, LuTarget, LuUsers } from "react-icons/lu";

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const AboutContainer = styled(Container)`
  margin-top: 20px;
  padding-bottom: 120px;
`;

const SectionTitle = styled.h5`
  font-weight: bold;
  color: #333;
  margin-top: 20px;
  margin-bottom: .8rem;
`;

const CardWrapper = styled(Card)`
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  h6 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const CardContent = styled.div`
  text-align: justify;
`;

const VisionMissionText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  text-align: justify;
`;

const TeamMember = styled.div`
  text-align: center;
  margin-top: 10px;

  img {
    width: 120px;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h6 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: #777;
  }
`;

export default function AboutPage() {
  return (
    <>
      <div className="d-none d-md-inline">
        <Topbar />
      </div>
      <AboutContainer>
        {/* Header */}
        <Header className="d-md-none">
          <Back />
          <h5 className="m-0">About</h5>
        </Header>
        <div className="d-flex justify-content-center">
          <Logo />
        </div>

        {/* Tentang GoRent */}
        <SectionTitle>Tentang GoRent</SectionTitle>
        <p style={{
          textAlign: "justify"
        }}>
          GoRent adalah aplikasi penyewaan peralatan elektronik yang
          memungkinkan pengguna untuk dengan mudah menemukan, memesan, dan
          menyewa berbagai jenis produk elektronik dari penyedia yang
          terpercaya. Aplikasi ini dirancang untuk memberikan kemudahan bagi
          pengguna dalam mendapatkan akses ke perangkat yang mereka butuhkan
          tanpa harus membelinya, sehingga lebih hemat dan fleksibel.
        </p>

        {/* Fitur Utama */}
        <SectionTitle>Fitur Utama</SectionTitle>
        <Row>
          {[
            {
              icon: <LuBuilding2 />,
              title: "Penyewaan Mudah dan Cepat",
              description:
                "Proses pemesanan yang simpel dan intuitif, mulai dari pencarian produk hingga pembayaran.",
            },
            {
              icon: <LuTarget />,
              title: "Beragam Kategori Produk",
              description:
                "Tersedia berbagai jenis barang elektronik seperti laptop, kamera, proyektor, dan lainnya.",
            },
            {
              icon: <LuUsers />,
              title: "Verifikasi Akun",
              description:
                "Demi keamanan, pengguna diwajibkan mengunggah foto KTP saat pendaftaran untuk memastikan identitas penyewa.",
            },
            {
              icon: <LuRocket />,
              title: "Pembayaran Aman",
              description:
                "Sistem pembayaran terintegrasi yang memudahkan transaksi secara langsung melalui aplikasi.",
            },
          ].map((feature, idx) => (
            <Col key={idx} md={6} className="mb-2">
              <CardWrapper>
                <Card.Body>
                  <CardTitle>
                    {feature.icon}
                    <h6>{feature.title}</h6>
                  </CardTitle>
                  <CardContent>
                    <p className="m-0">{feature.description}</p>
                  </CardContent>
                </Card.Body>
              </CardWrapper>
            </Col>
          ))}
        </Row>

        {/* Visi dan Misi */}
        <SectionTitle>Visi Kami</SectionTitle>
        <VisionMissionText>
          Menjadi platform penyewaan peralatan elektronik terkemuka yang dapat
          diakses oleh siapa saja, kapan saja, dengan pelayanan yang aman,
          mudah, dan terpercaya.
        </VisionMissionText>

        <SectionTitle>Misi Kami</SectionTitle>
        <VisionMissionText>
          <ul>
            <li>
              Menyediakan berbagai pilihan produk elektronik berkualitas yang
              mudah diakses bagi semua kalangan.
            </li>
            <li>
              Memberikan kenyamanan dan keamanan pengguna dengan layanan
              verifikasi dan pembayaran terintegrasi.
            </li>
            <li>
              Memberikan solusi praktis dan ekonomis bagi pengguna yang
              membutuhkan alat elektronik tanpa harus membelinya.
            </li>
          </ul>
        </VisionMissionText>

        {/* Tim Kami */}
        <SectionTitle>Tim Kami</SectionTitle>
        <Row>
        {[
          {
            name: "Fikri Taufiqul Anam",
            role: "202251176",
            image: "/assets/images/fikri.png",
          },
          {
            name: "Ramadhan Sulthon Alfanie",
            role: "202251073",
            image: "/assets/images/sulthon.png",
          },
          {
            name: "Firman Hidayatullah",
            role: "202251271",
            image: "/assets/images/firman.png",
          },
          {
            name: "M. Fahris Noor Ikhwan",
            role: "202251073",
            image: "/assets/images/fahris.png",
          },
          {
            name: "Anda Adi Pamungkas",
            role: "202351032",
            image: "/assets/images/andar.png",
          },
        ].map((member, idx) => (
          <Col key={idx} md={4} sm={6} lg={2} className="m-auto">
            <TeamMember>
              <img src={member.image} alt={member.name} />
              <p className="mb-1">{member.role}</p>
              <h6>{member.name}</h6>
            </TeamMember>
          </Col>
        ))}
      </Row>

      </AboutContainer>
    </>
  );
}
