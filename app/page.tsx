"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string>('/profile-placeholder.png');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageSrc(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="w-full max-w-3xl h-[75vh] mx-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg flex flex-col p-6">
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 flex justify-center mb-6">
            <label 
              htmlFor="profile-upload" 
              className="relative w-[170px] h-[170px] rounded-full shadow-lg cursor-pointer overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={"/pov.jpg"}
                  alt="Photo de profil"
                  fill
                  sizes="170px"
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          <div className="flex-grow flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-6">À Propos de Moi</h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Je suis étudiant en 2ème année de BTS SIO, passionné par l'informatique sous toutes ses
              formes. J'ai choisi de suivre ma première année en formation initiale pour acquérir une solide base théorique
              et approfondir mes connaissances techniques. Pour ma deuxième année, j'ai opté pour l'alternance afin de
              mettre en pratique mes compétences en entreprise et découvrir concrètement le monde professionnel de
              l'informatique. Cette approche mixte me permet d'avoir une vision complète du métier, alliant théorie et
              pratique. Je me spécialiserai en cybersécurité pour ma 3ème année, démontrant mon intérêt particulier pour ce
              domaine crucial de l'informatique moderne.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
