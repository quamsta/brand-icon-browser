const sharp = require("sharp");
const fs = require("fs");
const srcFolder = "node_modules/uiowa-brand-icons/icons/";
const destFolder = "public/brand-icons/";
const iconsData = JSON.parse(
  fs.readFileSync("node_modules/uiowa-brand-icons/icons.json", "utf-8")
);

main();

async function main() {
  // Clear out destination folder, recreate it
  fs.rmSync(destFolder, {
    recursive: true,
    force: true,
  });
  fs.mkdirSync(destFolder);

  console.log(
    "Building icon variant images based on the icons in " +
      srcFolder +
      "icons.json and placing them in " +
      destFolder +
      ". This may take a while..."
  );

  // -------------------- //
  // Build image variants:
  // -------------------- //

  // If you want, you can loop through the first item for testing purposes:
  iconsData.icons.slice(0, 1).forEach((icon) => {
    // iconsData.icons.forEach((icon) => {
    createVariant(icon.name, "one-color");
    createVariant(icon.name, "two-color");
  });
}

// @todo clean this up...
async function createVariant(icon, variant) {
  var originalImagePath = "";
  var destImagePath = "";
  var transparentBackground = {
    r: 0,
    g: 0,
    b: 0,
    alpha: 0,
  };

  try {
    switch (variant) {
      case "one-color":
        originalImagePath = srcFolder + icon + ".svg";

        // one-color-black.svg (no manipulation, just copies svg from node_modules)
        fs.copyFile(
          originalImagePath,
          destFolder + icon + "-" + variant + "-black.svg",
          (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
          }
        );

        // one-color-gold.svg (copies from original one color svg from node_modules, modifies it)
        fs.copyFile(
          originalImagePath,
          destFolder + icon + "-" + variant + "-gold.svg",
          (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
          }
        );

        let oneColorGoldVariantData = fs.readFileSync(
          destFolder + icon + "-" + variant + "-gold.svg",
          "utf8",
          (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
          }
        );

        oneColorGoldVariantData = oneColorGoldVariantData.replace(
          "<path ",
          '<path fill="#FFCD00" '
        );

        fs.writeFile(
          destFolder + icon + "-" + variant + "-gold.svg",
          oneColorGoldVariantData,
          (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
          }
        );

        // one-color-white.svg (copies from one svg from node_modules, modifies it)
        fs.copyFile(
          originalImagePath,
          destFolder + icon + "-" + variant + "-white.svg",
          (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
          }
        );

        // one-color-black.png
        await sharp(originalImagePath)
          .resize({ width: 751, height: 751 })
          .png({ colors: 16 })
          .toFile(destFolder + icon + "-" + variant + "-black.png");

        // one-color-white.png
        await sharp(originalImagePath)
          .modulate({ lightness: 100 })
          .resize({ width: 751, height: 751 })
          .png({ colors: 16 })
          .toFile(destFolder + icon + "-" + variant + "-white.png");

        // one-color-gold.png (dependent on one-color-black.png)
        await sharp({
          create: {
            width: 751,
            height: 751,
            channels: 4,
            background: "#FFCD00",
          },
        })
          .composite([
            {
              input: destFolder + icon + "-one-color-black.png",
              blend: "dest-in",
            },
          ])
          .resize({ width: 751, height: 751 })
          .png({ colors: 16 })
          .toFile(destFolder + icon + "-one-color-gold.png");

        // -------------- //
        // Aspect ratios:
        // -------------- //

        // white-square (dependent on -one-color-white.png)
        await createPaddedVariant(
          icon,
          variant,
          "white",
          1000,
          1000,
          "square",
          transparentBackground
        );
        // white-wide (dependent on -one-color-white.png)
        await createPaddedVariant(
          icon,
          variant,
          "white",
          1920,
          1080,
          "wide",
          transparentBackground
        );
        // gold-square (dependent on gold.png)
        await createPaddedVariant(
          icon,
          variant,
          "gold",
          1000,
          1000,
          "square",
          transparentBackground
        );
        // gold-wide (dependent on gold.png)
        await createPaddedVariant(
          icon,
          variant,
          "gold",
          1920,
          1080,
          "wide",
          transparentBackground
        );
        // one-color-black-square (dependent on one-color-black.png)
        await createPaddedVariant(
          icon,
          variant,
          "black",
          1000,
          1000,
          "square",
          transparentBackground
        );

        // one-color-black-wide (dependent on one-color-black.png)
        await createPaddedVariant(
          icon,
          variant,
          "black",
          1920,
          1080,
          "wide",
          transparentBackground
        );
        break;

      case "two-color":
        originalImagePath = srcFolder + icon + "-two-color.svg";
        // two-color.svg (no manipulation, just copies svg from node_modules)
        fs.copyFile(
          originalImagePath,
          destFolder + icon + "-" + variant + ".svg",
          (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
          }
        );

        // two-color.png (possibly discontinued for public consumption, but needed for generating the following icons)
        await sharp(originalImagePath)
          .resize({ width: 751, height: 751 })
          .png({ colors: 16 })
          .toFile(destFolder + icon + "-" + variant + ".png");

        // two-color-wide (dependent on two-color.png)
        await createPaddedVariant(
          icon,
          variant,
          null,
          1920,
          1080,
          "wide",
          transparentBackground
        );
        // two-color-square (dependent on two-color.png)
        await createPaddedVariant(
          icon,
          variant,
          null,
          1000,
          1000,
          "square",
          transparentBackground
        );
        break;
      default:
    }
  } catch (error) {
    console.log(error);
  }

  async function createPaddedVariant(
    icon,
    variant,
    color,
    width,
    height,
    ratioName,
    background
  ) {
    var baseImagePath = "";
    var destPath = "";
    if (variant == "two-color") {
      baseImagePath = destFolder + icon + "-two-color.png";
      destPath = destFolder + icon + "-" + variant + "-" + ratioName + ".png";
    } else {
      baseImagePath = destFolder + icon + "-" + variant + "-" + color + ".png";
      destPath =
        destFolder +
        icon +
        "-" +
        variant +
        "-" +
        color +
        "-" +
        ratioName +
        ".png";
    }
    await sharp({
      create: {
        width: width,
        height: height,
        channels: 4,
        background: background,
      },
    })
      .composite([
        {
          input: baseImagePath,
          blend: "over",
        },
      ])
      .png({ colors: 16 })
      .toFile(destPath);
  }
}
