import certificationImage from "../../assets/Certification.jpg";
import siteLogo from "../../assets/logo.jpg";
import itHeroBackground from "../../assets/it-hero-bg.jpg";

const imageAssets = [
  certificationImage,
  siteLogo,
  itHeroBackground,
  `${process.env.PUBLIC_URL}/logo1.png`,
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757342482/ChatGPT_Image_Sep_8_2025_07_33_54_PM_pkgwsr.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757354106/ChatGPT_Image_Sep_8_2025_10_52_27_PM_krwpik.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757800346/ChatGPT_Image_Sep_11_2025_01_13_07_PM_jxvdi4.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1764085502/20251125_2042_Modern_Electrical_Workspace_Banner_simple_compose_01kaxtree2fykv11a2qkc4ar7z_rvc6l6.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757790538/ChatGPT_Image_Sep_14_2025_12_08_45_AM_lmyc78.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757775249/ChatGPT_Image_Sep_13_2025_07_52_01_PM_n8opip.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757778102/20250913_2018_CCTV_Installation_Process_simple_compose_01k51tdb4kfctaywayb6nk255s_lbvgkf.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1764613806/20251201_2323_Eco_Energy_Illustration_remix_01kbdjc4q0f2vayyppswy3sa31_dlrchb.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1764426580/20251129_1926_Premium_Electrical_Installation_simple_compose_01kb801eb6fecrs3wnd533a0ca_zngnuz.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1764610639/20251201_2235_Electrical_Installation_Stages_remix_01kbdfk46dfdmbrwkx8rrxvx7p_tikjlh.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1764613919/20251201_2325_Futuristic_Electrical_Emergency_Scene_remix_01kbdjen2vf9w98300a6fphk62_1_aeuopm.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1764610802/20251201_2236_Emergency_Electrician_at_Night_simple_compose_01kbdfmrvjfpztxjyac95f7par_y7dmag.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1764611915/20251201_2256_Electrician_with_Logo_remix_01kbdgswr3ezmvmm5s1n0dfp07_vjimgr.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759099841/ChatGPT_Image_Sep_29_2025_03_33_11_AM_ejopfy.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759099816/ChatGPT_Image_Sep_29_2025_03_33_12_AM_ko5o9e.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759099746/ChatGPT_Image_Sep_29_2025_03_33_13_AM_uf25yc.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759099788/ChatGPT_Image_Sep_29_2025_03_33_14_AM_xujkcg.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759099766/ChatGPT_Image_Sep_29_2025_03_33_15_AM_tf8l71.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759099716/ChatGPT_Image_Sep_29_2025_03_33_16_AM_hleh8x.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759099690/ChatGPT_Image_Sep_29_2025_03_33_17_AM_wgschc.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759099664/ChatGPT_Image_Sep_29_2025_03_33_18_AM_nder4t.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759097756/ChatGPT_Image_Sep_29_2025_03_14_50_AM_xruenn.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759102806/ChatGPT_Image_Sep_29_2025_04_39_49_AM_eiyvjh.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1759104095/ChatGPT_Image_Sep_29_2025_04_50_17_AM_jstum0.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757788696/ChatGPT_Image_Sep_13_2025_11_37_58_PM_blssbd.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757617624/ChatGPT_Image_Sep_12_2025_12_06_32_AM_fkdbv7.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757617505/ChatGPT_Image_Sep_12_2025_12_04_49_AM_vidu8z.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757602608/ChatGPT_Image_Sep_11_2025_07_56_32_PM_afleph.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757601945/ChatGPT_Image_Sep_11_2025_07_41_31_PM_fzya3v.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1757617738/ChatGPT_Image_Sep_12_2025_12_08_49_AM_dwwdn9.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1792080149/Neon_Green_EV_Charging_Station_didjes.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto/v1788796506/Gemini_Generated_Image_rb8sr1rb8sr1rb8s_i92ncu.jpg",
].filter(Boolean);

const cachedImages = new Map();
const MAX_CONCURRENT_PRELOADS = 3;
const IMAGE_LOAD_TIMEOUT = 15000;
const CRITICAL_IMAGE_TIMEOUT = 1600;

export function preloadImageAssets() {
  let nextIndex = 0;
  const workerCount = Math.min(MAX_CONCURRENT_PRELOADS, imageAssets.length);
  const workers = Array.from({ length: workerCount }, async () => {
    while (nextIndex < imageAssets.length) {
      const source = imageAssets[nextIndex];
      nextIndex += 1;
      await preloadImage(source);
    }
  });

  return Promise.all(workers);
}

export function preloadCurrentPageImage() {
  const pageImage = document.querySelector("main img, figure img");
  const source = pageImage?.currentSrc || pageImage?.src;

  if (!source) {
    return Promise.resolve();
  }

  let timeoutId;
  const timeout = new Promise((resolve) => {
    timeoutId = setTimeout(resolve, CRITICAL_IMAGE_TIMEOUT);
  });

  return Promise.race([
    preloadImage(source, "high"),
    timeout,
  ]).finally(() => clearTimeout(timeoutId));
}

function preloadImage(source, priority = "low") {
  if (cachedImages.has(source)) {
    return cachedImages.get(source);
  }

  const imagePromise = new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.fetchPriority = priority;
    const timeout = setTimeout(() => {
      console.warn(`Timed out while preloading site image: ${source}`);
      resolve();
    }, IMAGE_LOAD_TIMEOUT);
    const finish = () => {
      clearTimeout(timeout);
      resolve();
    };

    image.onload = finish;
    image.onerror = () => {
      console.error(`Unable to preload site image: ${source}`);
      finish();
    };
    image.src = source;
  });

  cachedImages.set(source, imagePromise);
  return imagePromise;
}
