function getPathAndLocation() {
  let path = window.location.pathname;
  let splittedPath = path.split("/");
  const finalPath = [splittedPath.at(-2), splittedPath.at(-1)].join("/"); //handled for both local and sever
  let isPage = false;
  if (finalPath.includes("pages")) isPage = true;
  return { finalPath, isPage };
}

const { finalPath, isPage } = getPathAndLocation();

function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function processFormSubmission(e) {
  e.preventDefault(); //prevent page reload on submitting form
  validateDateField(); //if date validation fails then onSubmit will not execute further
  const formEle = document.getElementById("inquiry-form");
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.disabled = true;
  callAPI(formEle, submitBtn);
}

function onSubmit() {
  const formEle = document.getElementById("inquiry-form");
  formEle?.addEventListener("submit", processFormSubmission);
}

function updateUI(tryOrCatch, submitBtn, formEle) {
  formEle.removeEventListener("submit", processFormSubmission);
  const modalImg = document.getElementById("modal-img");
  const modalP = document.getElementById("modal-p");
  if (tryOrCatch === "try") {
    modalImg.src = isPage ? "../assets/tick.svg" : "assets/tick.svg";
    modalP.innerHTML = "Thank you! <br /> We will contact you shortly.";
  } else {
    modalImg.src = isPage ? "../assets/cross.svg" : "assets/cross.svg";
    modalP.innerHTML = "Unable to send request!";
  }
  showModal();
  submitBtn.disabled = false;
}

function callAPI(formEle, submitBtn) {
  const formData = new FormData(formEle);
  const URL = "";

  fetch(URL, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      updateUI("try", submitBtn, formEle);
    })
    .catch(() => {
      updateUI("catch", submitBtn, formEle);
    });
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

function getAboutUsContent(isPage) {
  return `
    <div id="about-us" class="contact" style="background: #7f8060;">
      <div class="iyohgi" style="text-align: center;">
        <h1 class="i78bq-2-3">About Us - Shree Paramhans Enterprises</h1>
        <div id="city-section-content">
          <div class="fill-form-img-div" style="align-self: center;">
            <img alt="" loading="lazy" width="400px" height="auto" src=${
              isPage ? "../assets/ABOUTUS.jpg" : "assets/ABOUTUS.jpg"
            }></img>
          </div>
          <div style="text-align: left;">
            <p>Welcome to Shree Paramhans Enterprises, a renowned leader in the manufacturing of premium hacksaw blades. With ${new Date().getFullYear() - new Date('1998-06-20').getFullYear()} years of industry expertise, we specialize in designing and producing high-quality blades crafted from top-grade materials like high-carbon steel and bi-metal alloys. Our blades are engineered for precision cutting in various applications, ensuring durability and efficiency.</p><br /><br />
            <p>Based in Bhiwani, Haryana, we serve a global clientele across industries such as construction, automotive, and manufacturing. Our state-of-the-art manufacturing facility employs advanced technology and strict quality control measures to guarantee superior products that exceed customer expectations. Whether you need blades for heavy-duty industrial use or intricate workshop tasks, Shree Paramhans Enterprises provides reliable solutions tailored to your specific requirements.</p><br /><br />
             
            <p>At Shree Paramhans Enterprises, customer satisfaction is our priority. We offer personalized service, quick turnaround times, and competitive pricing to meet your business needs. Explore our comprehensive range of hacksaw blades and experience the difference in performance and longevity. Contact us today to discuss how we can support your cutting operations with our expertise and commitment to excellence.
            </p><br />
  
          </div>
        </div>
      </div>
    </div>
    `;
}

function getBlogsContent(isPage) {
  return `
    <div id="blogs" class="contact" style="background: #7f8060;">
      <div class="iyohgi" style="text-align: center;">
      <h1 class="i78bq-2-3">Choosing the Best Hacksaw Blades for Your Cutting Needs</h1>
        <div id="city-section-content">
          <div class="fill-form-img-div" style="align-self: center;">
            <img alt="" loading="lazy" width="400px" height="auto" src=${
              isPage ? "../assets/BLOG.jpg" : "assets/BLOG.jpg"
            }></img>
          </div>
          <div style="text-align: left;">
            <p>
            Are you looking for reliable hacksaw blades that deliver precision and durability? At Shree Paramhans Enterprises, we understand the importance of selecting the right tools for your cutting tasks. Our range of high-quality hacksaw blades, crafted from premium materials, ensures superior performance in cutting metals, plastics, and more. Whether you're in an industrial facility or a commercial workshop, our blades are designed to meet diverse needs with efficiency and reliability. Explore our guide to choosing the best hacksaw blades for optimal results in your operations.
            </p><br /><br />
            <p>
            <h3>Choosing the Best Hacksaw Blades for Your Cutting Needs</h3><br /><br />
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
    <div id="faq" class="contact" style="background: #ffffff;">
      <div class="iyohgi" style="text-align: center;">
        <h1 class="i78bq-2-3 contact-details">FAQs</h1>
        <div id="city-section-content">
          <div class="fill-form-img-div" style="align-self: center;">
            <img alt="" loading="lazy" width="400px" height="auto" src=${
              isPage ? "../assets/FAQs.jpg" : "assets/FAQs.jpg"
            }></img>
          </div>
          <div class="contact-details" style="text-align: left;">
            <button type="button" class="collapsible">What services do you offer as a moving and packers company?</button>
            <div class="content">
              <p>We offer a wide range of services including residential moving, commercial moving, packing and unpacking, storage solutions, and long-distance moving. Our professional movers are trained to handle all aspects of the moving process to ensure a smooth transition to your new location.</p>
            </div>
            <button type="button" class="collapsible">How much do your moving services cost?</button>
            <div class="content">
              <p>The cost of our moving services depends on various factors such as the distance of the move, the size of your belongings, and the level of packing services required. For an accurate estimate, please contact us for a free moving quote.</p>
            </div>
            <button type="button" class="collapsible">How do you ensure the safety of my belongings during the move?</button>
            <div class="content">
              <p>We prioritize the safety of your belongings by using high-quality packing materials, secure packing techniques, and experienced movers. Our team is trained to handle fragile and valuable items with care. Additionally, we offer moving insurance options for added peace of mind.</p>
            </div>
            <button type="button" class="collapsible">Do you provide packing materials?</button>
            <div class="content">
              <p>Yes, we provide a variety of packing materials including boxes, bubble wrap, packing paper, and tape. Our packing supplies are designed to protect your items during transit. You can purchase these materials separately or as part of our packing services.</p>
            </div>
            <button type="button" class="collapsible">How far in advance should I schedule my move?</button>
            <div class="content">
              <p>We recommend scheduling your move at least 4-6 weeks in advance, especially during peak moving seasons. This allows us to accommodate your preferred moving date and provide the best possible service.</p>
            </div>
            <button type="button" class="collapsible">Can you handle long-distance moves?</button>
            <div class="content">
              <p>Yes, we specialize in both local and long-distance moving services. Our team is equipped to manage all the logistics of long-distance relocations, ensuring your belongings arrive safely and on time.</p>
            </div>
            <button type="button" class="collapsible">What should I do to prepare for my move?</button>
            <div class="content">
              <p>To prepare for your move, start by decluttering and organizing your belongings. Create an inventory list and label your boxes. We also recommend setting aside important documents and personal items to keep with you during the move. Our team can provide a detailed moving checklist to help you get started.</p>
            </div>
            <button type="button" class="collapsible">Do you offer storage solutions?</button>
            <div class="content">
              <p>Yes, we offer secure storage solutions for both short-term and long-term needs. Our storage facilities are climate-controlled and monitored 24/7 to ensure the safety of your belongings. Contact us to learn more about our storage options.</p>
            </div>
            <button type="button" class="collapsible">Are there any items you cannot move?</button>
            <div class="content">
              <p>For safety reasons, we cannot move hazardous materials such as flammable liquids, explosives, and certain chemicals. Additionally, we recommend transporting valuables such as jewelry, important documents, and personal mementos yourself. Please contact us for a complete list of restricted items.</p>
            </div>
            <button type="button" class="collapsible">How can I get a moving quote?</button>
            <div class="content">
              <p>You can get a moving quote by filling out our online form, calling our office, or scheduling an in-home estimate. Provide us with details about your move, including the size of your home, the distance, and any special requirements. We will provide a free, no-obligation quote based on your specific needs.</p>
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
            <span style="font-size: 14px;">GST NO.: 06AGXPG5905D1ZC</span>
            <span style="font-size: 14px;">TRADEMARK NO.: 2962122</span>
        </div>
      <div id="ibulz" class="nav-inner">
        <a class="flex-div row-div" href="https://www.spentohacksawblades.com/">
          <img id="logo" alt="" src=${
            isPage ? "../assets/logo-favicon.png" : "assets/logo-favicon.png"
          } width="auto" height="80px"></img>
          <h1 class="heading">Shree Paramhans Enterprises</h1>
        </a>
        <div id="contact-info">
          <a aria-label="mobile" class="flex-div row-div" href=tel:+919416059179><img alt="" src=${
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
        <a href="https://www.spentohacksawblades.com/"><b>Home</b></a>
        <a href="https://www.spentohacksawblades.com/pages/AboutUs.html"><b>About Us</b></a>
        <a href="https://www.spentohacksawblades.com/#our-services"><b>Products</b></a>
        <a href="https://www.spentohacksawblades.com/pages/Blogs.html"><b>Blogs</b></a>
        <a href="https://www.spentohacksawblades.com/pages/FAQs.html"><b>FAQs</b></a>
      </div>
    </div>
  
    ${
      isPage && cityOrLinkName === "AboutUs"
        ? getAboutUsContent(isPage)
        : isPage && cityOrLinkName === "Blogs"
        ? getBlogsContent(isPage)
        : isPage && cityOrLinkName === "FAQs"
        ? getFAQsContent(isPage)
        : `<div id="product-images" class="contact" style="background: #ffffff;">
      <div class="" style="text-align: center;">
          <div class="slideshow-container">
  
            <div class="slides fade">
              <img class="slideImg" alt="" loading="lazy" src=${
                isPage ? "../assets/1.jpeg" : "assets/1.jpeg"
              } height="auto">
              <div class="slides-text">Safe and Sound, Every Detail Perfected. 🛡️✨ #Excellence Assured
              <br /><br />
              </div>
            </div>
  
            <div class="slides fade">
              <img class="slideImg" alt="" loading="lazy" src=${
                isPage ? "../assets/2.jpeg" : "assets/2.jpeg"
              } height="auto">
              <div class="slides-text">Powered by Excellence: Our Arsenal of Resources Ready for You. 💼⚙️ #Prepared For Success
              </div>
            </div>
  
            <div class="slides fade">
              <img class="slideImg" alt="" loading="lazy" src=${
                isPage ? "../assets/3.jpg" : "assets/3.jpg"
              } height="auto">
              <div class="slides-text">Your Trusted Partner: Where Every Customer Finds a Companion. 🤝 #Customer First
              </div>
            </div>
  
            <div class="slides fade">
              <img class="slideImg" alt="" loading="lazy" src=${
                isPage ? "../assets/4.jpeg" : "assets/4.jpeg"
              } height="auto">
              <div class="slides-text">Relax, We've Got You Covered: Ensuring Customer Satisfaction Every Step of the Way. 😌👌 #Peace Of Mind Service
              </div>
            </div>

            <div class="slides fade">
              <img class="slideImg" alt="" loading="lazy" src=${
                isPage ? "../assets/5.jpg" : "assets/5.jpg"
              } height="auto">
              <div class="slides-text">Relax, We've Got You Covered: Ensuring Customer Satisfaction Every Step of the Way. 😌👌 #Peace Of Mind Service
              </div>
            </div>

            <div class="slides fade">
              <img class="slideImg" alt="" loading="lazy" src=${
                isPage ? "../assets/6.jpeg" : "assets/6.jpeg"
              } height="auto">
              <div class="slides-text">Relax, We've Got You Covered: Ensuring Customer Satisfaction Every Step of the Way. 😌👌 #Peace Of Mind Service
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
        <p>
        Welcome to Shree Paramhans Enterprises, your trusted partner in the hacksaw blades industry. With ${new Date().getFullYear() - new Date('1998-06-20').getFullYear()} years of expertise, we specialize in manufacturing high-quality hacksaw blades engineered for precision and durability using High Carbon Steel as raw material. Our blades are crafted from premium materials to ensure superior performance in cutting metals, plastics, and more. Based in Bhiwani, Haryana, we serve a global clientele, providing efficient cutting solutions tailored to diverse industrial and commercial applications. Discover how our advanced hacksaw blades can optimize your cutting operations and elevate productivity. Contact us today to explore our extensive range and experience the difference in quality and reliability.
        </p>
      </div>
    </div>

    <div id="products" class="contact" style="background: #7f8060;">
      <div class="iyohgi" style="text-align: center;">
        <h1 class="i78bq-2-3 contact-details ">Our Products</h1>
        <div class="card">
            <img src=${
              isPage ? "../assets/objective.png" : "assets/objective.png"
            } alt="objective" width="251px" height="250px">
            <div class="container">
                <h4><b></b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
      </div>
    </div>

    <div id="cards-list" class="contact" style="background: #ffffff;">
      <div class="iyohgi" style="text-align: center;">
        <div id="cards-content">
          <div class="card flex-div col-div" style="background: #7f8060;">
              <img src=${
                isPage ? "../assets/objective.png" : "assets/objective.png"
              } alt="objective" width="50px" height="50px">
              <div class="container">
                  <h4><b>Objective</b></h4>
                  <p>Our goal at Shree Paramhans Enterprises is to provide superior hacksaw blades crafted from High Carbon Steel, ensuring precision and durability for cutting metals, plastics, and more. Based in Bhiwani, Haryana, we serve global industries with reliable, high-performance solutions tailored to diverse cutting needs.</p>
              </div>
          </div>
          <div class="card flex-div col-div" style="background: #7f8060;">
              <img src=${
                isPage ? "../assets/quality_assurance.png" : "assets/quality_assurance.png"
              } alt="quality assurance" width="50px" height="50px">
              <div class="container">
                  <h4><b>Quality Assurance</b></h4>
                  <p>We uphold stringent quality assurance measures at Shree Paramhans Enterprises, ensuring our hacksaw blades meet the highest standards for precision and durability. Crafted from High Carbon Steel, our products excel in cutting metals and plastics, guaranteeing reliability for industrial and commercial applications.</p>
              </div>
          </div>
          <div class="card flex-div col-div" style="background: #7f8060;">
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
  
    <div id="form-detail" class="contact" style="background: #7f8060;">
      <div class="iyohgi" class="flex-div col-div" style="align-items: unset;">
        <p class="i78bq-2-3 contact-details" style="font-size: x-large; text-align: center; border-bottom: 70px;"></b></p>
        <div class="inquire-tos-content">
          <div id="customer-form">
            <form id="inquiry-form" class="flex-div col-div" style="align-items: flex-start;">
              <label for="name">Name*</label>
              <input id="name" name="name" placeholder="Enter Name" autocomplete="off" required></input>
              <label for="phone">Phone*</label>
              <input id="phone" name="phone" type="tel" placeholder="Enter Phone" autocomplete="off" required pattern="[0-9]{10}"></input>
              <label for="name">Email*</label>
              <input id="email" name="email" type="email" placeholder="Enter Email" autocomplete="off" required></input>
              <label for="name">Leave a Message</label>
              <textarea id="msg" name="msg" rows="3" placeholder="Enter message..." width="100%"></textarea>
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
              isPage ? "../assets/2QueryForm.gif" : "assets/2QueryForm.gif"
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
            <div class="fill-form-img-div" style="align-self: center;">
            <img alt="" loading="lazy" width="500px" height="auto" src=${
              isPage ? "../assets/6ContactUs.gif" : "assets/6ContactUs.gif"
            }></img>
            </div>
            <div>
            <p id="iqrh3-2-2" class="contact-details" style="margin-bottom: 10px; margin-top: 20px;">Contact us</p>
            <div class="igiuzk flex-div row-div">
            <a id="i2tpy3" aria-label="facebook" href="https://www.facebook.com/hacksawblades" target="_blank"><img alt="facebook page link" loading="lazy" id="i3gekg" height="49px" width="49px" src=${
              isPage ? "../assets/fb.svg" : "assets/fb.svg"
            } /></a>
            <a id="i2tpy3-5" aria-label="whatsapp" href="https://wa.me/+919416059179" target="_blank"><img alt="chat on whatsapp" loading="lazy" id="i3gekg-3" height="40px" width="40px" src=${
              isPage ? "../assets/whatsapp.svg" : "assets/whatsapp.svg"
            } /></a>
            <a id="i2tpy3-3" aria-label="email" href="mailto:sanjaygoyal3103@gmail.com"><img alt="compose email" loading="lazy" id="i3gekg-4" height="37px" width="37px"
                src=${
                  isPage ? "../assets/email.svg" : "assets/email.svg"
                } /></a>
            <a aria-label="mobile" href=tel:+919416059179><img alt="call" loading="lazy" id="i3gekg-5" height="37px" width="37px" src=${
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
            <a href="https://www.spentohacksawblades.com/#our-services"><b>Products</b></a>
            <a href="https://www.spentohacksawblades.com/pages/Blogs.html"><b>Blogs</b></a>
            <a href="https://www.spentohacksawblades.com/pages/FAQs.html"><b>FAQs</b></a>
        </div><br />
        <p id="iy2lbi">© ${new Date().getFullYear()} powered by Shree Paramhans Enterprises</p>
    </div>

    <div id="modal" class="modal">
        <div class="modal-content flex-div col-div">
        <img alt="" loading="lazy" id="modal-img" width="50px" height="50px"></img>
        <p id="modal-p" style="text-align: center";></p>
        </div>
    </div>
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

if (isPage) collapsibleProcessing();

let slidesTimeout;
let slideIndex = 0;
if (!isPage) {
  closeModal();
  onSubmit();
  showSlides("slides", "slides-dot", slideIndex);
}
