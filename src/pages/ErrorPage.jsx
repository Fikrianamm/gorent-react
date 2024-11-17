import styled from "styled-components";
import { Back } from "../components/Button";

const ErrorWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 1rem;
`;

const ErrorContent = styled.div`
  text-align: center;
  max-width: 400px;
`;

export default function ErrorPage({ error }) {
  return (
    <ErrorWrapper>
      <img src="/assets/images/GoRent.png" alt="GoRent Logo" className="logo" />
      <ErrorContent>
        <h1 className="fw-bold mb-2">
          {error ? error.title : "Halaman Tidak Ditemukan"}
        </h1>
        <p className="text-secondary mb-4">
          {error
            ? error.message
            : "Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke halaman utama."}
        </p>

        <Back variant={"primary-btn"}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Kembali ke Beranda
        </Back>
      </ErrorContent>
    </ErrorWrapper>
  );
}
