function getPathAndLocation() {
  let path = window.location.pathname;
  let splittedPath = path.split("/");
  const finalPath = [splittedPath.at(-2), splittedPath.at(-1)].join("/"); //handled for both local and sever
  let isPage = false;
  if (finalPath.includes("pages")) isPage = true;
  return { finalPath, isPage };
}

const { finalPath, isPage } = getPathAndLocation();

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
  setTimeout(function () {
    return showSlides(slideClassName, dotClassName, slideIndex);
  }, 2000); // Change image every 2 seconds
}

function getAboutUsContent(isPage) {
  return `
    <div id="about-us" class="contact border-bottom-class" style="background: #65b2d1;">
      <div class="iyohgi" style="text-align: center;">
        <h1 class="i78bq-2-3 contact-details">About Us - Shree Paramhans Enterprises</h1>
        <div id="city-section-content">
          <div class="fill-form-img-div" style="align-self: center;">
            <img alt="" loading="lazy" width="400px" height="auto" src=${
              isPage ? "../assets/ABOUTUS.jpg" : "assets/ABOUTUS.jpg"
            }></img>
          </div>
          <div class="contact-details" style="text-align: left;">
            <p>Welcome to Shree Paramhans Enterprises, your trusted partner for all your moving needs. With years of experience in the industry, we have established ourselves as a reliable and professional moving company dedicated to providing top-notch moving and packing services.</p><br /><br />
            <p style="margin-bottom: 5px; font-size: 22px;">
              <b>Our Mission</b><br />
            </p>
            <p>Our mission is to make your moving experience as smooth and stress-free as possible. We understand that moving can be a daunting task, and our goal is to handle every aspect of your move with care and efficiency. From the moment you contact us to the final delivery at your new location, we strive to exceed your expectations with our commitment to excellence.</p><br /><br />
            <p style="margin-bottom: 5px; font-size: 22px;">
              <b>Our Services</b><br />
            </p>  
            <p>At Shree Paramhans Enterprises, we offer a comprehensive range of moving services to cater to your specific needs:
            </p><br />
            <p><b>Residential Moving:</b> Whether you're moving across the street or across the country, our professional movers ensure your belongings are transported safely and securely.<br /><br />
  
            <b>Commercial Moving:</b> We specialize in office and business relocations, minimizing downtime and ensuring a smooth transition for your company.<br /><br />
  
            <b>Packing Services:</b> Our expert packers use high-quality materials and techniques to protect your items during transit. We offer full and partial packing services tailored to your needs.<br /><br />
  
            <b>Storage Solutions:</b> Need storage before, during, or after your move? Our secure storage facilities provide short-term and long-term solutions for your belongings.<br /><br />
  
            <b>Long-Distance Moving:</b> Moving to a different state? Our experienced movers handle all the logistics of long-distance moves, ensuring your possessions arrive on time and in perfect condition.<br /><br />
  
            <b>Local Moving:</b> Our local moving services are designed to make your move within the city or region hassle-free and efficient.</p><br /><br />
  
              <p style="margin-bottom: 5px; font-size: 22px;"><b>Why Choose Us?</b><br /></p>
  
              <p>Choosing Shree Paramhans Enterprises means choosing a team of experienced movers who are dedicated to providing exceptional service. Here are a few reasons why our customers trust us with their moves:<br /><br />
  
              <b>Professionalism:</b> Our movers are trained professionals who handle your belongings with the utmost care and respect.<br /><br />
  
              <b>Reliability:</b> We pride ourselves on being a reliable moving company that you can count on to show up on time and deliver as promised.<br /><br />
  
              <b>Experience:</b> With years of experience in the moving industry, we have the knowledge and expertise to handle moves of all sizes and complexities.<br /><br />
  
              <b>Customer Satisfaction:</b> Our top priority is customer satisfaction. We go above and beyond to ensure that our clients are happy with our services from start to finish.<br /><br />
  
              <b>Transparent Pricing:</b> We offer competitive and transparent pricing with no hidden fees. Our detailed quotes provide a clear understanding of the costs involved.<br />
  
          </div>
        </div>
      </div>
    </div>
    `;
}

function getBlogsContent(isPage) {
  return `
    <div id="blogs" class="contact border-bottom-class" style="background: #ffffff;">
      <div class="iyohgi" style="text-align: center;">
        <h1 class="i78bq-2-3 contact-details">Blogs</h1>
        <div id="city-section-content">
          <div class="fill-form-img-div" style="align-self: center;">
            <img alt="" loading="lazy" width="400px" height="auto" src=${
              isPage ? "../assets/BLOG.jpg" : "assets/BLOG.jpg"
            }></img>
          </div>
          <div class="contact-details" style="text-align: left;">
            <p style="margin-bottom: 5px; font-size: 22px;">
              <b>1. The Ultimate Moving Checklist: Everything You Need to Know</b><br />
            </p>
            <p>
            Moving can be a daunting task, but with the right preparation, it can be a smooth and stress-free experience. Here’s the ultimate moving checklist to ensure you don’t miss a thing.<br /><br /><br />
            <ul style="line-height: 2.0em; padding-left: 25px;">
            <li><span><b>Eight Weeks Before Moving:</b></span> Start decluttering your home and decide what to keep, sell, or donate. Begin researching professional movers and get quotes.</li>          
            <li><span><b>Six Weeks Before Moving:</b></span> Gather packing supplies such as boxes, bubble wrap, and tape. Start packing items you don’t use daily.</li>          
            <li><span><b>Four Weeks Before Moving:</b></span> Confirm your moving date with the moving company. Arrange for packing services if needed.</li>
            <li><span><b>Two Weeks Before Moving:</b></span> Notify utility companies of your move. Pack an essentials box with items you’ll need immediately after moving.</li>
            <li><span><b>Moving Day:</b></span> Do a final walk-through of your home to ensure nothing is left behind. Supervise the movers and double-check the inventory list.</li><br />
            </ul>
            </p>
            <p style="margin-bottom: 5px; font-size: 22px;">
              <b>2. Top 10 Packing Tips for a Stress-Free Move</b><br />
            </p>
            <p>
            Packing is one of the most critical aspects of moving. With these top 10 packing tips, you can ensure your belongings are safe and organized.<br /><br /><br />
            <ul style="line-height: 2.0em; padding-left: 25px;">
            <li><span><b>Start Early:</b></span> Begin packing well in advance to avoid last-minute stress.</li>
            <li><span><b>Use Quality Packing Materials:</b></span> Invest in sturdy boxes, bubble wrap, and packing tape to protect your items.</li>
            <li><span><b>Label Everything:</b></span> Clearly label each box with its contents and the room it belongs to.</li>
            <li><span><b>Pack Room by Room:</b></span> Focus on packing one room at a time to stay organized.</li>
            <li><span><b>Keep Essentials Accessible:</b></span> Pack a separate bag with essentials such as toiletries, medications, and important documents.</li>
            <li><span><b>Use Wardrobe Boxes:</b></span> These are perfect for transporting clothes without wrinkling them.</li>
            <li><span><b>Protect Fragile Items:</b></span> Use plenty of padding and mark boxes with fragile items clearly.</li>
            <li><span><b>Don’t Overpack Boxes:</b></span> Ensure boxes are not too heavy to lift and won’t break under the weight.</li>
            <li><span><b>Seal Boxes Properly:</b></span> Use packing tape to securely seal each box.</li>
            <li><span><b>Hire Professional Packers:</b></span> Consider hiring professional packers if you’re short on time or have valuable items.</li><br />
            </ul>
            </p>
            <p style="margin-bottom: 5px; font-size: 22px;">
              <b>3. How to Choose the Right Moving Company</b><br />
            </p>
            <p>
            Selecting the right moving company can make all the difference in your moving experience. Here’s how to choose a reliable mover.<br /><br /><br />
            <ul style="line-height: 2.0em; padding-left: 25px;">
            <li><span><b>Research and Recommendations:</b></span> Ask friends and family for recommendations and read online reviews.</li>
            <li><span><b>Check Credentials:</b></span> Ensure the moving company is licensed and insured.</li>
            <li><span><b>Get Multiple Quotes:</b></span> Obtain estimates from several moving companies to compare prices and services.</li>   
            <li><span><b>Understand the Services Offered:</b></span> Make sure the company provides the services you need, such as packing, storage, or long-distance moving.</li> 
            <li><span><b>Review the Contract:</b></span> Carefully read the contract before signing and clarify any doubts.</li>
            <li><span><b>Ask About Hidden Fees:</b></span> Ensure there are no hidden charges that could surprise you later.</li>
            <li><span><b>Inquire About Their Experience:</b></span> Choose a company with a proven track record in the moving industry.</li><br />
            </ul>
            </p>
            <p style="margin-bottom: 5px; font-size: 22px;">
              <b>4. Why You Should Consider Professional Packing Services</b><br />
            </p>
            <p>
            Packing can be one of the most time-consuming parts of moving. Here’s why you should consider hiring professional packing services.<br /><br /><br /> 
            <ul style="line-height: 2.0em; padding-left: 25px;">
            <li><span><b>Save Time:</b></span> Professional packers can efficiently pack your entire home in a fraction of the time it would take you.</li>
            <li><span><b>Ensure Safety:</b></span> They use high-quality packing materials and techniques to protect your belongings.</li>
            <li><span><b>Reduce Stress:</b></span> Letting professionals handle the packing frees up your time and reduces moving-related stress.</li>
            <li><span><b>Experience and Expertise:</b></span> Professional packers have the experience to pack items of all shapes and sizes securely.</li>
            <li><span><b>Insurance Coverage:</b></span> Many moving companies offer insurance options for items packed by their professionals, providing peace of mind.</li><br />
            </ul>
            </p>
            <p style="margin-bottom: 5px; font-size: 22px;">
              <b>5. How to Make Long-Distance Moving Easier</b><br />
            </p>
            <p>
            Long-distance moving comes with its unique set of challenges. Here are some tips to make your cross-country move easier.<br /><br /><br />
            <ul style="line-height: 2.0em; padding-left: 25px;">
            <li><span><b>Plan Ahead:</b></span> Start planning your move as early as possible to avoid last-minute issues.</li>
            <li><span><b>Choose the Right Movers:</b></span> Hire experienced long-distance movers who are licensed and insured.</li>
            <li><span><b>Stay Organized:</b></span> Keep a detailed inventory of your belongings and important documents.</li>
            <li><span><b>Pack Smart:</b></span> Use proper packing materials and techniques to protect your items during transit.</li>
            <li><span><b>Take Care of Utilities:</b></span> Arrange for utility services to be disconnected at your old home and connected at your new one.</li>
            <li><span><b>Stay in Touch with Your Movers:</b></span> Maintain open communication with your moving company to stay updated on the status of your move.</li>
            <li><span><b>Prepare for the Unexpected:</b></span> Have a contingency plan in case of delays or other issues.</li> 
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
    <div id="faq" class="contact border-bottom-class" style="background: #ffffff;">
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
        : `<div id="product-images" class="contact border-bottom-class" style="background: #ffffff;">
      <div class="iyohgi" style="text-align: center;">
        <div class="">
          <div class="slideshow-container">
  
            <div class="slides fade">
              <img class="slideImg" alt="" loading="lazy" src=${
                isPage ? "../assets/1.jpeg" : "assets/1.jpeg"
              } height="300px" width="350px">
              <div class="slides-text">Safe and Sound, Every Detail Perfected. 🛡️✨ #Excellence Assured
              <br /><br />
              </div>
            </div>
  
            <div class="slides fade">
              <img class="slideImg" alt="" loading="lazy" src=${
                isPage ? "../assets/3.png" : "assets/3.png"
              } height="300px" width="350px">
              <div class="slides-text">Powered by Excellence: Our Arsenal of Resources Ready for You. 💼⚙️ #Prepared For Success
              </div>
            </div>
  
            <div class="slides fade">
              <img class="slideImg" alt="" loading="lazy" src=${
                isPage ? "../assets/4.png" : "assets/4.png"
              } height="300px" width="320px">
              <div class="slides-text">Your Trusted Partner: Where Every Customer Finds a Companion. 🤝 #Customer First
              </div>
            </div>
  
            <div class="slides fade">
              <img class="slideImg" alt="" loading="lazy" src=${
                isPage ? "../assets/5.png" : "assets/5.png"
              } height="300px" width="320px">
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
          </div>
        </div>
      </div>
     </div>
    </div>

    <div id="intro" class="contact border-bottom-class" style="background: #ffffff;">
      <div class="iyohgi" style="text-align: center;">
        <h1 class="i78bq-2-3 contact-details">Backed by Cutting Edge Technology</h1>
        <p>
        Shree Paramhans Enterprises is a professionally managed manufacturer and supplier of high carbon steel hand hacksaw blades. The products are remarkable for their durability and performance. We have a research and development unit for ensuring superior quality of hand hacksaw blades to satisfy the requirements of our clients. SPENTO is our copyright brand having proper registration with premium quality.  
        </p>
      </div>
    </div>

    <div id="products" class="contact border-bottom-class" style="background: #7f8060;">
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

    <div id="cards-list" class="contact border-bottom-class" style="background: #ffffff;">
      <div class="iyohgi" style="text-align: center;">
        <div id="cards-content">
          <div class="card flex-div col-div" style="background: #7f8060;">
              <img src=${
                isPage ? "../assets/objective.png" : "assets/objective.png"
              } alt="objective" width="50px" height="50px">
              <div class="container">
                  <h4><b>Objectives</b></h4>
                  <p>Our objective is to provide quality product to our clients. We give preference to our clients satisfaction.</p>
              </div>
          </div>
          <div class="card flex-div col-div" style="background: #7f8060;">
              <img src=${
                isPage ? "../assets/quality_assurance.png" : "assets/quality_assurance.png"
              } alt="objective" width="50px" height="50px">
              <div class="container">
                  <h4><b>Quality Assurance</b></h4>
                  <p>We are one of the prominent names in the field of manufacturing and supplying of High Carbon Steel Hacksaw Blades.</p>
              </div>
          </div>
          <div class="card flex-div col-div" style="background: #7f8060;">
              <img src=${
                isPage ? "../assets/clients.png" : "assets/clients.png"
              } alt="objective" width="50px" height="50px">
              <div class="container">
                  <h4><b>Clients</b></h4>
                  <p>We have been able to attract a large number of clients that is spread all over the country. Our products are highly demanded in the industry.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  
    <div id="form-detail" class="contact border-bottom-class" style="background: #7f8060;">
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

    <div id="contact" class="contact border-bottom-class" style="background: white;">
        <div class="iyohgi" style="text-align: center;">
        <h1 class="contact-details ">Doubts Dismissed: Let Us Clear the Path to Clarity with Shree Paramhans Enterprises</h1>
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
  showSlides("slides", "dot", slideIndex);
}
