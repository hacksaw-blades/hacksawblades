function getPathAndLocation() {
  let path = window.location.pathname;
  let splittedPath = path.split("/");
  const finalPath = [splittedPath.at(-2), splittedPath.at(-1)].join("/"); //handled for both local and sever
  let isPage = false;
  if (finalPath.includes("pages")) isPage = true;
  return { finalPath, isPage };
}

const { finalPath, isPage } = getPathAndLocation();

// function showModal() {
//   const modal = document.getElementById("modal");
//   modal.style.display = "block";
// }

// function closeModal() {
//   const modal = document.getElementById("modal");

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };
// }

function processFormSubmission(e) {
  e.preventDefault(); //prevent page reload on submitting form
  // validateDateField(); //if date validation fails then onSubmit will not execute further
  // const formEle = document.getElementById("inquiry-form");
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.disabled = true;
  callAPI(submitBtn);
}

function onSubmit() {
  const formEle = document.getElementById("inquiry-form");
  formEle?.addEventListener("submit", processFormSubmission);
}

// function updateUI(tryOrCatch, submitBtn, formEle) {
//   formEle.removeEventListener("submit", processFormSubmission);
//   const modalImg = document.getElementById("modal-img");
//   const modalP = document.getElementById("modal-p");
//   if (tryOrCatch === "try") {
//     modalImg.src = isPage ? "../assets/tick.svg" : "assets/tick.svg";
//     modalP.innerHTML = "Thank you! <br /> We will contact you shortly.";
//   } else {
//     modalImg.src = isPage ? "../assets/cross.svg" : "assets/cross.svg";
//     modalP.innerHTML = "Unable to send request!";
//   }
//   showModal();
//   submitBtn.disabled = false;
// }

function callAPI(submitBtn) {
  // const formData = new FormData(formEle);
  // const URL = "";
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("msg").value;
  let contact = "+919416059179";

  let encodedMessage = encodeURIComponent(
    "Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Message: " +
      msg
  );

  let link;

  // Check if user is on a mobile device
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    link = `whatsapp://send?phone=${contact}&text=${encodedMessage}`;
  } else {
    // Desktop device
    link = `https://web.whatsapp.com/send?phone=${contact}&text=${encodedMessage}`;
  }
  window.open(link, '_blank');

  name.innerHTML = '';
  phone.innerHTML = '';
  msg.innerHTML = '';
  submitBtn.disabled = false;
  // fetch(URL, {
  //   method: "POST",
  //   body: formData,
  //   mode: "no-cors",
  // })
  //   .then(() => {
  //     updateUI("try", submitBtn, formEle);
  //   })
  //   .catch(() => {
  //     updateUI("catch", submitBtn, formEle);
  //   });
}

function currentSlide(slideClassName, dotClassName, slideIndex) {
  clearTimeout(slidesTimeout);
  showSlides(slideClassName, dotClassName, slideIndex);
}

function showSlides(slideClassName, dotClassName, slideIndex) {
  let i;
  let slides = document.getElementsByClassName(slideClassName);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  let dots = document.getElementsByClassName(dotClassName);
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i]?.className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
  slidesTimeout = setTimeout(function () {
    return showSlides(slideClassName, dotClassName, slideIndex);
  }, 2000); // Change image every 2 seconds
}

function setActiveTab() {
  const home = document.getElementById("home");
  const products = document.getElementById("product");
  const blogs = document.getElementById("blogs");
  const aboutUs = document.getElementById("aboutUs");
  const faqs = document.getElementById("faqs");
  const tabs = [home, products, blogs, aboutUs, faqs];

  if (window.location.hash === "#products") {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className.replace(" active-a", "");
    }
    products.className += " active-a";
  } else if (finalPath === "hacksawblades/index.html") {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className.replace(" active-a", "");
    }
    home.className += " active-a";
  } else if (finalPath === "pages/Blogs.html") {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className.replace(" active-a", "");
    }
    blogs.className += " active-a";
  } else if (finalPath === "pages/AboutUs.html") {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className.replace(" active-a", "");
    }
    aboutUs.className += " active-a";
  } else if (finalPath === "pages/FAQs.html") {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className.replace(" active-a", "");
    }
    faqs.className += " active-a";
  }
}

function getAboutUsContent(isPage, brand) {
  return `
    <div class="fill-form-img-div" style="text-align: center;">
      <img alt="" width="200px" height="auto" src=${
        isPage ? "../assets/logo-favicon.png" : "assets/logo-favicon.png"
      }></img>
    </div>
    <div id="about-us" class="contact" style="background: ${brand}; color: white">
      <div class="iyohgi" style="text-align: center;">
        <h1 class="i78bq-2-3">About Us - Shree Paramhans Enterprises</h1>
        <div id="city-section-content">
          <div style="text-align: left;">
            <p>Welcome to Shree Paramhans Enterprises, a renowned leader in the manufacturing of premium hacksaw blades. With ${
              new Date().getFullYear() - new Date("1998-06-20").getFullYear()
            } years of industry expertise, we specialize in designing and producing high-quality blades crafted from top-grade materials like high-carbon steel and bi-metal alloys. Our blades are engineered for precision cutting in various applications, ensuring durability and efficiency.</p><br /><br />
            <p>Based in Bhiwani, Haryana, we serve a global clientele across industries such as construction, automotive, and manufacturing. Our state-of-the-art manufacturing facility employs advanced technology and strict quality control measures to guarantee superior products that exceed customer expectations. Whether you need blades for heavy-duty industrial use or intricate workshop tasks, Shree Paramhans Enterprises provides reliable solutions tailored to your specific requirements.</p><br /><br />
             
            <p>At Shree Paramhans Enterprises, customer satisfaction is our priority. We offer personalized service, quick turnaround times, and competitive pricing to meet your business needs. Explore our comprehensive range of hacksaw blades and experience the difference in performance and longevity. Contact us today to discuss how we can support your cutting operations with our expertise and commitment to excellence.
            </p><br />
  
          </div>
        </div>
      </div>
    </div>
    `;
}

function getBlogsContent(isPage, brand) {
  return `
    <div class="fill-form-img-div" style="text-align: center;">
      <img alt="" width="400px" height="auto" src=${
        isPage ? "../assets/blogs.jpg" : "assets/blogs.jpg"
      }></img>
    </div>
    <div id="blogs" class="contact" style="background: ${brand}; color: white">
      <div class="iyohgi" style="text-align: center;">
      <h1 class="i78bq-2-3">Choosing the Best Hacksaw Blades for Your Cutting Needs</h1>
        <div id="city-section-content">
          <div style="text-align: left;">
            <p>
            Are you looking for reliable hacksaw blades that deliver precision and durability? At Shree Paramhans Enterprises, we understand the importance of selecting the right tools for your cutting tasks. Our range of high-quality hacksaw blades, crafted from premium materials, ensures superior performance in cutting metals, plastics, and more. Whether you're in an industrial facility or a commercial workshop, our blades are designed to meet diverse needs with efficiency and reliability. Explore our guide to choosing the best hacksaw blades for optimal results in your operations.
            </p><br /><br />
            <p>
            <ul style="line-height: 2.0em; padding-left: 25px;">
            <li><span><b>Introduction:</b></span> High-quality hacksaw blades are vital for precise cutting in industrial and commercial sectors, offering durability, efficiency, and enhanced productivity. Discover superior performance with Shree Paramhans Enterprises</li>
            <li><span><b>Materials Selection:</b></span> Choosing premium materials like high-carbon steel ensures hacksaw blades are durable and maintain sharpness, crucial for efficient cutting in industrial applications.</li>
            <li><span><b>Blade Design and Engineering:</b></span> Designing hacksaw blades involves optimizing tooth configuration, blade thickness, and geometry for precise cutting of metals and plastics, ensuring durability and efficiency in industrial applications.</li>
            <li><span><b>Manufacturing Process:</b></span> Step-by-step manufacturing process of hacksaw blades

              <ul style="line-height: 2.0em; padding-left: 25px;">
              <li><span><b>Material Selection:</b></span> High-quality materials like high-carbon steel or bi-metal alloys are chosen for durability and sharpness.</li>
              <li><span><b>Blade Design:</b></span> Engineers design the blade's tooth configuration, thickness, and geometry for optimal cutting performance.</li>
              <li><span><b>Blade Forming:</b></span> Raw materials are shaped into the initial blade form through stamping or rolling processes.</li>
              <li><span><b>Heat Treatment:</b></span> Blades undergo heat treatment to enhance hardness and toughness, crucial for longevity.</li>
              <li><span><b>Grinding:</b></span> Precision grinding ensures the blades have sharp cutting edges for effective material slicing.</li>
              <li><span><b>Finishing:</b></span> Final polishing and coating processes improve the blade's surface quality and corrosion resistance.</li>
              <li><span><b>Quality Control:</b></span> Rigorous testing measures ensure each blade meets industry standards for sharpness and durability.</li>
              </ul>

            </li>
            <li><span><b>Quality Assurance:</b></span> Quality assurance in hacksaw blade production ensures durability, sharpness, and consistency through rigorous testing, meeting industry standards and customer expectations.</li>
            <li><span><b>Application and Benefits:</b></span> Hacksaw blades are essential for cutting metals, plastics, and other materials in industries such as construction, automotive, and manufacturing, ensuring precision and efficiency</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
    `;
}

function collapsibleProcessing() {
  const collapsibles = document.getElementsByClassName("collapsible");
  let i;
  for (i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function () {
      var content = this.nextElementSibling;
      this.classList.toggle("active");
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

function getFAQsContent(isPage) {
  return `
    <div class="fill-form-img-div" style="text-align: center; background: #eddbc4;">
      <img alt="" width="220px" height="auto" src=${
        isPage ? "../assets/faqs.jpg" : "assets/faqs.jpg"
      }></img>
    </div>
    <div id="faq" class="contact" style="background: #ffffff;">
      <div class="iyohgi" style="text-align: center;">
        <h1 class="i78bq-2-3 contact-details">FAQs</h1>
        <div id="city-section-content">
          <div class="contact-details" style="text-align: left;">
            <button type="button" class="collapsible">What types of hacksaw blades do you offer?</button>
            <div class="content">
              <p>We offer a wide range of hacksaw blades, all made from high carbon steel. Our selection caters to different cutting needs, ensuring you have the right tool for the job.</p>
            </div>
            <button type="button" class="collapsible">How do I choose the right hacksaw blade for my project?</button>
            <div class="content">
              <p>Choosing the right hacksaw blade depends on the material you need to cut. Our high carbon steel blades are ideal for cutting metals and plastic. They offer durability and excellent cutting performance for various applications.
              </p>
            </div>
            <button type="button" class="collapsible">What are the benefits of high carbon steel hacksaw blades?</button>
            <div class="content">
              <p>High carbon steel hacksaw blades provide superior hardness and strength, making them perfect for cutting through tough materials. They maintain sharpness longer, offering a reliable and durable solution for your cutting needs.
              </p>
            </div>
            <button type="button" class="collapsible">How do I properly use a hacksaw blade?</button>
            <div class="content">
              <p>To use a hacksaw blade properly, ensure it is securely fastened in the frame with the teeth facing forward. Use steady, even strokes and avoid applying excessive pressure, as this can cause the blade to break. Always wear safety gear, such as gloves and goggles, when cutting.</p>
            </div>
            <button type="button" class="collapsible">How do I maintain and store my hacksaw blades?</button>
            <div class="content">
              <p>To maintain your hacksaw blades, keep them clean and dry to prevent rusting. Store them in a dry place and avoid bending or twisting them. For best results, replace blades that show signs of wear, such as dullness or missing teeth.</p>
            </div>
            <button type="button" class="collapsible">Can I sharpen a high carbon steel hacksaw blade?</button>
            <div class="content">
              <p>While high carbon steel hacksaw blades can technically be sharpened, it is often more cost-effective to replace the blade. Our blades are designed to be replaced when dull to ensure optimal cutting performance.</p>
            </div>
            <button type="button" class="collapsible">What safety precautions should I take when using a hacksaw blade?</button>
            <div class="content">
              <p>Always wear safety goggles and gloves when using a hacksaw blade. Ensure the blade is properly secured in the frame and inspect it for damage before use. Use steady, controlled strokes and avoid excessive force to prevent accidents.</p>
            </div>
            <button type="button" class="collapsible">Do you offer bulk discounts for hacksaw blades?</button>
            <div class="content">
              <p>Yes, we offer bulk discounts for large orders of hacksaw blades. Contact us for more information on pricing and availability.</p>
            </div>
            <button type="button" class="collapsible">What is the difference between TPI (teeth per inch) ratings on hacksaw blades?</button>
            <div class="content">
              <p>TPI (teeth per inch) indicates the number of teeth on the blade per inch. Blades with a higher TPI are used for cutting thin, hard materials, while blades with a lower TPI are better for cutting thick, soft materials. Choose a TPI rating based on the material and desired cut quality.
              </p>
            </div>
            <button type="button" class="collapsible">Where can I buy your hacksaw blades?</button>
            <div class="content">
              <p>You can purchase our high carbon steel hacksaw blades by filling out the inquiry form on our website. Alternatively, you can contact us directly via phone, WhatsApp, or email for more information and to place an order.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
}

function createHtmlContent() {
  const brand = "#403f2d";
  const cityOrLinkName = finalPath?.split("/")?.[1]?.split(".")?.[0];
  return `
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="iu9w" class="navbar-cont" style="background: #fffbf6;">
        <div class="nav-inner" style="color: white; background: ${brand};">
            <span style="font-size: 14px;"><b>GST NO.: 06AGXPG5905D1ZC</b></span>
            <span style="font-size: 14px;"><b>REGD. TRADEMARK NO.: 2962122</b></span>
        </div>
      <div id="ibulz" class="nav-inner">
        <a class="flex-div row-div" href="https://www.spentohacksawblades.com/">
          <img id="logo" alt="" src=${
            isPage ? "../assets/logo-favicon.png" : "assets/logo-favicon.png"
          } width="auto" height="60px"></img>
          <span class="heading" style="font-size: 25px;"><b>Shree Paramhans Enterprises</b></span>
        </a>
        <div id="contact-info">
          <a aria-label="mobile" class="flex-div row-div" href=tel:+919416059179><img alt="" src=${
            isPage ? "../assets/whatsappIcon.svg" : "assets/whatsappIcon.svg"
          } width="22px" height="22px"></img>
          <img alt="" src=${
            isPage ? "../assets/phone.svg" : "assets/phone.svg"
          } width="20px" height="20px"></img>
            <p class="header-font-size" style="font-weight: 700; color: ${brand}">+91-9416059179</p></a>
          
          <a aria-label="email" class="flex-div row-div" href="mailto:sanjaygoyal3103@gmail.com"><img alt="" src=${
            isPage ? "../assets/mail.svg" : "assets/mail.svg"
          } width="20px" height="20px"></img>
            <p class="header-font-size" style="margin: 5px; font-weight: 700; line-break: anywhere; color: ${brand}">sanjaygoyal3103@gmail.com</p></a>
        </div>
      </div>
      <div class="nav-inner pages a-text" style="justify-content: space-around; background: ${brand};">
        <a id="home" href="https://www.spentohacksawblades.com/"><b>Home</b></a>
        <a id="aboutUs" href="https://www.spentohacksawblades.com/pages/AboutUs.html"><b>About Us</b></a>
        <a id="product" href="https://www.spentohacksawblades.com/#products"><b>Products</b></a>
        <a id="blogs" href="https://www.spentohacksawblades.com/pages/Blogs.html"><b>Blogs</b></a>
        <a id="faqs" href="https://www.spentohacksawblades.com/pages/FAQs.html"><b>FAQs</b></a>
      </div>
    </div>
  
    ${
      isPage && cityOrLinkName === "AboutUs"
        ? getAboutUsContent(isPage, brand)
        : isPage && cityOrLinkName === "Blogs"
        ? getBlogsContent(isPage, brand)
        : isPage && cityOrLinkName === "FAQs"
        ? getFAQsContent(isPage)
        : `<div id="product-images" class="contact" style="background: #ffffff;">
      <div class="" style="text-align: center;">
          <div class="slideshow-container">
  
            <div class="slides fade">
              <img class="slideImg" alt="24 TPI double sided 1 inch blades in black-yellow" src=${
                isPage ? "../assets/1.jpeg" : "assets/1.jpeg"
              } height="400px">
              <div class="slides-text">
              <br /><br />
              </div>
            </div>
  
            <div class="slides fade">
              <img class="slideImg" alt="24 TPI single sided half inch blades in black-yellow & black-blue" loading="lazy" src=${
                isPage ? "../assets/2.jpeg" : "assets/2.jpeg"
              } height="400px">
              <div class="slides-text">
              </div>
            </div>
  
            <div class="slides fade">
              <img class="slideImg" alt="18 TPI double sided 1 inch blades in black-silver" loading="lazy" src=${
                isPage ? "../assets/3.jpg" : "assets/3.jpg"
              } height="400px">
              <div class="slides-text">
              </div>
            </div>
  
            <div class="slides fade">
              <img class="slideImg" alt="blades in a PVC box wrapped in SPENTO poly pouch wrapping" loading="lazy" src=${
                isPage ? "../assets/4.jpeg" : "assets/4.jpeg"
              } height="400px">
              <div class="slides-text">
              </div>
            </div>

            <div class="slides fade">
              <img class="slideImg" alt="flexible oiled blades" loading="lazy" src=${
                isPage ? "../assets/5.jpg" : "assets/5.jpg"
              } height="400px">
              <div class="slides-text">
              </div>
            </div>

            <div class="slides fade">
              <img class="slideImg" alt="SPENTO master packing of 30 packets" loading="lazy" src=${
                isPage ? "../assets/6.jpg" : "assets/6.jpg"
              } height="400px">
              <div class="slides-text">
              </div>
            </div>
  
          </div>
          <br>
  
          <div style="text-align:center">
            <span class="slides-dot" onclick="currentSlide('slides', 'slides-dot', 0)"></span>
            <span class="slides-dot" onclick="currentSlide('slides', 'slides-dot', 1)"></span>
            <span class="slides-dot" onclick="currentSlide('slides', 'slides-dot', 2)"></span>
            <span class="slides-dot" onclick="currentSlide('slides', 'slides-dot', 3)"></span>
            <span class="slides-dot" onclick="currentSlide('slides', 'slides-dot', 4)"></span>
            <span class="slides-dot" onclick="currentSlide('slides', 'slides-dot', 5)"></span>
          </div>
      </div>
     </div>
    </div>

    <div id="intro" class="contact" style="background: #ffffff;">
      <div class="iyohgi" style="text-align: center;">
        <h1 class="i78bq-2-3 contact-details">Backed by Cutting Edge Technology</h1>
        <p style="font-size: 18px;">
        Welcome to <b>Shree Paramhans Enterprises</b>, your trusted partner in the hacksaw blades industry. With ${
          new Date().getFullYear() - new Date("1998-06-20").getFullYear()
        } years of expertise, we specialize in manufacturing high-quality <b>hacksaw blades</b> engineered for precision and durability. Our blades are crafted from <b>high carbon steel</b> to ensure superior performance in cutting metals, plastics, and more. Based in <b>Bhiwani, Haryana</b>, we serve a global clientele, providing efficient cutting solutions tailored to diverse industrial and commercial applications. Discover how our advanced <b>SPENTO hacksaw blades</b> can optimize your cutting operations and elevate productivity. Contact us today to explore our extensive range and experience the difference in quality and reliability.
        </p>
      </div>
    </div>

    <div id="products" class="contact" style="background: #403f2d; color: white;">
      <div class="iyohgi">
      <h1 class="i78bq-2-3" style="text-align: center;">Our Products</h1>
      <div class="row">
        <div class="column">
          <img src=${
            isPage ? "../assets/2.jpeg" : "assets/2.jpeg"
          } alt="Single Sided Edge" style="width:100%">
          <div class="container">
              <p style="text-align: center;font-size: 1.17em;"><b>Single Sided Edge</b></p>
                <ul class="container">
                  <li>All hard low alloy blades made from high carbon steel</li>
                  <li>Oven baked paint</li>
                  <li>Width - 10MM to 12.5 MM</li>
                  <li>Length - 310 to 315 MM</li>
                  <li>Thickness - 0.48 MM to 0.63 MM</li>
                  <li>Sharp teeth with accurate pitch in 14, 18 & 24 TPI</li>
                </ul>
          </div>
        </div>
        <div class="column">
          <img src=${
            isPage ? "../assets/1.jpeg" : "assets/1.jpeg"
          } alt="Double Sided Edge" style="width:100%">
          <div class="container">
              <p style="text-align: center;font-size: 1.17em;"><b>Double Sided Edge</b></p>
                <ul class="container">
                  <li>All hard low alloy blades made from high carbon steel</li>
                  <li>Oven baked paint</li>
                  <li>Width - 20MM to 25 MM</li>
                  <li>Length - 310 to 315 MM</li>
                  <li>Thickness - 0.48 MM to 0.63 MM</li>
                  <li>Sharp teeth with accurate pitch in 14, 18 & 24 TPI</li>
                </ul>
          </div>
        </div>
        <div class="column">
          <img src=${
            isPage ? "../assets/5.jpg" : "assets/5.jpg"
          } alt="Flexible Blades" style="width:100%">
          <div class="container">
              <p style="text-align: center;font-size: 1.17em;"><b>Flexible Blades</b></p>
                <ul class="container">
                  <li>Fully Flexible Blades</li>
                  <li>Finish - anti rust oiled blades</li>
                  <li>Can be Single, Double, 2-in-1 or Bamboo</li>
                  <li>Single - width will be 10MM to 12.5 MM</li>
                  <li>Double - width will be 20MM to 25 MM</li>
                  <li>2-in-1 - will have edge on both sides with 10MM to 12.5 MM width</li>
                  <li>Bamboo - will have 8 TPI edge at one side and 14, 18 or 24 TPI at other side</li>
                </ul>
          </div>
        </div> 
        </div> 
      </div>
    </div>

    <div id="cards-list" class="contact" style="background: #ffffff;">
      <div class="iyohgi" style="text-align: center;">
        <div id="cards-content">
          <div class="card process-cards flex-div col-div" style="background: #7f8060;">
              <img src=${
                isPage ? "../assets/objective.png" : "assets/objective.png"
              } alt="objective" width="50px" height="50px">
              <div class="container">
                  <h4><b>Objective</b></h4>
                  <p>Our goal at Shree Paramhans Enterprises is to provide superior hacksaw blades crafted from High Carbon Steel, ensuring precision and durability for cutting metals, plastics, and more. Based in Bhiwani, Haryana, we serve global industries with reliable, high-performance solutions tailored to diverse cutting needs.</p>
              </div>
          </div>
          <div class="card process-cards flex-div col-div" style="background: #7f8060;">
              <img src=${
                isPage
                  ? "../assets/quality_assurance.png"
                  : "assets/quality_assurance.png"
              } alt="quality assurance" width="50px" height="50px">
              <div class="container">
                  <h4><b>Quality Assurance</b></h4>
                  <p>We uphold stringent quality assurance measures at Shree Paramhans Enterprises, ensuring our hacksaw blades meet the highest standards for precision and durability. Crafted from High Carbon Steel, our products excel in cutting metals and plastics, guaranteeing reliability for industrial and commercial applications.</p>
              </div>
          </div>
          <div class="card process-cards flex-div col-div" style="background: #7f8060;">
              <img src=${
                isPage ? "../assets/clients.png" : "assets/clients.png"
              } alt="clients" width="50px" height="50px">
              <div class="container">
                  <h4><b>Clients</b></h4>
                  <p>Our diverse clientele at Shree Paramhans Enterprises includes industrial facilities and commercial workshops worldwide. They rely on our high-quality hacksaw blades for precision cutting of metals and plastics. We cater to global markets with efficient solutions tailored to diverse industrial needs.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  
    <div id="form-detail" class="contact" style="background: white;">
      <div class="iyohgi" class="flex-div col-div" style="align-items: unset;">
        <p class="i78bq-2-3" style="font-size: x-large; text-align: center; border-bottom: 70px;"><b>SPENTO Hacksaw Blades: Request a Quote for Competitive Pricing!</b></p>
        <div class="inquire-tos-content">
          <div id="customer-form">
            <form id="inquiry-form" class="flex-div col-div" style="align-items: flex-start;">
              <label for="name">Name*</label>
              <input id="name" name="name" placeholder="Enter Name" autocomplete="off" required></input>
              <label for="phone">Phone*</label>
              <input id="phone" name="phone" type="tel" placeholder="Enter Phone" autocomplete="off" required pattern="[0-9]{10}"></input>
              <label for="name">Product Specifications*</label>
              <textarea id="msg" name="msg" rows="3" required placeholder="Enter Product Specifications" width="100%"></textarea>
              <input id="inquiryDate" name="inquiryDate" value=${Intl.DateTimeFormat(
                "en-GB",
                {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                }
              ).format(new Date())} style="display: none;"></input>
              <button id="submit-btn" type="submit">Submit</button>
            </form>
          </div>
          <div class="fill-form-img-div" style="align-self: center;">
            <img alt="" loading="lazy" width="600px" height="auto" src=${
              isPage ? "../assets/inquiryform.jpg" : "assets/inquiryform.jpg"
            }></img>
          </div>
        </div>  
      </div>
    </div>
    `
    }

    <div id="contact" class="contact" style="background: white;">
        <div class="iyohgi" style="text-align: center;">
        <h1 class="contact-details">Contact us for premium hacksaw blades. Fast delivery. Satisfaction guaranteed.</h1>
        <div style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
            <!--<div class="fill-form-img-div" style="align-self: center;">
              <img alt="" loading="lazy" width="500px" height="auto" src=${
                isPage ? "../assets/6ContactUs.gif" : "assets/6ContactUs.gif"
              }></img>
            </div>-->
            <div>
            <div class="igiuzk flex-div row-div">
            <a id="i2tpy3" aria-label="facebook" href="https://www.facebook.com/hacksawblades" target="_blank"><img alt="facebook page link" loading="lazy" id="i3gekg" height="49px" width="49px" src=${
              isPage ? "../assets/fb.svg" : "assets/fb.svg"
            } /></a>
            <a id="i2tpy3-5" aria-label="whatsapp" href="https://wa.me/+919416059179" target="_blank"><img alt="chat on whatsapp" loading="lazy" id="i3gekg-3" height="48px" width="40px" src=${
              isPage ? "../assets/whatsapp.svg" : "assets/whatsapp.svg"
            } /></a>
            <a id="i2tpy3-3" aria-label="email" href="mailto:sanjaygoyal3103@gmail.com"><img alt="compose email" loading="lazy" id="i3gekg-4" height="48px" width="37px"
                src=${
                  isPage ? "../assets/email.svg" : "assets/email.svg"
                } /></a>
            <a aria-label="mobile" href=tel:+919416059179><img alt="call" loading="lazy" id="i3gekg-5" height="48px" width="37px" src=${
              isPage ? "../assets/tel.svg" : "assets/tel.svg"
            } /></a>
        </div>
        <a style="text-decoration: underline;" aria-label="address" href="https://www.google.com/maps/place/SHREE+PARAMHANS+ENTERPRISES/@28.805067,76.1592185,17z/data=!3m1!4b1!4m6!3m5!1s0x391266e73fd6210b:0xddf21ecc99392a1!8m2!3d28.805067!4d76.1617934!16s%2Fg%2F1ptzvnfy4?entry=ttu">
            <span>Address: Paluwas Village, Bhiwani, Haryana 127021</span>
        </a>
        </div>
        </div>
    </div>

    <div class="copyright-footer" style="background-color: ${brand};">
        <div class="igiuzk flex-div row-div a-text" style="gap: 20px;">
            <a href="https://www.spentohacksawblades.com/"><b>Home</b></a>
            <a href="https://www.spentohacksawblades.com/pages/AboutUs.html"><b>About Us</b></a>
            <a href="https://www.spentohacksawblades.com/#products"><b>Products</b></a>
            <a href="https://www.spentohacksawblades.com/pages/Blogs.html"><b>Blogs</b></a>
            <a href="https://www.spentohacksawblades.com/pages/FAQs.html"><b>FAQs</b></a>
        </div><br />
        <p id="iy2lbi">© ${new Date().getFullYear()} powered by Shree Paramhans Enterprises</p>
    </div>

    <!--<div id="modal" class="modal">
        <div class="modal-content flex-div col-div">
        <img alt="" loading="lazy" id="modal-img" width="50px" height="50px"></img>
        <p id="modal-p" style="text-align: center";></p>
        </div>
    </div>-->
  `;
}

function manageDOM(htmlContent) {
  const container = document.createElement("div");
  container.innerHTML = htmlContent;
  document.body.appendChild(container);
}

function main() {
  const htmlContent = createHtmlContent();
  manageDOM(htmlContent);
}

main();

setActiveTab();
if (isPage) collapsibleProcessing();

let slidesTimeout;
let slideIndex = 0;
if (!isPage) {
  // closeModal();
  onSubmit();
  showSlides("slides", "slides-dot", slideIndex);
}
