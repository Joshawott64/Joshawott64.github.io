import PrintBox from "../components/prints_page/PrintBox.jsx";
import BladesOfChaosPainted from "../assets/3d_prints/BladesOfChaosPainted.jpg";
import BobaFull from "../assets/3d_prints/BobaFull.jpg";
import BobaGunPainted from "../assets/3d_prints/BobaGunPainted.jpg";
import BobaGunRaw from "../assets/3d_prints/BobaGunRaw.jpg";
import BobaHelmetPainted from "../assets/3d_prints/BobaHelmetPainted.jpg";
import BobaHelmetRaw from "../assets/3d_prints/BobaHelmetRaw.jpg";
import CrosshairPainted from "../assets/3d_prints/CrosshairPainted.jpg";
import DecayedMasterswordPainted from "../assets/3d_prints/DecayedMasterswordPainted.jpg";
import DecayedMasterswordRaw from "../assets/3d_prints/DecayedMasterswordRaw.jpg";
import DinPainted from "../assets/3d_prints/DinPainted.jpg";
import GhostOfMandalore from "../assets/3d_prints/GhostOfMandalore.jpg";
import GloomhandsPainted from "../assets/3d_prints/GloomhandsPainted.jpg";
import GloomhandsRaw from "../assets/3d_prints/GloomhandsRaw.jpg";
import GodOfSwag from "../assets/3d_prints/GodOfSwag.jpg";
import LeviathanAxePainted from "../assets/3d_prints/LeviathanAxePainted.jpg";
import RawBladesAndAxe from "../assets/3d_prints/RawBladesAndAxe.jpg";
import SwolePokemon from "../assets/3d_prints/SwolePokemon.jpg";
import UltrahandPainted from "../assets/3d_prints/UltrahandPainted.jpg";
import UltrahandPrimed from "../assets/3d_prints/UltrahandPrimed.jpg";
import UltrahandRaw from "../assets/3d_prints/UltrahandRaw.jpg";

const PrintsPage = () => {
  return (
    <div className="flex flex-col justify-start place-items-ceneter gap-y-2 w-full h-full px-5 lg:px-10 xl:px-16 2xl:px-20 py-2 text-darkest overflow-y-auto">
      <div className="flex justify-center place-items-center w-full animate-fadeFromLeft">
        <p className="text-2xl drop-shadow-lg">3D Prints</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-2 w-full">
        <PrintBox
          name={"Raw Boba Fett Helmet"}
          image={BobaHelmetRaw}
          description={`Raw print of Boba Fett's helmet. Printed on Creality Ender 3 Pro"`}
        />
        <PrintBox
          name={"Finished Boba Fett Helmet"}
          image={BobaHelmetPainted}
          description={`Fully assembled and painted. Ready to hunt some bounties.`}
        />
        <PrintBox
          name={"Raw Boba Fett Rifle"}
          image={BobaGunRaw}
          description={`Raw print of Boba Fett's EE-3. Printed on Creality Ender 3 Pro.`}
        />
        <PrintBox
          name={"Finished Boba Fett Rifle"}
          image={BobaGunPainted}
          description={`Locked and loaded.`}
        />
        <PrintBox
          name={"Full Boba Fett Armor"}
          image={BobaFull}
          description={`"He's worth a lot to me."`}
        />
        <PrintBox
          name={"Imperial Crosshair Helmet"}
          image={CrosshairPainted}
          description={`"Good soldiers follow orders." Printed on Creality CR-10S Pro v2.`}
        />
        <PrintBox
          name={"The Mandalorian (Din Djarin) Helmet"}
          image={DinPainted}
          description={`"This is the way." Printed on Creality CR-10S Pro v2.`}
        />
        <PrintBox
          name={"The Ghost of Mandalore"}
          image={GhostOfMandalore}
          description={`Kratos from God of War's likeness painted on a Mandalorian helmet. Printed on Creality CR-10S Pro v2.`}
        />
        <PrintBox
          name={"Raw Blades of Chaos & Leviathan Axe"}
          image={RawBladesAndAxe}
          description={`Iconic weapons from God of War. Printed on Creality CR-10S Pro v2.`}
        />
        <PrintBox
          name={"The Leviathan Axe"}
          image={LeviathanAxePainted}
          description={`"Oh, I'd recognize it anywhere. Ask me, was one of our best... infused with the echoing screams of twenty frost trolls. Give or take." -Sindri`}
        />
        <PrintBox
          name={"The Blades of Chaos"}
          image={BladesOfChaosPainted}
          description={`"Even hateful things have their uses." -Kratos`}
        />
        <PrintBox
          name={"Swag-Daddy Mjolnir"}
          image={GodOfSwag}
          description={`Signature weapon of The God of Swag. Printed on Creality Ender 3 Pro.`}
        />
        <PrintBox
          name={"Swole Pokémon"}
          image={SwolePokemon}
          description={`Fitness goals. Printed on Creality Ender 3 Pro.`}
        />
        <PrintBox
          name={"Raw Decayed Master Sword"}
          image={DecayedMasterswordRaw}
          description={`Now with 60% less blade. Printed on Creality CR-10S Pro v2.`}
        />
        <PrintBox
          name={"Finished Decayed Master Sword"}
          image={DecayedMasterswordPainted}
          description={`"A blade that shatters so easily against my power cannot save you from me." -Ganondorf`}
        />
        <PrintBox
          name={"Raw Ultrahand"}
          image={UltrahandRaw}
          description={`Distinguished cuff & rings. Printed on Creality CR-10S Pro v2 & Elegoo Mars 3 Pro.`}
        />
        <PrintBox
          name={"Primed Ultrahand"}
          image={UltrahandPrimed}
          description={`Primed and ready for painting. Just had to make sure it fit.`}
        />
        <PrintBox
          name={"Finished Ultrahand"}
          image={UltrahandPainted}
          description={`"Enjoy these final moments. I will be taking far more than your arm this time." -Ganondorf`}
        />
        <PrintBox
          name={"Raw Gloom Hands"}
          image={GloomhandsRaw}
          description={`You never forget your first encounter with these. Printed on Elegoo Mars 3 Pro.`}
        />
        <PrintBox
          name={"Finished Gloom Hands"}
          image={GloomhandsPainted}
          description={`Just as horrifying as I remember.`}
        />
      </div>
    </div>
  );
};

export default PrintsPage;
