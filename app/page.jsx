import Button from "@/components/Button";
import Card from "@/components/Card";
import Card2 from "@/components/Card2";
import Company from "@/components/Company";
import Headder from "@/components/Headder";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Headder />
      <Company />
      <div className="text-center mt-4 mb-4 text-4xl font-bold">
        Mobile App Development Tailored For Your Unique Business Goals
      </div>
      {/* card portion start */}
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-24">
        <Card
          carddesc="Full cycle product development bringing innovative ideas to life."
          cardtext="Fully Custom Mobile Apps"
          cardimg="https://static.wixstatic.com/media/25f9e8_1035ce6b940f4bcaa687b5b9bd4ebcf4~mv2.png/v1/crop/x_0,y_18,w_3200,h_2363/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/35B9781A-01C4-4FC3-801C-43650FC0919D.png"
        />
        <Card
          carddesc="Full cycle product development bringing innovative ideas to life."
          cardtext="Fully Custom Mobile Apps"
          cardimg="https://static.wixstatic.com/media/25f9e8_c69939e83644429bb13ab6b2a10ea498~mv2.png/v1/crop/x_0,y_14,w_2400,h_1773/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/E406B448-76A6-4A9A-9163-4153BEFD461B.png"
        />
        <Card
          carddesc="Full cycle product development bringing innovative ideas to life."
          cardtext="Fully Custom Mobile Apps"
          cardimg="https://static.wixstatic.com/media/25f9e8_91d7c5cb87404280b59c66e6886e2355~mv2.png/v1/crop/x_0,y_18,w_3200,h_2363/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/550A169A-062D-44AD-A91C-BA99C5910BCD.png"
        />
        <Card
          carddesc="Full cycle product development bringing innovative ideas to life."
          cardtext="Fully Custom Mobile Apps"
          cardimg="https://static.wixstatic.com/media/25f9e8_dd1c0f93f871438d9a36ed9644d37831~mv2.png/v1/crop/x_0,y_5,w_800,h_591/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CA3C461E-105E-4EEE-A89C-D4679EFA2C9F.png"
        />
        <Card
          carddesc="Full cycle product development bringing innovative ideas to life."
          cardtext="Fully Custom Mobile Apps"
          cardimg="https://static.wixstatic.com/media/25f9e8_13d3450992e04fe1b17684b22d00df28~mv2.png/v1/crop/x_0,y_9,w_1600,h_1182/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FC7DD0FE-7172-4EA7-B009-F38D8ABCCD6B.png"
        />
        <Card
          carddesc="Full cycle product development bringing innovative ideas to life."
          cardtext="Fully Custom Mobile Apps"
          cardimg="https://static.wixstatic.com/media/25f9e8_febea0cb942f493599bf82bb0cc773ca~mv2.png/v1/crop/x_0,y_14,w_2400,h_1773/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8D8B4F2B-588F-4410-B3D5-19065545A8B1.png"
        />
        <Card
          carddesc="Full cycle product development bringing innovative ideas to life."
          cardtext="Fully Custom Mobile Apps"
          cardimg="https://static.wixstatic.com/media/25f9e8_862424469b324e51ac3964650eb0e0c8~mv2.png/v1/crop/x_0,y_14,w_2400,h_1773/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5219CBC9-FB2B-48B9-8E09-DAA8DEB4E01B.png"
        />
        <Card
          carddesc="Full cycle product development bringing innovative ideas to life."
          cardtext="Fully Custom Mobile Apps"
          cardimg="https://static.wixstatic.com/media/25f9e8_e69701a428674a94a53790f309a0940d~mv2.jpeg/v1/crop/x_0,y_1,w_259,h_191/fill/w_362,h_267,al_c,lg_1,q_80,enc_auto/1D54F44E-4A28-460A-AF42-42F5ACDA287C.jpeg"
        />
        <Card
          carddesc="Full cycle product development bringing innovative ideas to life."
          cardtext="Fully Custom Mobile Apps"
          cardimg="https://static.wixstatic.com/media/25f9e8_91d7c5cb87404280b59c66e6886e2355~mv2.png/v1/crop/x_0,y_18,w_3200,h_2363/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/550A169A-062D-44AD-A91C-BA99C5910BCD.png"
        />
      </div>
      {/* card portion end */}
      <div className="mt-12">
        <Button buttonText="learn more" />
      </div>
      {/* TURNKEY APP DEVELOPMENT start */}
      <div className="mt-24 bg-[#71E1E2] w-full px-4 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <p className="font-bold text-2xl lg:text-3xl text-center mb-6 lg:mb-8">
            TURNKEY APP DEVELOPMENT FOR THOSE WHO DEMAND THE BEST
          </p>
          <p className="font-bold text-4xl lg:text-5xl text-center mb-12 lg:mb-16">
            Bring Your App Idea To Life With Industry Experts
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:mr-12">
              <p className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-10">
                Work With A Top Notch App Success Team To Bring Your Idea To
                Life
              </p>
              <p className="text-lg lg:text-xl mb-8 lg:mb-12 leading-relaxed lg:leading-normal">
                Our team of talented developers and designers will work
                one-on-one with you to take your app from idea to reality. We’ve
                helped businesses from Fortune 500 companies to small local
                businesses build powerful mobile apps and we're ready to help
                you too!
              </p>
              <Button buttonText="Get Started" />
            </div>
            <div className="lg:w-1/2">
              <img
                className="w-full h-auto"
                src="https://static.wixstatic.com/media/25f9e8_24d43b4f46434d66b488826954edb86c~mv2.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* TURNKEY APP DEVELOPMENT end */}
      {/* why choose us start */}
      <div className="bg-gray-200 w-full text-center p-16">
        <h3 className="font-bold text-3xl lg:text-4xl uppercase tracking-widest text-gray-900 dark:text-white mt-12 mb-6">
          See Why Businesses Choose Digital Prodigee
        </h3>
        <div className="mx-auto max-w-lg lg:max-w-3xl bg-[#71E1E2] p-6 rounded-lg shadow-lg">
          <p className="text-base lg:text-lg mb-4">
            "Every struggle is resistant forming new strength in you. Embrace
            pain and challenges because it is the universe birthing a new
            version of yourself."
          </p>
          <p className="text-sm lg:text-base mb-2">CEO of Digital Prodigee</p>
          <p className="text-sm lg:text-base">Dinah Redhouse</p>
        </div>
      </div>
      {/* why choose us end */}
      {/*cards2 start */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-24">
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
      <div className="mt-12">
        <Button buttonText="learn more" />
      </div>
      {/* cards2 end */}
      {/* last card start  */}
      <div>
        <p className="text-center mt-4 mb-4 text-5xl font-bold">
          Are You An Agency Looking To Build Mobile Apps?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="lg:w-1/2">
          <img
            className="w-full h-auto"
            src="https://static.wixstatic.com/media/25f9e8_b88a433772dd44dd8d05197ace2ea2a2~mv2.png/v1/fill/w_685,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/wlr-img%403x-compressor.png"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:mr-12">
          <p className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-10">
            Work With A Top Notch App Success Team To Bring Your Idea To Life
          </p>
          <p className="text-lg lg:text-xl mb-8 lg:mb-12 leading-relaxed lg:leading-normal">
            Our team of talented developers and designers will work one-on-one
            with you to take your app from idea to reality. We’ve helped
            businesses from Fortune 500 companies to small local businesses
            build powerful mobile apps and we're ready to help you too!
          </p>
          <Button buttonText="Get Started" />
        </div>
      </div>
      {/* last card start  */}
    </main>
  );
}
