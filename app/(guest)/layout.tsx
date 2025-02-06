import Banners from "@/components/banner";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Banners />
      {children}
    </>
  );
};
export default GuestLayout;
